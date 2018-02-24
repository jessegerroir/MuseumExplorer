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
    $dates = Array();
    $maxArtifacts = Array();

	if(!empty($exhibits)) {

	//connects to the database
	include 'databaseConnect.php';

		$exhibitString = implode(',', $exhibits); // returns exhibits in string ex. (7, 8, 15)

	    // Collects data from the visit data 
	    $data = mysql_query("SELECT  * FROM exhibitVisits WHERE ExhibitNumber IN (" .$exhibitString. ") GROUP BY ExhibitNumber") or die(mysql_error()); 

	    //loops through connection to info row by row
	    while($row = mysql_fetch_array( $data )) 
	    { 
	     	$num[] = $row['ExhibitNumber']; 
	     	$type[] = $row['ExhibitType']; 
	     	$images[] = $row['Image']; 
	     	$titles[] = $row['ExhibitTitle']; 
	     	$dates[] = $row['VisitStart']; 
	     	$maxArtifacts[] = $row['NumberOfArtifacts'];
	    } 
	}

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

        <!--Catagorical -->
	    <link rel="stylesheet" href="Slideshow/css/Slideshow.css"/>

		<!--font-->
		<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">

		<!--jquery-->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

	    <!-- Dependicies and plugins -->
		<!-- Add jQuery library -->
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>

		<!-- Add mousewheel plugin (this is optional) -->
		<script type="text/javascript" src="Slideshow/dep/fancybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>

		<!-- Add fancyBox -->
		<link rel="stylesheet" href="Slideshow/dep/fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
		<script type="text/javascript" src="Slideshow/dep/fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>

		<!-- Optionally add helpers - button, thumbnail and/or media -->
		<link rel="stylesheet" href="Slideshow/dep/fancybox/source/helpers/jquery.fancybox-buttons.css?v=1.0.5" type="text/css" media="screen" />
		<script type="text/javascript" src="Slideshow/dep/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>
		<script type="text/javascript" src="Slideshow/dep/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6"></script>

		<link rel="stylesheet" href="Slideshow/dep/fancybox/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" type="text/css" media="screen" />
		<script type="text/javascript" src="Slideshow/dep/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>

		<script src="Slideshow/js/Slideshow.js"></script>

	    <script type="text/javascript">
      		//convert artifact info from php array to javascript array

	      	//exhibit data class
	      	function ExhibitData()
	      	{
	      		this.exhibits = [];
	      		this.type = [];
	      		this.images = [];
	      		this.titles = [];
	      		this.dates = [];
	      		this.maxArtifacts = [];
	      	}

			ExhibitData.exhibits = <?php echo json_encode($num); ?>;
			ExhibitData.type = <?php echo json_encode($type); ?>;
			ExhibitData.images = <?php echo json_encode($images); ?>;
			ExhibitData.titles = <?php echo json_encode($titles); ?>;
			ExhibitData.dates = <?php echo json_encode($dates); ?>;
			ExhibitData.maxArtifacts = <?php echo json_encode($maxArtifacts); ?>;

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
		<div id="container">
	    </div>


	</body>

</html>