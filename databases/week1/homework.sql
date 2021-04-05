-- 1. Find out how many tasks are in the task table
SELECT COUNT(*) as total_rows_in_task
FROM task;

-- 35

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) as total_rows
FROM task
WHERE due_date is null;

-- 8

-- 3. Find all the tasks that are marked as done
SELECT *
FROM task
WHERE status_id = 3;

-- Or

SELECT task.task.title, status.status.name
FROM task
    JOIN status
    ON task.status_id = status.id
where status.name = "done";

-- 12 row(s) returned

-- 4. Find all the tasks that are not marked as done
SELECT *
FROM task
WHERE status_id != 3;

-- Or

SELECT task.title, status.name
FROM task
    JOIN status
    ON task.status_id = status.id
where status.name != "done";

-- 23 row(s) returned

-- 5. Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
order by created desc;

-- 2017-10-30 09:47:00 at the top

-- 6. Get the single most recently created task
SELECT *
FROM task
order by created desc
limit 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
WHERE title LIKE "%database%" OR description LIKE "%database%";

-- 5 row(s) returned

-- 8. Get the title and status (as text) of all tasks
SELECT task.title, status.name
FROM task
    JOIN status
    ON task.status_id = status.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(status.id) as amount
FROM task
    JOIN status
    ON task.status_id = status.id
group by name;

-- Done 12
-- In progress 15
-- Not started 8

-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT s.name
FROM status s, task t
WHERE s.id = t.status_id
GROUP BY name
order by COUNT(s.name) desc;




