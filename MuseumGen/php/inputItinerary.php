<?php
	
	//connects to the database
	include '../../databaseConnect.php';

	$museum = $_POST['museum'];
	$exhibit = $_POST['exhibitArray'];
	$visitation = $_POST['visitationArray'];
	$titles = $_POST['titleArray'];
	$image = $_POST['imageArray'];
	
  	for($i = 0; $i < sizeOf($exhibit); $i++)
  	{
		mysql_query("INSERT INTO itinerary (MuseumNumber, ExhibitNumber, VisitationNumber, ExhibitTitle, Image)
		VALUES (" .$museum. "," .$exhibit[$i]. "," .$visitation[$i]. ",'" .$titles[$i]. "','" .$image[$i]. "')");
	}

	mysql_close($connection);

?>