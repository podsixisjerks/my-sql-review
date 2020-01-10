/*below line avoids 'database already exists' error,
but will wipe changes when session ends*/

/*run schema by using:
  mysql -u root < database/schema.sql
in terminal*/

DROP DATABASE IF EXISTS ball;
CREATE DATABASE ball;

USE ball;

CREATE TABLE tennis (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  item_name TEXT NOT NULL,
  amount INT NOT NULL
);

/*
show tables; --view all tables in ball database
describe tennis; --view schema of tennis table
*/