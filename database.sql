-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (100) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "element" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL,
    "description" VARCHAR (1000),
    "atomic_number" integer,
    "atomic_weight" float
);


CREATE TABLE "compound" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL,
    "description" VARCHAR (1000),
    "date" TIMESTAMP NOT NULL,
    "user_id" integer,
    "state" VARCHAR(8),
    "image" varchar (1900) UNIQUE,
    "quantity" float
);