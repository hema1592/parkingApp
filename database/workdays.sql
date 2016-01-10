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
