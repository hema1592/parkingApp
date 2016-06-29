CREATE TABLE `user` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(15) NOT NULL,
  `user_phone_no` varchar(10) NOT NULL,
  `user_first_name` varchar(25) NOT NULL,
  `user_last_name` varchar(25) NOT NULL,
  `user_email_id` varchar(100) NOT NULL,
  `user_password` varchar(32) NOT NULL,
  `user_is_vendor` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains user details';

ALTER TABLE `parkingapp`.`user` 
CHANGE COLUMN `user_is_vendor` `user_type_id` INT(11) NOT NULL ;
