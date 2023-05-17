 DROP TABLE IF EXISTS characters;
-- DROP TABLE IF EXISTS favorites; 

CREATE TABLE characters(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    quote TEXT
);

-- CREATE TABLE favorites(
--     fav_id SERIAL,
--     fav_name TEXT NOT NULL,
--     char_age INTEGER,
--     char_quote TEXT,
--     char_id INTEGER FOREIGN KEY REFERENCES characters(id),
-- );

