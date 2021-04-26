-- CREATE SCHEMA IF NOT EXISTS `mealsharing` DEFAULT CHARACTER SET utf8mb4 ;
-- USE `mealsharing` ;

-- meal
CREATE TABLE IF NOT EXISTS `meal` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `description` TEXT(100) NOT NULL,
  `location` VARCHAR(50) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id`) )
ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

-- reservation
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` INT UNSIGNED UNSIGNED NOT NULL AUTO_INCREMENT,
  `num_of_guests` INT UNSIGNED NOT NULL,
  `created_date` DATE NOT NULL,
  `contact_phone` VARCHAR(50) NOT NULL,
  `contact_name` VARCHAR(50) NOT NULL,
  `contact_email` VARCHAR(50) NOT NULL,
  `meal_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_reservation_meal`
    FOREIGN KEY (`meal_id`)
    REFERENCES `meal` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

-- review
CREATE TABLE IF NOT EXISTS `review` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `description` TEXT(100) NOT NULL,
  `stars` INT NOT NULL,
  `created_date` DATE NOT NULL,
  `meal_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_review_meal_index` (`meal_id` ASC),
  CONSTRAINT `fk_reviewmeal`
    FOREIGN KEY (`meal_id`)
    REFERENCES `meal` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT `five_stars` CHECK ((`stars` <= 5)))
ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


