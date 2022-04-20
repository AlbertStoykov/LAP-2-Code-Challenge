DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id BIGINT(20) serial PRIMARY KEY,
    username varchar(50) NOT NULL
);
