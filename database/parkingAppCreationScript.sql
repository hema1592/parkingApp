CREATE SCHEMA `parkingapp` DEFAULT CHARACTER SET utf8 ;
use parkingApp;
CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `location_address` varchar(500) NOT NULL,
  `location_area` varchar(45) NOT NULL,
  `location_landmark` varchar(100) NOT NULL,
  `location_city` varchar(45) NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the location of the object and its GPS coordinates.';
CREATE TABLE `payment_method` (
  `payment_method_id` int(11) NOT NULL,
  `payment_method_desc` varchar(500) DEFAULT NULL,
  `payment_method_redirect_url` varchar(500) NOT NULL,
  PRIMARY KEY (`payment_method_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the master payment methods available for the app';
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `user_phone_no` varchar(45) NOT NULL,
  `user_first_name` varchar(45) NOT NULL,
  `user_last_name` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains user details';
CREATE TABLE `vendor` (
  `vendor_id` int(11) NOT NULL,
  `vendor_name` varchar(45) NOT NULL,
  `vendor_owner` varchar(45) NOT NULL,
  `vendor_address` varchar(500) NOT NULL,
  `vendor_phone_no` varchar(45) NOT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains vendor details';
CREATE TABLE `vehicle_type` (
  `vehicle_type_id` int(11) NOT NULL,
  `vehicle_type_desc` varchar(500) NOT NULL,
  PRIMARY KEY (`vehicle_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the master vehicle types reocgnized by the app for populating UI';
CREATE TABLE `vehicle` (
  `vehicle_id` int(11) NOT NULL,
  `vehicle_type_id` int(11) NOT NULL,
  `vehicle_length` int(10) unsigned zerofill DEFAULT NULL,
  `vehicle_breadth` int(10) unsigned zerofill DEFAULT NULL,
  `vehicle_make` varchar(45) NOT NULL,
  `vehicle_desc` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`vehicle_id`),
  KEY `vehicle_type_FK_idx` (`vehicle_type_id`),
  CONSTRAINT `vehicle_type_id_FK` FOREIGN KEY (`vehicle_type_id`) REFERENCES `vehicle_type` (`vehicle_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the master vehicle table';
CREATE TABLE `uservehicle` (
  `uservehicle_user_id` int(11) NOT NULL,
  `uservehicle_car_id` int(11) NOT NULL,
  `uservehicle_vehicle_id` int(11) NOT NULL,
  `uservehicle_reg_number` varchar(45) NOT NULL,
  PRIMARY KEY (`uservehicle_car_id`),
  KEY `user_id_FK_idx` (`uservehicle_user_id`),
  KEY `vehicle_id_FK_idx` (`uservehicle_vehicle_id`),
  CONSTRAINT `uservehicle_user_id_FK` FOREIGN KEY (`uservehicle_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `uservehicle_vehicle_id_FK` FOREIGN KEY (`uservehicle_vehicle_id`) REFERENCES `vehicle` (`vehicle_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains user''s vehicle details';
CREATE TABLE `workdays` (
  `workdays_id` int(11) NOT NULL AUTO_INCREMENT,
  `workdays_Mon` int(11) NOT NULL,
  `workdays_Tue` int(11) NOT NULL,
  `workdays_Wed` int(11) NOT NULL,
  `workdays_Thu` int(11) NOT NULL,
  `workdays_Fri` int(11) NOT NULL,
  `workdays_Sat` int(11) NOT NULL,
  `workdays_Sun` int(11) NOT NULL,
  PRIMARY KEY (`workdays_id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8 COMMENT='Contains the master list of the available/working days.';
CREATE TABLE `tariff` (
  `tariff_id` int(11) NOT NULL,
  `tariff_location_id` int(11) NOT NULL DEFAULT '0' COMMENT 'Defaults to 0. 0 - Data unavailable.',
  `tariff_vehicle_type` int(11) NOT NULL DEFAULT '0' COMMENT 'Defaults to 0. 0 - Data unavailable.',
  `tariff_amount` decimal(10,0) NOT NULL DEFAULT '0' COMMENT 'Defaults to 0.',
  UNIQUE KEY `tariff_id_UNIQUE` (`tariff_id`),
  KEY `tariff_location_id_idx` (`tariff_location_id`),
  KEY `tariff_vehicle_type_idx` (`tariff_vehicle_type`),
  CONSTRAINT `tariff_location_id_FK` FOREIGN KEY (`tariff_location_id`) REFERENCES `location` (`location_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tariff_vehicle_type_FK` FOREIGN KEY (`tariff_vehicle_type`) REFERENCES `vehicle_type` (`vehicle_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the master tariff details for parking';
CREATE TABLE `parking` (
  `parking_vendor_id` int(11) NOT NULL,
  `parking_id` int(11) NOT NULL,
  `parking_name` varchar(45) NOT NULL,
  `parking_location_id` int(11) NOT NULL,
  `parking_tariff_id` int(11) NOT NULL,
  `parking_slots` int(11) NOT NULL DEFAULT '0' COMMENT 'Contains the max number of parking slots that are available based on optimum parking calculations.',
  `parking_time_from` datetime DEFAULT NULL,
  `parking_time_to` datetime DEFAULT NULL,
  `parking_workdays_id` int(11) NOT NULL DEFAULT '0' COMMENT 'Boolean True/False value - (0/1). Defaults to 0. 0 - Workdays Data unavailable.',
  `parking_managed_status` int(11) NOT NULL DEFAULT '0' COMMENT 'Boolean True/False value - (0/1). Defaults to 0. 0 - Parking is not managed, 1 - Managed parking.',
  PRIMARY KEY (`parking_id`),
  KEY `vendor_id_FK_idx` (`parking_vendor_id`),
  KEY `parking_location_id_FK_idx` (`parking_location_id`),
  KEY `parking_tariff_id_idx` (`parking_tariff_id`),
  KEY `parking_workdays_id_FK_idx` (`parking_workdays_id`),
  CONSTRAINT `parking_location_id_FK` FOREIGN KEY (`parking_location_id`) REFERENCES `location` (`location_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `parking_tariff_id_FK` FOREIGN KEY (`parking_tariff_id`) REFERENCES `tariff` (`tariff_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `parking_vendor_id_FK` FOREIGN KEY (`parking_vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `parking_workdays_id_FK` FOREIGN KEY (`parking_workdays_id`) REFERENCES `workdays` (`workdays_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the list of parkings listed on the app';
CREATE TABLE `seasonal_booking` (
  `seasonal_booking_parking_id` int(11) NOT NULL,
  `seasonal_booking_vendor_id` int(11) NOT NULL,
  `seasonal_booking_id` int(11) NOT NULL,
  `seasonal_booking_user_car_id` int(11) DEFAULT NULL,
  `seasonal_booking_payment_status` int(11) NOT NULL DEFAULT '0' COMMENT 'Boolean True/False value - (0/1). Defaults to 0.',
  `seasonal_booking_from` datetime DEFAULT NULL,
  `seasonal_booking_to` datetime DEFAULT NULL,
  `seasonal_booking_workdays_id` int(11) NOT NULL DEFAULT '0' COMMENT 'Boolean True/False value - (0/1). Defaults to 0.',
  `seasonal_booking_payment_method_id` int(11) NOT NULL,
  PRIMARY KEY (`seasonal_booking_parking_id`,`seasonal_booking_id`),
  KEY `vendor_id_FK_idx` (`seasonal_booking_vendor_id`),
  KEY `user_car_id_idx` (`seasonal_booking_user_car_id`),
  KEY `payment_method_id_FK_idx` (`seasonal_booking_payment_method_id`),
  CONSTRAINT `seasonal_booking_parking_id_FK` FOREIGN KEY (`seasonal_booking_parking_id`) REFERENCES `parking` (`parking_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `seasonal_booking_payment_method_id_FK` FOREIGN KEY (`seasonal_booking_payment_method_id`) REFERENCES `payment_method` (`payment_method_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `seasonal_booking_user_car_id_FK` FOREIGN KEY (`seasonal_booking_user_car_id`) REFERENCES `uservehicle` (`uservehicle_car_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `seasonal_booking_vendor_id_FK` FOREIGN KEY (`seasonal_booking_vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;