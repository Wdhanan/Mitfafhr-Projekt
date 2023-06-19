CREATE TABLE timetable_weekday
(
    user_id    INT  NOT NULL,
    weekday    INT  NOT NULL,
    start_time TIME NOT NULL,
    end_time   TIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (user_id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, weekday),
    CHECK (weekday BETWEEN 1 AND 7),
    CHECK (start_time < end_time)
) CHARACTER SET utf8mb4;