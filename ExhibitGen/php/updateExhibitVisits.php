<?php
	
	//connects to the database
	include '../../databaseConnect.php';

	$museum = $_POST['Museum'];
	$exhibit = $_POST['Exhibit'];
	$visitNumber = $_POST['VisitNum'];
	$visitEnd = $_POST['VisitEnd'];

  	mysql_query("UPDATE exhibitVisits SET visitEnd = '" .$visitEnd. "' WHERE  MuseumNumber = ".$museum." AND ExhibitNumber = ".$exhibit. " AND VisitNumber =" .$visitNumber);
	

	mysql_close($connection);

?>