<?php
	
	//connects to the database
	include '../../databaseConnect.php';

	$museum = $_POST['museum'];
	$exhibit = $_POST['exhibit'];
	$exhibitType = $_POST['$exhibitType'];
	$titles = $_POST['title'];
	$image = $_POST['image'];
	$visitStart = $_POST['visitStart'];
	$numberOfArtifacts = $_POST['numArtifacts'];


	//insert the exhibit visit
	mysql_query("INSERT INTO exhibitVisits (MuseumNumber, ExhibitNumber, ExhibitType, NumberOfArtifacts, ExhibitTitle, Image, VisitStart)
				VALUES (" .$museum. "," .$exhibit. ",'" .$exhibitType. "'," .$numberOfArtifacts. ",'" .$titles. "','" .$image. "','" .$visitStart. "')");		
	

	mysql_close($connection);

?>