<?php
	
	//connects to the database
	include '../../databaseConnect.php';

	$museum = $_POST['Museum'];
	$exhibit = $_POST['ExhibitNumber'];
	$artifact = $_POST['ArtifactNumber'];
	$image = $_POST['UserImage'];
	$comment = $_POST['UserComment'];
	$info = $_POST['ArtifactInfo'];
	$timestamp = $_POST['Timestamp'];


	mysql_query("INSERT INTO userdata0 (MuseumNumber, ExhibitNumber, ArtifactNumber, Image, Description, Info, Time)
	VALUES (" .$museum. "," .$exhibit. "," .$artifact. ",'" .$image. "','" .$comment. "','" .$info. "','" .$timestamp. "')");
	

	mysql_close($connection);

?>