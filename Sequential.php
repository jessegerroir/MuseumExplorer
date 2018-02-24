<?php
	
	$exhibits = Array();
	$water = false;
	$rock = false;
	$animal = false;

	if(isset($_GET["exhibit1"]))
		$exhibits[] = 1;
	if(isset($_GET["exhibit2"]))
		$exhibits[] = 2;
	if(isset($_GET["exhibit5"]))
		$exhibits[] = 5;
	if(isset($_GET["exhibit6"]))
		$exhibits[] = 6;
	if(isset($_GET["exhibit7"]))
		$exhibits[] = 7;
	if(isset($_GET["exhibit8"]))
		$exhibits[] = 8;
	if(isset($_GET["exhibit14"]))
		$exhibits[] = 14;
	if(isset($_GET["exhibit15"]))
		$exhibits[] = 15;
	if(isset($_GET["exhibit18"]))
		$exhibits[] = 18;
	if(isset($_GET["exhibit19"]))
		$exhibits[] = 19;

    //--- Exhibit Data ------------------------------------------------------------------------------------------------

    $num = Array();
    $type = Array();
    $images = Array();
    $titles = Array();
    $visitStart = Array();
    $visitEnd = Array();


    $unique_num = Array();
    $unique_type = Array();
    $unique_images = Array();
    $unique_titles = Array();
    $unique_visitStart = Array();
    $unique_visitEnd = Array();


	if(!empty($exhibits)) {

		// Connects to your Database 
		include 'databaseConnect.php';

		$exhibitString = implode(',', $exhibits); // returns exhibits in string ex. (7, 8, 15)

	    // Collects data from the visit data ordered by visit time
	    $data = mysql_query("SELECT * FROM exhibitVisits WHERE ExhibitNumber IN (" .$exhibitString. ") ORDER BY VisitStart ASC") or die(mysql_error()); 

	    //loops through connection to info row by row
	    while($row = mysql_fetch_array( $data )) 
	    { 
	     	$num[] = $row['ExhibitNumber']; 
	     	$type[] = $row['ExhibitType']; 
	     	$images[] = $row['Image']; 
	     	$titles[] = $row['ExhibitTitle'];
	     	$visitStart[] = $row['VisitStart'];
    		$visitEnd[] = $row['VisitEnd'];
	    }

	    // Collects only unique elements from the visit according to their exhibit number
	    $data = mysql_query("SELECT  * FROM exhibitVisits WHERE ExhibitNumber IN (" .$exhibitString. ") GROUP BY ExhibitNumber ") or die(mysql_error()); 

	    //loops through connection to info row by row
	    while($row = mysql_fetch_array( $data )) 
	    { 
	     	$unique_num[] = $row['ExhibitNumber']; 
	     	$unique_type[] = $row['ExhibitType']; 
	     	$unique_images[] = $row['Image']; 
	     	$unique_titles[] = $row['ExhibitTitle'];
	     	$unique_visitStart[] = $row['VisitStart'];
    		$unique_visitEnd[] = $row['VisitEnd'];
	    }  
	}

    //--- Sequential Data ------------------------------------------------------------------------------------------------

    $sequential_exhibitNumber = Array();
    $sequential_positionX = Array();
    $sequential_positionY = Array();

	if(!empty($exhibits)) {

		$exhibitString = implode(',', $exhibits);

	    // Collects interaction data from the visit data 
	    $data = mysql_query("SELECT * FROM sequential WHERE ExhibitNumber IN (0," .$exhibitString. ")") or die(mysql_error()); 

	    //loops through connection to info row by row
	    while($row = mysql_fetch_array( $data )) 
	    { 
	     	$sequential_exhibitNumber[] = $row['ExhibitNumber'];
	     	$sequential_positionX[] = $row['PositionX'];  
	     	$sequential_positionY[] = $row['PositionY'];

	    } 
	}

    mysql_close($dbhandle);


    //--- Artifact Data ------------------------------------------------------------------------------------------------

    $exhibitNumber = Array();
    $info = Array();
    $artifactImage = Array();
    $description = Array();

	if(!empty($exhibits)) {

		$exhibitString = implode(',', $exhibits);

	    // Collects interaction data from the visit data 
	    $data = mysql_query("SELECT * FROM userdata0 WHERE ExhibitNumber IN (" .$exhibitString. ")") or die(mysql_error()); 

	    //loops through connection to info row by row
	    while($row = mysql_fetch_array( $data )) 
	    { 
	     	$exhibitNumber[] = $row['ExhibitNumber'];
	     	$artifactImage[] = $row['Image'];  
	     	$description[] = $row['Description'];
	     	$info[] = $row['Info'];
	    } 
	}

    mysql_close($connection);

