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
