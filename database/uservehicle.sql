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
