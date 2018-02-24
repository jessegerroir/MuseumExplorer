<?php

	//connects to the database
	include '../../databaseConnect.php';

	$museum = $_POST['museum'];

	//makes the update
	mysql_query("DELETE FROM itinerary WHERE MuseumNumber=" .$museum)or die(mysql_error());  

	mysql_query("DELETE FROM userdata0 WHERE MuseumNumber=" .$museum)or die(mysql_error());  

	mysql_query("DELETE FROM exhibitVisits WHERE MuseumNumber=" .$museum)or die(mysql_error());  

	mysql_close($connection);

?>