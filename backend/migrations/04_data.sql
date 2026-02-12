\c techyar
-- 1. افزودن کاربران (Users)
-- شامل یک ادمین و چند کاربر عادی با وضعیت‌های مختلف (با و بدون آدرس/ایمیل)
INSERT INTO users (phone_number, password, name, family, created_at, role, email, address, wallet, birthday, avatar) VALUES
('09120000001', 'hashed_pass_admin', 'علی', 'مدیری', NOW(), 'admin', 'admin@techyar.com', 'تهران، خیابان آزادی', 10000000, '1990-01-01', 'admin.png'),
('09120000002', 'hashed_pass_user1', 'رضا', 'کاربرپناه', NOW(), 'user', 'reza@gmail.com', 'اصفهان، میدان نقش جهان', 500000, '1995-05-20', 'avatar1.png'),
('09120000003', 'hashed_pass_user2', 'سارا', 'تهرانی', NOW(), 'user', NULL, NULL, 0, '2000-12-10', NULL);

-- 2. افزودن سرورها (Servers)
-- سرورهای متنوع با قیمت‌ها و سیستم‌عامل‌های مختلف
INSERT INTO servers (ip, picture, price, os, storage) VALUES
('192.168.1.10', 'server_dell.png', 1500000.00, 'Ubuntu 22.04', '1TB NVMe'),
('192.168.1.11', 'server_hp.png', 2500000.00, 'Windows Server 2022', '2TB SSD'),
('192.168.1.12', 'server_custom.png', 800000.00, 'CentOS 7', '500GB HDD');

-- 3. افزودن قطعات سخت‌افزاری (CPU, GPU, RAM)
-- متصل به سرورهای ایجاد شده در مرحله قبل
-- نکته: طبق اسکیمای شما، کلید اصلی جداول GPU و RAM نامش cpu_number است.

-- CPU
INSERT INTO cpu (model, number_of_threads, number_of_cores, server_id) VALUES
('Intel Xeon E5-2680', 24, 12, 1),
('AMD EPYC 7763', 128, 64, 2),
('Intel Core i7-4790K', 8, 4, 3);

-- GPU (نام ستون کلید اصلی طبق تعریف شما cpu_number است)
INSERT INTO gpu (model, vram, server_id) VALUES
('NVIDIA Tesla A100', '80GB', 1),
('NVIDIA RTX 3090', '24GB', 2);
-- سرور سوم گرافیک ندارد (برای تست حالت بدون گرافیک)

-- RAM (نام ستون کلید اصلی طبق تعریف شما cpu_number است)
INSERT INTO ram (model, generation, server_id) VALUES
('Samsung 64GB ECC', 'DDR4', 1),
('Kingston 128GB ECC', 'DDR4', 2),
('Crucial 16GB', 'DDR3', 3);

-- 4. ایجاد سبد خرید (Cart Shop)
-- سبد خرید برای کاربر شماره 2 (رضا)
INSERT INTO cart_shop (created_at, user_id) VALUES
(NOW(), 2);

-- 5. افزودن آیتم به سبد خرید (Cart Item)
-- کاربر شماره 2 سرور شماره 1 را در سبد دارد
INSERT INTO cart_item (user_id, cart_number, server_number, quantity, price_at_added_time, start_rent_time, rental_duration) VALUES
(2, 1, 1, 1, 1500000.00, NOW() + INTERVAL '1 day', '24:00:00');

-- 6. ایجاد سفارش‌ها (Orders)
-- یک سفارش فعال و یک سفارش منقضی شده برای تست وضعیت‌ها

-- سفارش منقضی شده (Expired) برای کاربر 2
INSERT INTO orders (total_price, status, created_at, user_id) VALUES
(500000.00, 'expired', NOW() - INTERVAL '1 month', 2);

-- سفارش فعال (Active) برای کاربر 1 (ادمین هم می‌تواند خرید کند)
INSERT INTO orders (total_price, status, created_at, user_id) VALUES
(2500000.00, 'active', NOW(), 1);


