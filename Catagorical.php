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

	if(!empty($exhibits)) {

		// Connects to your Database 
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

    //--- Additional Data ------------------------------------------------------------------------------------------------

    $additional_Number = Array();
    $additional_Info = Array();
    $additional_Link = Array();


	if(!empty($exhibits)) {

		$exhibitString = implode(',', $exhibits);

	    // Collects interaction data from the visit data 
	    $data = mysql_query("SELECT * FROM catagorical WHERE ExhibitNumber IN (" .$exhibitString. ")") or die(mysql_error()); 

	    //loops through connection to info row by row
	    while($row = mysql_fetch_array( $data )) 
	    { 
	     	$additional_Number[] = $row['ExhibitNumber'];
	     	$additional_Info[] = $row['AdditionalInformation'];  
	     	$additional_Link[] = $row['Weblink'];
	    } 
	}

    mysql_close($connection);

?>

<!DOCTYPE html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Visulization</title>

        <!--Catagorical -->
	    <link rel="stylesheet" href="Catagorical/css/Catagorical.css" media="screen,projection" />

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
	      	}

			ExhibitData.exhibits = <?php echo json_encode($num); ?>;
			ExhibitData.type = <?php echo json_encode($type); ?>;
			ExhibitData.images = <?php echo json_encode($images); ?>;
			ExhibitData.titles = <?php echo json_encode($titles); ?>;

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
			ArtifactData.infomation = <?php echo json_encode($info); ?>;

	      	function AdditionalInfo()
	      	{
	      		this.exhibits = [];
	      		this.information = [];
	      		this.weblink = [];
	      	}

			AdditionalInfo.exhibits = <?php echo json_encode($additional_Number); ?>;
			AdditionalInfo.information = <?php echo json_encode($additional_Info); ?>;
			AdditionalInfo.weblink = <?php echo json_encode($additional_Link); ?>;

		</script>

	</head>

	
	<body>
		<!-- Catagory Menu -->
		<div id="menus">
		    <div class="menu" id="menu1">
		      <div class="slider">
		        <ul id="menuItems1">
		          <li class="category active"><a href="#home">HOME</a></li>
		          <li class="category"><a href="#search">SEARCH</a></li>
		          <li class="category"><a href="#about">ABOUT US</a></li>
		          <li class="category"><a href="#contact">CONTACT US</a></li>
		        </ul>
		        <div class="bar">
		          <div class="before" id="beforeType"></div>
		          <a id="knobType"></a>
		          <div class="after"></div>
		        </div>
		      </div>
		    </div>
		    <!-- Exhibit Menu -->
		    <div class="menu" id="menu2">
		      <div class="slider">
		        <ul id="menuItems2">
		          <li class="category active"><a href="#home">HOME</a></li>
		          <li class="category"><a href="#search">SEARCH</a></li>
		          <li class="category"><a href="#about">ABOUT US</a></li>
		          <li class="category"><a href="#contact">CONTACT US</a></li>
		        </ul>
		        <div class="bar">
		          <div class="before" id="beforeExhibit"></div>
		          <a id="knobExhibit"></a>
		          <div class="after"></div>
		        </div>
		      </div>
		    </div>
	    </div>
	    <!-- Containers -->
		<div id="containers">
 			<div id="home" class="container">
		      <div class="header">
		        <h1>Slider Timeline Menu</h1>
		      </div>
		    </div>

		    <div id="search" class="container blue">
		      <h1>Search</h1>
		    </div>

		    <div id="about" class="container green">
		      <h1>About Us</h1>
		    </div>

		    <div id="contact" class="container red">
		      <h1>Contact Us</h1>
		    </div> 
	    </div>

	    <!-- Javascript -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="Catagorical/js/Catagorical.js"></script>

	</body>

</html>