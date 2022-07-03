CREATE TABLE image
(
    image_id     INT AUTO_INCREMENT PRIMARY KEY,
    image_data   MEDIUMBLOB  NOT NULL, -- size: ca. 16 MB
    content_type varchar(30) NOT NULL
) CHARACTER SET utf8mb4;