-- ***** meal *****

-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO `meal`  
VALUES (21, 'Avocado toast','Rye bread toast, avocado, sweet chili', 
'Valby', '2021-05-01 18:00:00', 7, 35, DATE(NOW()));

-- Get a meal with any id, fx 1
SELECT * FROM meal
WHERE id = 21;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = 'Ice cream variety', description = 'Fresh homemade organic vegan ice cream'
WHERE id = 8;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 17;



-- ***** reservation *****

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO `reservation` 
VALUES (21, 4, DATE(NOW()), '12345678', 'Kurt Cobain', 'curtie@gmail.com', 1);

-- Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE id = 21;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET meal_id = 21
WHERE id = 21;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 18;



-- ***** review *****

-- Get all reviews
SELECT * FROM review;

-- Get a review with any id, fx 1
SELECT * FROM review
WHERE id = 33;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'Fabulous experience', description = 'Better than we could have imagined', stars = 5
WHERE id = 17;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 12;



-- ***** functionality *****

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal 
WHERE price < 200;

-- Get meals that still has available reservations
-- Doing a left join shows me unbooked meals (null for "reserved"): 
SELECT meal.id as mealID, reservation.num_of_guests as reserved
FROM meal
LEFT JOIN reservation
	ON meal.id = reservation.meal_id
ORDER BY meal;

-- available reservations
SELECT meal.id as meal_id, title, description, location, price, max_reservations, 
	IFNULL(SUM(num_of_guests), 0) AS total_reservations, 
	IFNULL((max_reservations - SUM(num_of_guests)), max_reservations) as available_spots
FROM meal
LEFT JOIN reservation
	ON meal.id = meal_id
GROUP BY meal.id
HAVING  max_reservations > total_reservations or total_reservations is null
ORDER BY available_spots;
	
	
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * 
FROM meal
where title LIKE '%ook%';

-- Get meals that has been created between two dates
SELECT * 
FROM meal
where `when` BETWEEN '2021-05-05' AND '2021-06-06';
-- my 'created_date' dates are the same for now, so I chose 'when' instead

-- Get only specific number of meals fx return only 5 meals
SELECT * 
FROM meal
ORDER BY max_reservations desc
LIMIT 5;

-- Get reservations for a specific meal sorted by created_date
SELECT reservation.id, num_of_guests as guests, contact_name as name, meal_id, location, `when`, reservation.created_date
FROM reservation
  JOIN meal ON meal.id = reservation.meal_id
WHERE meal_id = 16
ORDER BY reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.id as meal_id, meal.title, ROUND(avg(review.stars), 2) as rating_average, COUNT(meal.id) as total_reviews
FROM meal
	JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY rating_average desc;


