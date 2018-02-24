<?php
	$museum = $_POST['museum'];
	$exhibit = $_POST['exhibitArray'];
	$visitation = $_POST['visitationArray'];
	$titles = $_POST['titleArray'];
	$image = $_POST['imageArray'];
	$visitStart = $_POST['visitStartArray'];
	$visitEnd = $_POST['visitEndArray'];


  	// Connects to your Database 
  	$connection = mysql_connect("localhost", "tinrobot_jesse", "thesis2014") or die(mysql_error()); 
  	mysql_select_db("tinrobot_thesis") or die(mysql_error()); 

	
  	for($i = 0; $i < sizeOf($exhibit); $i++)
  	{
		mysql_query("INSERT INTO itinerary (MuseumNumber, ExhibitNumber, VisitationNumber, ExhibitTitle, Image, VisitStart, VisitEnd)
		VALUES (" .$museum. "," .$exhibit[$i]. "," .$visitation[$i]. ",'" .$titles[$i]. "','" .$image[$i]. "','" .$visitStart[$i]. "','" .$visitEnd[$i]. "')");
	}

	mysql_close($connection);

?>