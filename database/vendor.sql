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
