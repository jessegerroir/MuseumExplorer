<?php
	
	//connects to the database
	include '../../databaseConnect.php';

	$museum = $_POST['Museum'];
	$exhibit = $_POST['Exhibit'];


	$number = mysql_query("SELECT VisitNumber FROM exhibitVisits WHERE MuseumNumber = ".$museum." AND ExhibitNumber = ".$exhibit. " ORDER BY VisitNumber DESC LIMIT 1");
	
	echo $number;

	mysql_close($connection);

	

?>