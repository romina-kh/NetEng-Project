\c techyar

CREATE FUNCTION check_server_is_available()
RETURNS TRIGGER AS $$
DECLARE
       not_available boolean;
BEGIN

    SELECT EXISTS(
        SELECT 1
        FROM order_item AS oi
        WHERE new.server_number = oi.server_number
            AND NEW.start_rent_time < oi.start_rent_time + oi.rental_duration
            AND NEW.start_rent_time + NEW.rental_duration > oi.start_rent_time
    ) INTO not_available;

    IF not_available THEN
       RAISE EXCEPTION 'sever is not available at this time. please try another time';
    END IF;

    RETURN NEW;

END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trigger_check_stock_before_insert
    BEFORE INSERT ON cart_item
    FOR EACH ROW
    EXECUTE FUNCTION check_server_is_available();