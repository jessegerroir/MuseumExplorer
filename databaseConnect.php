<?php

  	// Connects to your Database 

	//You need to replace the localhost, username, password, for the database server account you are using to edit.

  	$connection = mysql_connect("localhost", "username", "password") or die(mysql_error()); 
  	mysql_select_db("tinrobot_thesis") or die(mysql_error()); 


?>