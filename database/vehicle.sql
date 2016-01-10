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
