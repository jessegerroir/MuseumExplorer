  <?php
  
    //get musuem from url
    $museum = $_GET['museum'];
 
  	//populate itinerary based off of database table

    // Connects to your Database 
    include 'databaseConnect.php';

     $itinerary = Array();
     $visitation = Array();
     $title = Array();
     $image = Array();
     $visitStart = Array();
     $visitEnd = Array();

    // Collects data from  table 
    $data = mysql_query("SELECT * FROM itinerary WHERE MuseumNumber=".$museum. " ORDER BY VisitationNumber ASC") or die(mysql_error()); 


    //loops through connection to info row by row
    while($row = mysql_fetch_array( $data )) 
    { 

     	$itinerary[] = $row['ExhibitNumber']; 
      $visitation[] = $row['VisitationNumber'];
      $title[] = $row['ExhibitTitle'];
      $image[] = $row['Image']; 

    } 

    mysql_close($connection);
 

?>
<!DOCTYPE html>

<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    
    <!--Leaflet-->
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.css" />
    <script src="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.js"></script>
    
    <!--jquery-->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <link rel="stylesheet" href="globalStyle.css" />

    <script type="text/javascript">

      var museumNumber = <?php echo json_encode($museum); ?>

      //NOTE: it's all in an object

      	function Itinerary()
      	{
      		this.number = [];
      		this.visit = [];
      		this.image = [];
      		this.title = [];
      	}

      //convert artifact info from php array to javascript array
      Itinerary.number = <?php echo json_encode($itinerary); ?>;
      Itinerary.visit = <?php echo json_encode($visitation); ?>;
      Itinerary.image = <?php echo json_encode($image); ?>;
      Itinerary.title = <?php echo json_encode($title); ?>;
      


    </script>

    <!--Specific Museum Data (need to load this dynamically depending on chosen musuem)-->
    <script src="Media/museum1/museum/InfoMuseum.js"></script>

    <!--Museum Generator-->
    <link rel="stylesheet" href="MuseumGen/css/MuseumGen.css" />
    <script src="MuseumGen/js/MuseumGen.js"></script>

  </head>

  <body onload="onLoad()">
    <div id="itinerary"><div id="blackBar">Itinerary</div><div id="visulization" class="button"><span>Create</span><br><span>Visulization</span></div></div>

    <div id="map"></div>
    
  	<div class="sidebarToggle"><span id="sidebarIndicator">></span></div>	
  	<div class="sidebar">
      <div id="sideBody">
        <h1 id="sideTitle">Welcome to the Musuem of Nature!</h1>
        <div id="sideImg"><img src="Media/museum1/museum/museumFront.jpg"/></div>
        <p id="sideTextbox">Explore the various exhibits by clicking on the icons on the map. To add exhibits to your itinerary select them and use the buttons below to add and visit them. Once you have visited all the exhibits in your itinerary, click the Visulize button to create a visulization of your trip.</p>
      	<div id="addRemoveExhibit">Add Exhibit to Itinerary</div>
      	<div id="sideVisit">Visit Exhibit</div>
      </div>
    </div>

  </body>


</html>

