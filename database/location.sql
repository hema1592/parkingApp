CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `location_address` varchar(500) NOT NULL,
  `location_area` varchar(45) NOT NULL,
  `location_landmark` varchar(100) NOT NULL,
  `location_city` varchar(45) NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the location of the object and its GPS coordinates.';
