CREATE SCHEMA IF NOT EXISTS `library` DEFAULT CHARACTER SET utf8 ;
USE `library` ;

-- category`
CREATE TABLE IF NOT EXISTS `library`.`category` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `shelf_nr` INT NOT NULL,
  PRIMARY KEY (`category_id`))
ENGINE = InnoDB;

-- book
CREATE TABLE IF NOT EXISTS `library`.`book` (
  `book_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NULL,
  `publication_date` DATE NULL,
  `publisher` VARCHAR(45) NOT NULL,
  `copies_owned` INT NOT NULL,
  `copies_available` INT NOT NULL,
  `category_category_id` INT NOT NULL,
  PRIMARY KEY (`book_id`),
  CONSTRAINT `fk_book_category1`
    FOREIGN KEY (`category_category_id`)
    REFERENCES `mydb`.`category` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- reader
CREATE TABLE IF NOT EXISTS `library`.`reader` (
  `reader_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `cpr` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`reader_id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- author
CREATE TABLE IF NOT EXISTS `mydb`.`author` (
  `author_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `date_of_birth` DATE NOT NULL,
  PRIMARY KEY (`author_id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- book_has_author
CREATE TABLE IF NOT EXISTS `mydb`.`book_has_author` (
  `book_book_id` INT NOT NULL,
  `author_author_id` INT NOT NULL,
  PRIMARY KEY (`book_book_id`, `author_author_id`),
  CONSTRAINT `fk_book_has_author_book`
    FOREIGN KEY (`book_book_id`)
    REFERENCES `mydb`.`book` (`book_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_has_author_author1`
    FOREIGN KEY (`author_author_id`)
    REFERENCES `mydb`.`author` (`author_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- book_has_reader`
CREATE TABLE IF NOT EXISTS `mydb`.`book_has_reader` (
  `book_book_id` INT NOT NULL,
  `reader_reader_id` INT NOT NULL,
  PRIMARY KEY (`book_book_id`, `reader_reader_id`),
  CONSTRAINT `fk_book_has_reader_book1` FOREIGN KEY (`book_book_id`)
    REFERENCES `mydb`.`book` (`book_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_has_reader_reader1` FOREIGN KEY (`reader_reader_id`)
    REFERENCES `mydb`.`reader` (`reader_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


