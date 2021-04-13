SELECT * FROM task2;

-- Changed date columns to default current date
ALTER TABLE task2
MODIFY created timestamp;

ALTER TABLE task2 
MODIFY created TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE task2
MODIFY updated timestamp;

ALTER TABLE task2 
MODIFY updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id
INSERT INTO task2 (title, description, due_date, status_id) 
VALUES ('celebrate', 'Summer start','2021-06-01 09:00:00', 1);

-- Change the title of a task
UPDATE task2 
SET title = 'Celebrate'
WHERE id = 36;

-- Change a task due date
UPDATE task2
SET due_date = '2021-06-01 09:30:00'
WHERE id = 36;

-- Change a task status
UPDATE task2
SET status_id = 2
WHERE id = 36;

-- Mark a task as complete
UPDATE task2
SET status_id = 3
WHERE id = 36;

-- Delete a task
INSERT INTO task2 (title, description, due_date, status_id) 
VALUES ('delete', 'delete','2021-12-12 12:12:00', 1);

DELETE FROM task2
WHERE id = 40;