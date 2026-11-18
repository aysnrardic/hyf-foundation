-- HYF Databases - Week 1
-- Class Exercises

-- Exercise 2 - Question 1
-- List the names and phones of all users.

SELECT name, phone FROM user;

-- Exercise 2 - Question 2
-- List all users, ordering them by name alphabetically.

SELECT * FROM user ORDER BY name ASC;

-- Exercise 2 - Question 3
-- Find the name of the user of id 10.

SELECT name FROM user WHERE id = 5;

-- Exercise 2 - Question 4
-- Find 3 oldest (by create date) tasks.

SELECT * FROM task ORDER BY created ASC LIMIT 3;

-- Exercise 3 - Question 1
-- Select all tasks which have status In progress.

SELECT task.* FROM task JOIN status ON task.status_id = status.id WHERE status.name = 'In progress';

-- Exercise 3 - Question 2
-- Display tasks with their assigned user names.

SELECT task.title, user.name FROM task JOIN user ON task.user_id = user.id;

-- Exercise 4 - Question 1
-- Add yourself as a new user in the user table.

INSERT INTO user (name, email, phone)
VALUES('Aysenur Ardic', 'aysnrardc@gmail.com', '57777777');

-- Exercise 4 - Question 2
-- Create 2 or more tasks assigned to yourself.

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Prepare dinner', 'Make homemade burgers for dinner', DATETIME('now'), DATETIME('now'), NULL, 1, 13);

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Grocery shopping', 'Buy ingredients for dinner', DATETIME('now'), DATETIME('now'), NULL, 1, 13);

-- Exercise 4 - Question 3
-- Update the task status to In progress.

UPDATE task SET status_id = 2 WHERE title = 'Prepare dinner' AND user_id = 13;

-- Exercise 4 - Question 4
-- Retrieve the title and description of my tasks.

SELECT title, description FROM task WHERE user_id = 13;

-- Exercise 4 - Question 5
-- Delete a task that is no longer needed.

SELECT id, title, description FROM task WHERE user_id = 13 ORDER BY id;

DELETE FROM task WHERE id = 39 AND user_id = 13;

-- Check the final list of my tasks.

SELECT id, title, description, status_id FROM task WHERE user_id = 13 ORDER BY id;
