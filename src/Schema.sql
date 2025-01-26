CREATE TABLE stocks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ticker VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    buy_price DECIMAL(10, 2) NOT NULL
);