-- Get all the tasks assigned to users whose email ends in @spotify.com
-- * tested out CASE for NULL for my own interest 

SELECT task2.title AS task, CASE WHEN task2.description is NULL THEN "-" ELSE task2.description END, task2.due_date
FROM task2
  JOIN user_task ON task_id = task2.id
  JOIN user2 ON user_id = user2.id
WHERE user2.email LIKE '%@spotify.com';
-- 4 rows returned


-- Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT task2.title AS task, task2.description, task2.due_date
FROM task2
  JOIN user_task ON task_id = task2.id
  JOIN user2 ON user_id = user2.id
  JOIN status2 ON status_id = status2.id
  WHERE status2.name LIKE 'Not started'
	AND user2.name LIKE 'donald duck';
-- 2 rows returned
 
 
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT task2.title AS task, task2.description, task2.created, task2.due_date
FROM task2
  JOIN user_task ON task_id = task2.id
  JOIN user2 ON user_id = user2.id
WHERE user2.name LIKE 'Maryrose Meadows'
	AND MONTH(task2.created) = 9 ;
-- 2 rows returned


-- Find how many tasks where created in each month, 
-- e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT MONTHNAME(created) AS month,
	COUNT(id) AS amount
FROM task2
GROUP BY MONTH(created);
-- april 1
-- sept 17
-- oct 18