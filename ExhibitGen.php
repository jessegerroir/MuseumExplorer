  <?php
    
    //grab what exhibit we are at from the url

    $museum = $_GET['museum'];
    $exhibit = $_GET['exhibit'];

    //put artifact info in array

    $infoArray = Array();
    $imgPath = Array();

    //connects to the database
    include 'databaseConnect.php';

    // Collects data from  table 
    $data = mysql_query("SELECT * FROM artifacts WHERE MuseumNumber=".$museum." AND ExhibitNumber=".$exhibit. " ORDER BY ArtifactNumber ASC") or die(mysql_error()); 

    //loops through connection to info row by row
    while($row = mysql_fetch_array( $data )) 
    { 

     $infoArray[] = $row['Info']; 
     $imgPath[] = $row['Image']; 

    } 

    mysql_close($connection);

    //get info from ExhibitVisits----------------------------------------

    $visitNumber = Array();

    // Connects to your Database 
    include 'databaseConnect.php';

    // Collects data from  table 
    $data = mysql_query("SELECT * FROM exhibitVisits WHERE MuseumNumber=".$museum." AND ExhibitNumber=".$exhibit) or die(mysql_error()); 

    //loops through connection to info row by row
    while($row = mysql_fetch_array( $data )) 
    { 
      $visitNumber[] = $row['VisitNumber'];
    } 

    mysql_close($connection);

    //get info from VisitorData----------------------------------------

    $artifactNumber = Array();
    $userImages = Array();
    $userDescription = Array();
    $userDescription = Array();

    // Connects to your Database 
    include 'databaseConnect.php';

    // Collects data from  table 
    $data = mysql_query("SELECT * FROM userdata0 WHERE MuseumNumber=".$museum." AND ExhibitNumber=".$exhibit. " ORDER BY ArtifactNumber ASC") or die(mysql_error()); 

    //loops through connection to info row by row
    while($row = mysql_fetch_array( $data )) 
    { 

      $artifactNumber = $artifactNumber['ArtifactNumber']; 
      $userImages[] = $row['Image']; 
      $userDescription[] = $row['Description'];
      $artifactInfo[] = $row['Info'];
      $artifactTimestamp[] = $row['Time'];


    } 

    mysql_close($connection);

  ?>



<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <script type="text/javascript">

      //store these single variables that have been grabbed from the url
      var museumNumber = <?php echo json_encode($museum); ?>;
      var exhibitNumber = <?php echo json_encode($exhibit); ?>;

      //data on the artifacts that are part of the exhibit
      function Artifact()
      {
        this.infomation = [];
        this.image = [];
      }

      Artifact.information = <?php echo json_encode($infoArray); ?>;
      Artifact.image = <?php echo json_encode($imgPath); ?>;

      function UserData()
      {
        this.number = [];
        this.image = [];
        this.comment = [];
        this.information = [];
        this.timestamp = [];

      }

      UserData.number = <?php echo json_encode($artifactNumber); ?>;
      UserData.image = <?php echo json_encode($userImages); ?>;
      UserData.comment = <?php echo json_encode($userDescription); ?>;
      UserData.information = <?php echo json_encode($artifactInfo); ?>;
      UserData.timestamp = <?php echo json_encode($artifactTimestamp); ?>;

      function VisitData()
      {
        this.visitNumber = [];
      }

      VisitData.visitNumber = <?php echo json_encode($visitNumber); ?>;

    </script>

    <!-- Dependicies and plugins -->
    <!-- Add mousewheel plugin (this is optional) -->
    <script type="text/javascript" src="ExhibitGen/dep/fancybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>

    <!-- Add fancyBox -->
    <link rel="stylesheet" href="ExhibitGen/dep/fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
    <script type="text/javascript" src="ExhibitGen/dep/fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>

    <!-- Optionally add helpers - button, thumbnail and/or media -->
    <link rel="stylesheet" href="ExhibitGen/dep/fancybox/source/helpers/jquery.fancybox-buttons.css?v=1.0.5" type="text/css" media="screen" />
    <script type="text/javascript" src="ExhibitGen/dep/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>
    <script type="text/javascript" src="ExhibitGen/dep/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6"></script>

    <link rel="stylesheet" href="ExhibitGen/dep/fancybox/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" type="text/css" media="screen" />
    <script type="text/javascript" src="ExhibitGen/dep/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>

    <!--Museum Stuff-->
    <link rel="stylesheet" href="ExhibitGen/css/ExhibitGen.css" />
    <script type="text/javascript" src="ExhibitGen/dep/maphilight-master/jquery.maphilight.js"></script>
    <script type="text/javascript" src="ExhibitGen/js/ExhibitGen.js"></script>

    <link rel="stylesheet" href="globalStyle.css" />

    <!-- Exhibit info -->
  </head>

  <body>

    <div id="content">
      <div id="backToMuseum" class="button">Back To Museum</div>
      <div id="mapDiv">
        <!--- php to echo out the right imageMap -->
        <?php
          
          //connects to the database
          include 'databaseConnect.php';

          // Collects data from "friends" table 
          $data = mysql_query("SELECT * FROM exhibits WHERE MuseumNumber=".$museum." AND ExhibitNumber=".$exhibit) or die(mysql_error()); 

          //loops through connection to info row by row
          while($row = mysql_fetch_array( $data )) 
          { 
 
           Print $row['ImageMap']; 
           Print $row['Area']; 

          } 
          
          mysql_close($connection);
        ?>
      </div>

      <div id="panel">
        <h1>Welcome!</h1><p>Explore the exhibit with your mouse to find the hotspots. Click on a hotspot to find information about the object.</p>
      </div>

    </div>  

   
    <div id="camera">
      <img id="cameraIcon" src="ExhibitGen/icons/cameraIcon.png">
    </div>




  </body>



</html>

