<?php
	
	$exhibits = Array();

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

	// Connects to your Database 
	include 'databaseConnect.php';

	if(!empty($exhibits)) {

		$exhibitString = implode(',', $exhibits); // returns exhibits in string ex. (7, 8, 15)

	    // Collects data from the visit data 
	    $data = mysql_query("SELECT  * FROM exhibitVisits WHERE ExhibitNumber IN (" .$exhibitString. ") GROUP BY ExhibitNumber ORDER BY VisitStart ASC") or die(mysql_error()); 

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

    //--- Dramatic Data ------------------------------------------------------------------------------------------------

    $Dramatic_exhibitNumber = Array();
    $Dramatic_background = Array();
    $Dramatic_tear = Array();
    $Dramatic_splash = Array();
    $Dramatic_favouredArtifactThere = Array();
    $Dramatic_favouredArtifactAbsent = Array();
    $Dramatic_favouredArtifactNumber = Array();
    $Dramatic_averageTime = Array();

	if(!empty($exhibits)) {

		//uses the array of exhibit numbers from previous query to make sure we are selecting the information
		//in the same order, sorted by the visit start
		$exhibitString = implode(',', $exhibits);

	    // Collects interaction data from the visit data 
	    $data = mysql_query("SELECT * FROM dramatic WHERE ExhibitNumber IN (" .$exhibitString. ")") or die(mysql_error()); 

	    //loops through connection to info row by row
	    while($row = mysql_fetch_array( $data )) 
	    { 
     	    $Dramatic_exhibitNumber[] = $row['ExhibitNumber'];
		    $Dramatic_background[] = $row['Background'];
		    $Dramatic_tear[] = $row['Tear'];
		    $Dramatic_splash[] = $row['Splash'];
		    $Dramatic_favouredArtifactThere[] = $row['FavouredArtifactThere'];
		    $Dramatic_favouredArtifactAbsent[] = $row['FavouredArtifactAbsent'];
		    $Dramatic_favouredArtifactNumber[] = $row['FavouredArtifactNumber'];
		    $Dramatic_averageTime[] = $row['AverageTime'];
	    } 
	}

    //--- Artifact Data ------------------------------------------------------------------------------------------------

    $exhibitNumber = Array();
    $artifactNumber = Array();
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
	     	$artifactNumber[] = $row['ArtifactNumber'];
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
	    <link rel="stylesheet" href="Dramatic/css/Dramatic.css" media="screen,projection" />

		<!--font-->
		<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
	    <!--jquery
	    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>-->

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
	      		this.artifactNumber = [];
	      		this.images = [];
	      		this.descriptions = [];
	      		this.infomation = [];
	      	}

			ArtifactData.exhibits = <?php echo json_encode($exhibitNumber); ?>;
			ArtifactData.artifactNumber = <?php echo json_encode($artifactNumber); ?>;
			ArtifactData.images = <?php echo json_encode($artifactImage); ?>;
			ArtifactData.descriptions = <?php echo json_encode($description); ?>;
			ArtifactData.information = <?php echo json_encode($info); ?>;

	      	function DramaticData()
	      	{
	      		this.exhibits = [];
			    this.background = [];
			    this.tear = [];
			    this.splash = [];
			    this.favouredArtifactThere = [];
			    this.favouredArtifactAbsent = [];
			    this.favouredArtifactNumber = [];
			    this.averageTime = [];

	      	}

			DramaticData.exhibits = <?php echo json_encode($Dramatic_exhibitNumber); ?>;
			DramaticData.background = <?php echo json_encode($Dramatic_background); ?>;
			DramaticData.tear = <?php echo json_encode($Dramatic_tear); ?>;
			DramaticData.splash = <?php echo json_encode($Dramatic_splash); ?>;
			DramaticData.favouredArtifactThere = <?php echo json_encode($Dramatic_favouredArtifactThere); ?>;
			DramaticData.favouredArtifactAbsent = <?php echo json_encode($Dramatic_favouredArtifactAbsent); ?>;
			DramaticData.favouredArtifactNumber = <?php echo json_encode($Dramatic_favouredArtifactNumber); ?>;
			DramaticData.averageTime = <?php echo json_encode($Dramatic_averageTime); ?>;

		</script>

	</head>

	
	<body>
	    <!-- Containers -->
	    <div id="visitHeader"></div>
		<div id="containers"></div>
		<div id="visitFooter"></div>

	    <!-- Javascript -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="Dramatic/js/Dramatic.js"></script>

	</body>

</html>