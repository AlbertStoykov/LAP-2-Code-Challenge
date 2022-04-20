DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id BIGINT(20) serial PRIMARY KEY,
    name varchar(50) NOT NULL
);
