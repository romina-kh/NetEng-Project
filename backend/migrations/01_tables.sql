-- REVOKE CONNECT ON DATABASE techyar FROM public;

-- SELECT pg_terminate_backend(pid)
-- FROM pg_stat_activity
-- WHERE datname = 'techyar'
--   AND pid <> pg_backend_pid();

-- DROP DATABASE IF EXISTS techyar;
-- CREATE DATABASE techyar;

-- \c techyar
-----------------------------------------------
DROP TYPE IF EXISTS user_role CASCADE;
CREATE TYPE user_role AS ENUM ('user', 'admin');

DROP TYPE IF EXISTS order_status CASCADE;
CREATE TYPE order_status AS ENUM ('expired', 'active');


CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    phone_number VARCHAR(11) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR (30) NOT NULL,
    family VARCHAR (30) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    role user_role NOT NULL,
    email VARCHAR(30),
    address VARCHAR (100),
    wallet DECIMAL(15, 2),
    birthday DATE,
    avatar VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS cart_shop(
    cart_number SERIAL,
    created_at TIMESTAMP NOT NULL,
    user_id INTEGER,

    PRIMARY KEY (cart_number, user_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS servers(
    server_number SERIAL PRIMARY KEY,
    ip VARCHAR (15) NOT NULL,
    picture VARCHAR(50) NOT NULL,
    price DEC(15, 2) NOT NULL,
    os VARCHAR(20) NOT NULL,
    storage VARCHAR (25) NOT NULL
);

CREATE TABLE IF NOT EXISTS cpu(
    cpu_number SERIAL PRIMARY KEY,
    model VARCHAR(30) NOT NULL,
    number_of_threads INTEGER NOT NULL,
    number_of_cores INTEGER NOT NULL,
    server_id INTEGER,

    FOREIGN KEY (server_id) REFERENCES servers(server_number)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS gpu(
    cpu_number SERIAL PRIMARY KEY,
    model VARCHAR(30) NOT NULL,
    vram VARCHAR(20) NOT NULL,
    server_id INTEGER,

    FOREIGN KEY (server_id) REFERENCES servers(server_number)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS ram(
    cpu_number SERIAL PRIMARY KEY,
    model VARCHAR(30) NOT NULL,
    generation VARCHAR(20) NOT NULL,
    server_id INTEGER,

    FOREIGN KEY (server_id) REFERENCES servers(server_number)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS orders(
    order_number SERIAL PRIMARY KEY,
    total_price DEC(15, 2) NOT NULL, 
    status order_status NOT NULL,
    created_at TIMESTAMP NOT NULL,
    user_id INTEGER,

    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS cart_item (
    user_id INTEGER,
    cart_number INTEGER,
    server_number INTEGER,
    quantity INTEGER,
    price_at_added_time DECIMAL(15, 2),
    start_rent_time TIMESTAMP,
    rental_duration INTERVAL,

    PRIMARY KEY (user_id, cart_number, server_number),

    FOREIGN KEY (user_id, cart_number) REFERENCES cart_shop(user_id, cart_number)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

    FOREIGN KEY (server_number) REFERENCES servers (server_number)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS order_item (
    order_number INTEGER,
    server_number INTEGER,
    quantity INTEGER,
    price_at_added_time DECIMAL(15, 2),
    start_rent_time TIMESTAMP,
    rental_duration INTERVAL,

    PRIMARY KEY (order_number, server_number),

    FOREIGN KEY (order_number) REFERENCES orders(order_number)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

    FOREIGN KEY (server_number) REFERENCES servers (server_number)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

