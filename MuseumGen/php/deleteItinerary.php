<?php

	//connects to the database
	include '../../databaseConnect.php';

	$museum = $_POST['museum'];
	$exhibit = $_POST['exhibit'];
	$visitation = $_POST['visitation'];

	//makes the update
	mysql_query("DELETE FROM itinerary WHERE MuseumNumber=".$museum)or die(mysql_error());  

	mysql_close($connection);

?>