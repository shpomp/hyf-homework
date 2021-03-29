SELECT *
FROM user
WHERE name like "p_blo%";

SELECT *
FROM user
limit
3, 2
order by name;

select month(created) as created_on_month, count(id) as no
from task
group by created_on_month;



-- JOINS 

SELECT *
from task
    join user on task.user_id = user.id;

SELECT task.id, created, title, user.name
from task
    join user on task.user_id = user.id;


SELECT task.id, created, title, user.name
from task
    left join user on task.user_id = user.id;

SELECT task.id, created, title, user.name, status.name
from task
    join user on task.user_id = user.id
    join status on task.status_id = status.id;


SELECT task.id, created, title, user.name
as user, status.name as status  from task
 left join user on task.user_id = user.id
 left join status  on task.status_id = status.id 
 order by task.id;

SELECT task.id, created, title, user.name
as user, status.name as status  from task
  join user on task.user_id = user.id
  join status  on task.status_id = status.id 
 order by task.id;

--primary key of the table I want to join in ON 

--charset  utf8mb4  collate 

-- BREAK OUT ROOMS

-- 1. Select the names and phones of all users;

SELECT name, phone
from user;

-- 2. Select the name of the user with id=10;

SELECT name
from user
where user.id = 10;

-- 3. Find how many users exist in the database;

SELECT COUNT(name)
from user;

-- 4. Select the names of the first 5 users in the database;

SELECT name
from user
order by name
limit 5;

-- 5. Select the names of the last 3 users in the database;

SELECT name
from user
order by name
limit 9, 3;

SELECT name
from user
order by id desc
limit 3;

-- 6. Sum all the ids in the user table;

SELECT sum
(id)
from user;

-- 7. Select all users and order them alphabetically by name;

SELECT *
FROM user
order by name;

-- 8. Find all tasks that include SQL either on the title or on the description;

SELECT *
FROM task
WHERE title LIKE "%SQL%" or description LIKE "%SQL%";

-- 9. Find the title of all tasks that the user Maryrose is responsible for

SELECT task.title
FROM task JOIN user
    ON task.user_id = user.id
WHERE user.name LIKE "Maryrose%";

-- 10. Find how many tasks each user is responsible for;

SELECT count(task.id) as task_count, user.name
FROM task JOIN user
    ON task.user_id = user.id
group by user.name;

-- 11. Find how many tasks with a status=Done each user is responsible for

SELECT count(task.id) as done_tasks, user.name
FROM task JOIN user
    ON task.user_id = user.id
    JOIN status
    ON task.status_id = status.id
WHERE status.name = "done"
group by user.name;







