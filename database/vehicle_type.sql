CREATE TABLE `vehicle_type` (
  `vehicle_type_id` int(11) NOT NULL,
  `vehicle_type_desc` varchar(500) NOT NULL,
  PRIMARY KEY (`vehicle_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the master vehicle types reocgnized by the app for populating UI';
