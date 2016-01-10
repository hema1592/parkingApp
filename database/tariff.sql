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