?>

<!DOCTYPE html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Visulization</title>

        <!--Sequential -->
	    <link rel="stylesheet" href="Sequential/css/Sequential.css"/>

		<!--font-->
		<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
	    <!--jquery
	    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>-->

		<link rel="stylesheet" href="globalStyle.css" />

	

	    <script type="text/javascript">
      		//convert artifact info from php array to javascript array


	      	//exhibit data class
	      	function UniqueExhibitData()
	      	{
	      		this.exhibits = [];
	      		this.type = [];
	      		this.images = [];
	      		this.titles = [];
	      		ExhibitData.visitStart = [];
	      		ExhibitData.visitEnd = [];
	      	}

			UniqueExhibitData.exhibits = <?php echo json_encode($unique_num); ?>;
			UniqueExhibitData.type = <?php echo json_encode($unique_type); ?>;
			UniqueExhibitData.images = <?php echo json_encode($unique_images); ?>;
			UniqueExhibitData.titles = <?php echo json_encode($unique_titles); ?>;
			UniqueExhibitData.visitStart = <?php echo json_encode($unique_visitStart); ?>;
			UniqueExhibitData.visitEnd = <?php echo json_encode($unique_visitEnd); ?>;

	      	//exhibit data class
	      	function ExhibitData()
	      	{
	      		this.exhibits = [];
	      		this.type = [];
	      		this.images = [];
	      		this.titles = [];
	      		ExhibitData.visitStart = [];
	      		ExhibitData.visitEnd = [];
	      	}

			ExhibitData.exhibits = <?php echo json_encode($num); ?>;
			ExhibitData.type = <?php echo json_encode($type); ?>;
			ExhibitData.images = <?php echo json_encode($images); ?>;
			ExhibitData.titles = <?php echo json_encode($titles); ?>;
			ExhibitData.visitStart = <?php echo json_encode($visitStart); ?>;
			ExhibitData.visitEnd = <?php echo json_encode($visitEnd); ?>;

	      	function SequentialData()
	      	{
	      		this.exhibits = [];
	      		this.positionX = [];
	      		this.positionY = [];
	      	}

			SequentialData.exhibits = <?php echo json_encode($sequential_exhibitNumber); ?>;
			SequentialData.positionX = <?php echo json_encode($sequential_positionX); ?>;
			SequentialData.positionY = <?php echo json_encode($sequential_positionY); ?>;


	      	function ArtifactData()
	      	{
	      		this.exhibits = [];
	      		this.images = [];
	      		this.descriptions = [];
	      		this.infomation = [];
	      	}

			ArtifactData.exhibits = <?php echo json_encode($exhibitNumber); ?>;
			ArtifactData.images = <?php echo json_encode($artifactImage); ?>;
			ArtifactData.descriptions = <?php echo json_encode($description); ?>;
			ArtifactData.information = <?php echo json_encode($info); ?>;

		</script>

	</head>

	
	<body>
	    <!-- Containers -->
	   	<div class="button buttonLeft">Previous Exhibit</div>
		<div class="button buttonRight">Next Exhibit</div>

		<img src="Media/museum1/museum/fullMap.png" id="background">



	    <!-- Javascript -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="Sequential/js/Sequential.js"></script>

	</body>

</html>