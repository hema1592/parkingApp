CREATE TABLE `payment_method` (
  `payment_method_id` int(11) NOT NULL,
  `payment_method_desc` varchar(500) DEFAULT NULL,
  `payment_method_redirect_url` varchar(500) NOT NULL,
  PRIMARY KEY (`payment_method_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the master payment methods available for the app';
