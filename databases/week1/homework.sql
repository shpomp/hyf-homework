-- 1.
SELECT COUNT(*) as total_rows_in_task
FROM hyf.task;

-- 35

-- 2.
SELECT COUNT(*) as total_rows
FROM hyf.task
WHERE due_date is null;

-- 8

-- 3.
SELECT *
FROM hyf.task
WHERE status_id = 3;

-- Or

SELECT task.title, status.name
FROM hyf.task
    JOIN hyf.status
    ON task.status_id = status.id
where status.name = "done";

-- 12 row(s) returned

-- 4.
SELECT *
FROM hyf.task
WHERE status_id != 3;

-- Or

SELECT task.title, status.name
FROM hyf.task
    JOIN hyf.status
    ON task.status_id = status.id
where status.name != "done";

-- 23 row(s) returned

-- 5.
SELECT *
FROM hyf.task
order by created desc;

-- 2017-10-30 09:47:00 at the top

-- 6.
SELECT *
FROM hyf.task
order by created desc
limit 1;

-- 7.
SELECT title
, due_date
FROM hyf.task
WHERE title LIKE "%database%" OR description LIKE "%database%";

-- 5 row(s) returned

-- 8.
SELECT task.title, status.name
FROM hyf.task
    JOIN hyf.status
    ON task.status_id = status.id;

-- 9.
SELECT status.name, COUNT(*) as amount
FROM hyf.task
    JOIN hyf.status
    ON task.status_id = status.id
group by name

-- Done 12
-- In progress 15
-- Not started 8

--10.
SELECT s.name
FROM hyf.status s, hyf.task t
WHERE s.id = t.status_id
GROUP BY name
order by COUNT(s.name) desc




