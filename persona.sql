CREATE TABLE persona_games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    release_year INT,
    platform VARCHAR(50),
    description TEXT
);