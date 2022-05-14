CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user (
  uuid uuid DEFAULT uuid_generate_v4(),
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (uuid)
);

INSERT INTO application_user (username,password) VALUES ('admin',crypt('admin','my_salt'))

CREATE TABLE IF NOT EXISTS application_product (
  uuid uuid DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (uuid)
)

CREATE TABLE IF NOT EXISTS application_vehicles(
  uuid uuid DEFAULT uuid_generate_v4(),
  model VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (uuid)
)