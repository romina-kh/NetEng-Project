\c techyar

CREATE FUNCTION check_server_is_available()
RETURNS TRIGGER AS $$
DECLARE
       not_available boolean;
BEGIN

    SELECT EXISTS(
        SELECT 1
        FROM order_item AS oi
        WHERE NEW.server_number = oi.server_number
            AND NEW.start_rent_time < oi.start_rent_time + oi.rental_duration
            AND NEW.start_rent_time + NEW.rental_duration > oi.start_rent_time
    ) INTO not_available;

    IF not_available THEN
       RAISE EXCEPTION 'sever is not available at this time. please try another time';
    END IF;

    RETURN NEW;

END;
$$ LANGUAGE plpgsql;


CREATE FUNCTION check_user_wallet()
RETURNS TRIGGER AS $$
DECLARE
    user_wallet_amount DECIMAL (15, 2);
BEGIN

    SELECT wallet
    INTO user_wallet_amount
    FROM users AS u
    WHERE NEW.user_id = u.user_id;

    IF NEW.total_price > user_wallet_amount THEN
       RAISE EXCEPTION 'your balance is insufficient';
    END IF;

    RETURN NEW;

END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trigger_check_stock_before_insert
    BEFORE INSERT ON cart_item
    FOR EACH ROW
    EXECUTE FUNCTION check_server_is_available();


CREATE TRIGGER check_user_balance
    BEFORE INSERT ON orders
    FOR EACH ROW
    EXECUTE FUNCTION check_user_wallet();