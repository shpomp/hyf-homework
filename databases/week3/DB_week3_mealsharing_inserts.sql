-- I used https://www.mockaroo.com/ for building the whole mock database. 

-- meal
INSERT INTO `meal`  
VALUES (1, 'Avocado toast','Rye bread toast, avocado, sweet chili', 
'Valby', '2021-05-01 18:00:00', 7, 35, DATE(NOW()));

-- reservation
INSERT INTO `reservation` 
VALUES (1, 4, DATE(NOW()), '12345678', 'Kurt Cobain', 'curtie@gmail.com', 1);


-- review
INSERT INTO `review` 
VALUES (41, 'Amazing!', 'Very nice experience overall', 7, DATE(NOW()), 55);


