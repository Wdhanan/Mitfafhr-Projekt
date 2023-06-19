CREATE TABLE user
(
    user_id       INT AUTO_INCREMENT PRIMARY KEY,
    image_id      INT         NOT NULL DEFAULT 1, -- id of blank profile pic
    username      VARCHAR(20) NOT NULL UNIQUE,
    email         VARCHAR(50) NOT NULL,
    firstname     VARCHAR(20) NOT NULL,
    lastname      VARCHAR(20) NOT NULL,
    street        VARCHAR(30) NOT NULL,
    street_number VARCHAR(20) NOT NULL,
    zip           VARCHAR(20) NOT NULL,
    city          VARCHAR(30) NOT NULL,
    position      POINT       NOT NULL,
    password_hash BINARY(20) NOT NULL,
    password_salt BINARY(32) NOT NULL,
    create_dt     DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modify_dt     DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (image_id) REFERENCES image (image_id)
) CHARACTER SET utf8mb4;