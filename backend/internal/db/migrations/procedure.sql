\c techyar

------------------------------------

CREATE PROCEDURE set_order(curr_user_id INT)
LANGUAGE plpgsql
AS $$
DECLARE
    total_price DECIMAL(15, 2);
    new_order_number INTEGER;
BEGIN 

    SELECT SUM(price_at_added_time * quantity) 
    INTO total_price 
    FROM cart_item AS ci 
    WHERE ci.user_id = curr_user_id;

    INSERT INTO orders (total_price, status, created_at, user_id)
    VALUES(total_price, 'active', NOW(), curr_user_id) 
    RETURNING "order_number" INTO new_order_number;

    INSERT INTO order_item (order_number, server_number, quantity, price_at_added_time, start_rent_time, rental_duration)
    SELECT new_order_number, server_number, quantity, price_at_added_time, start_rent_time, rental_duration
    FROM cart_item as ci
    WHERE ci.user_id = curr_user_id;

    DELETE FROM cart_item as ci WHERE ci.user_id = curr_user_id;  
    
END;
$$;