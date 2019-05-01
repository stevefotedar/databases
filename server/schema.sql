CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  username TEXT
);

CREATE TABLE messages (
  message_id MEDIUMINT NOT NULL AUTO_INCREMENT,
  messages MEDIUMTEXT,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  roomname TEXT,
  user_id INT NOT NULL,
  PRIMARY KEY (message_id),
  FOREIGN KEY (user_id)
  REFERENCES users(user_id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

