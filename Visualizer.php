<?php

	//------------------------------------

    //get musuem from url
    $museum = $_GET['museum'];
 
  	//populate itinerary based off of database table

	//connects to the database
	include 'databaseConnect.php';

    $timeline = Array();
    $images = Array();
    $titles = Array();
    $visitStart = Array();
    $visitEnd = Array();

    //---------------------------------------------------------------------------------------------------

    // Collects data from the visit data 
    $data = mysql_query("SELECT * FROM exhibitVisits WHERE MuseumNumber=".$museum. " ORDER BY VisitNumber ASC") or die(mysql_error()); 


    //loops through connection to info row by row
    while($row = mysql_fetch_array( $data )) 
    { 
     	$timeline[] = $row['ExhibitNumber']; 
     	$images[] = $row['Image']; 
     	$titles[] = $row['ExhibitTitle']; 
     	$visitStart[] = $row['VisitStart']; 
     	$visitEnd[] = $row['VisitEnd']; 
    } 

    //---------------------------------------------------------------------------------------------------

    $exhibitNumber = Array();
    $artifactImage = Array();
    $description = Array();
    $timestamp = Array();


    // Collects interaction data from the visit data 
    $data = mysql_query("SELECT * FROM userdata0 WHERE MuseumNumber=".$museum. " ORDER BY ExhibitNumber ASC") or die(mysql_error()); 

    //loops through connection to info row by row
    while($row = mysql_fetch_array( $data )) 
    { 
     	$exhibitNumber[] = $row['ExhibitNumber'];
     	$artifactImage[] = $row['Image'];  
     	$description[] = $row['Description']; 
     	$timestamp[] = $row['Time']; 


    } 

    mysql_close($connection);

?>


<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	    <!--jquery-->
	    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

	    <script type="text/javascript">
	      //convert artifact info from php array to javascript array

	      	function ExhibitData()
	      	{
	      		this.number = [];
	      		this.image = []; //may not be neded, dosen't seem to be used
	      		this.title = []; //may not be neded, dosen't seem to be used
	      		this.visitStart = [];
	      		this.visitEnd = [];
	      	}

			ExhibitData.number = <?php echo json_encode($timeline); ?>;
			ExhibitData.image = <?php echo json_encode($images); ?>; //may not be neded, dosen't seem to be used
			ExhibitData.title = <?php echo json_encode($titles); ?>; //may not be neded, dosen't seem to be used
			ExhibitData.visitStart = <?php echo json_encode($visitStart); ?>;
			ExhibitData.visitEnd = <?php echo json_encode($visitEnd); ?>;


	      	function ArtifactData()
	      	{
	      		this.number = [];
	      		this.image = []; 
	      		this.title = []; 
	      		this.description = [];
	      		this.timestamp = [];
	      	}

			ArtifactData.number = <?php echo json_encode($exhibitNumber); ?>;
			ArtifactData.image = <?php echo json_encode($artifactImage); ?>;
			ArtifactData.description = <?php echo json_encode($description); ?>;
			ArtifactData.timestamp = <?php echo json_encode($timestamp); ?>;

	    </script>

        <!--Museum Generator-->
	    <link rel="stylesheet" href="Visualizer/css/Visualizer.css" />
	    <script src="Visualizer/js/Visualizer.js"></script>

	    <link rel="stylesheet" href="globalStyle.css" />

	    <!--jquery-->
    	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    	<!-- Note: All core EaselJS classes are listed here: -->
		<script src="http://code.createjs.com/easeljs-0.7.0.min.js"></script>


	</head>
	<body onload="onLoad()">
		<div id="wrapper">
			<h1>Step 1: View your Visit</h1>

 			<canvas class="myCanvas" id="canvasMap" width="800" height="411"></canvas>
			
			<canvas class="myCanvas" id="canvasTimeline" width="800" height="200"></canvas>

			<div id="popupDiv"></div> 

			<h1>Step 2: Select Exhibits to Include in the Visulization</h1>

			<p>Now, that you have reviwed your trip, please select which exhibits you want to include in the visulization of your trip. The visulization will serve as a reminder of your trip that you can reflect upon and share with others. It will include the pictures you have taken on your trip and the notes you have made.</p>

			<form id="exhibitChecks" action="">
			</form>

			<h1>Step 3: Select Style of Visulization</h1>

			<div class="buttonBlock">
				<h2>Slideshow</h2>
				<img src="Media/museum1/museum/slideshow.png">
				<p>This visualization is formatted to look like a slideshow that automatically plays the picturs you took with the accompanying comments</p>
				<div id="Slideshow" class="button">
					Slideshow
				</div>
			</div>

			<div class="buttonBlock">
				<h2>Catagorical</h2>
				<img src="Media/museum1/museum/catagorical.png">
				<p>In this visulization the elements are grouped by the general category of the museum. For example all the Rocks and Minerals exhibit and artifact elements are put in one category and all the Mammal exhibit and artifact elements are put in another. Overall this visualization aims to give a sense of the organization of information that you explored and what you learned.</p>
				<div id="Catagorical" class="button">
					Catagorical
				</div>
			</div>

			<div class="buttonBlock">
				<h2>Sequential</h2>
				<img src="Media/museum1/museum/sequential.png">
				<p>In this visualization exhibits are arranged by the path you took through the museum and the interesting things you saw and took pictures of are grouped around the artifacts. This visualization aims to give a realistic representation of your visit in time and space.</p>
				<div id="Sequential" class="button">
					Sequential
				</div>
			</div>

			<div class="buttonBlock">
				<h2>Dramatic</h2>
				<img src="Media/museum1/museum/dramatic.png">
				<p>This visualization is formatted to look like a scrapbook and gives a sense of what you personally experienced in the museum. For each exhibit your pictures are presented in a photobook like manner and there are blank spaces if you missed photos of interesting artifacts in the exhibit. </p>
				<div id="Dramatic" class="button">
					Dramatic
				</div>
			</div>

		</div>
	</body>

</html>