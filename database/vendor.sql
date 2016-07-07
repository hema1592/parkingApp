CREATE TABLE `vendor` (
  `vendor_id` int(11) NOT NULL,
  `vendor_name` varchar(45) NOT NULL,
  `vendor_owner` varchar(45) NOT NULL,
  `vendor_address` varchar(500) NOT NULL,
  `vendor_phone_no` varchar(45) NOT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains vendor details';

ALTER TABLE `parkingapp`.`vendor` 
DROP COLUMN `vendor_phone_no`,
DROP COLUMN `vendor_name`,
ADD COLUMN `vendor_location_id` VARCHAR(100) NOT NULL AFTER `vendor_address`;

ALTER TABLE `parkingapp`.`vendor` 
CHANGE COLUMN `vendor_location_id` `vendor_location_id` INT NOT NULL ;

ALTER TABLE `parkingapp`.`vendor` 
ADD INDEX `vendor_location_id_FK_idx` (`vendor_location_id` ASC);
ALTER TABLE `parkingapp`.`vendor` 
ADD CONSTRAINT `vendor_location_id_FK`
  FOREIGN KEY (`vendor_location_id`)
  REFERENCES `parkingapp`.`location` (`location_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
