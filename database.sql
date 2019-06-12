CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "is_vendor" BOOLEAN,
    "vendor_name" VARCHAR,
    "latitude" FLOAT,
    "longitude" FLOAT,
    "current_user" BOOLEAN
);


CREATE TABLE "menu" (
  "id" SERIAL PRIMARY KEY,
  "item" VARCHAR,
  "price" FLOAT,
  "description" VARCHAR,
  "vendor_name" VARCHAR,
  "user_id" INT REFERENCES "user"
);


CREATE TABLE "user_favorites" (
  "id" SERIAL PRIMARY KEY,
  "vendor_name" VARCHAR,
  "username" VARCHAR,
  "user_id" INT REFERENCES "user",
  "is_favorite" BOOLEAN
);



CREATE TABLE "tags" (
  "id" SERIAL PRIMARY KEY,
  "item_menu" VARCHAR, 
  "vendor_name_menu" VARCHAR,
  "atkins_approved" BOOLEAN,
  "contains_peanuts" BOOLEAN,
  "kosher" BOOLEAN,
  "halal_approved" BOOLEAN,
  "gluten_free" BOOLEAN,
  "vegan_friendly" BOOLEAN,
  "conatains_dairy" BOOLEAN
  
);