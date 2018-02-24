
var map;

var popup = L.popup();

var activePath;

var activeExhibit = 99999;

var sideOpen = true;

function onLoad() {
    
    //init map
    createMap();

    populateItinerary();

    //init musuem exhibit
    for(i = 0; i < MuseumInfo.MapExhibits.length; i ++)
    {

        //create the shape for the exhibit
        createExhibitShape(map, MuseumInfo.MapExhibits[i]);
        //create the onClick event handler for the exhibit
        createExhibitClick(MuseumInfo.MapExhibits[i]);
    }

    //init sidebar
    $(".sidebarToggle").click(onSideOpenCloseClick);
    $("#sideVisit").click(onSideVisitClick);
    $("#addRemoveExhibit").click(addRemoveExhibitClick);
    $("#visulization").click(gotoVisulization);

}

///---------------------Map functions-----------------------------

function createMap(){
    
    var mapMaxZoom = 4;
    var mapMinZoom = 0;

    //init map
    map = L.map('map', {
        maxZoom: mapMaxZoom,
        minZoom: mapMinZoom,
        crs: L.CRS.Simple,
        zoom: 3
    }).setView([-60, 108], 3);
  
    var mapBounds = new L.LatLngBounds(
        map.unproject([0, 4096], mapMaxZoom),
        map.unproject([7168, 0], mapMaxZoom));
    
    //map.fitBounds(mapBounds);

    L.tileLayer(MuseumInfo.TilePath, {
        minZoom: mapMinZoom, maxZoom: mapMaxZoom,
        bounds: mapBounds,
        noWrap: true          
    }).addTo(map);



    map.on('click', onMapClick);
}

function onMapClick(e) {
    
    /*popup.setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);*/

        //change different elements on the side panel to display the information of the 
    //clicked on musuem object
    $( '#sideTitle').text("Welcome to the Musuem of Nature!");

    $( '#sideTextbox').text("Explore the various exhibits by clicking on the icons on the map. To add exhibits to your itinerary select them and use the buttons below to add and visit them. Once you have visited all the exhibits in your itinerary, click the Visulize button to create a visulization of your trip.");
    //add picture to sidebar
    $( '#sideImg').html("<img src='Media/museum1/museum/museumFront.jpg'/>");


    if($( ".sidebar" ).hasClass('sidebarClose')==false)
    {
        $( ".sidebar" ).addClass('sidebarClose');
        $( ".sidebarToggle" ).addClass('sidebarToggleClosed');
    }
}

///---------------------Exhibit functions-----------------------------

//TODO: put all of this in it's own class

function createExhibitShape(map, exhibit){

    //create the active icon
    exhibit.activeIcon = L.icon(
    {
        iconUrl: exhibit.activeIconURL,
        iconSize: exhibit.iconSize,
        
    });

    //create teh hover icon
    exhibit.hoverIcon = L.icon(
    {
        iconUrl: exhibit.hoverIconURL,
        iconSize: exhibit.iconSize,
        
    });

    //create the normal icon
    exhibit.icon = L.icon(
    {
        iconUrl: exhibit.iconURL,
        iconSize: exhibit.iconSize,
        
    });

    //create the market and set it's position and icon to be default icon
    exhibit.marker = L.marker(exhibit.position, {icon: exhibit.icon}).addTo(map);
}

function createExhibitClick(exhibitObj){


    //the event handler for when the shape is clicked and it's corresponding function
    exhibitObj.marker.on('click', function()
    {
        activeExhibit = exhibitObj;
        activePath = "ExhibitGen.php?museum=" + museumNumber + "&exhibit=" + exhibitObj.exhibitNumber;

        setExhibitIconActive();
        setExhibitSidePanel();
        checkButton(exhibitObj.exhibitNumber);

    });

    exhibitObj.marker.on('mouseover', function(evt) {
        if(exhibitObj.exhibitNumber != activeExhibit.exhibitNumber)
        {
            exhibitObj.marker.setIcon( exhibitObj.hoverIcon );
        }
    });

    exhibitObj.marker.on('mouseout', function(evt) {
        if(exhibitObj.exhibitNumber != activeExhibit.exhibitNumber)
        {
            exhibitObj.marker.setIcon( exhibitObj.icon );
        }
    });
}

function setExhibitIconActive(){
    
    for(var i = 0; i <  MuseumInfo.MapExhibits.length; i++)
    {

         MuseumInfo.MapExhibits[i].marker.setIcon( MuseumInfo.MapExhibits[i].icon );
    }

    activeExhibit.marker.setIcon( activeExhibit.activeIcon );
}

function setExhibitSidePanel(){
    


    //change different elements on the side panel to display the information of the 
    //clicked on musuem object
    $( '#sideTitle').text(activeExhibit.title);

    $( '#sideTextbox').text(activeExhibit.text);
    //add picture to sidebar
    $( '#sideImg').html("<img src='" + activeExhibit.picture + "' />");

    

    if($( ".sidebar" ).hasClass('sidebarClose')==true)
    {
        //display it
        $( ".sidebar" ).removeClass('sidebarClose');
        $( ".sidebarToggle" ).removeClass('sidebarToggleClosed');
    }
}

///---------------------Sidebar functions--------------------------------

function onSideOpenCloseClick(e) {

    $( ".sidebar" ).toggleClass('sidebarClose');
    $( ".sidebarToggle" ).toggleClass('sidebarToggleClosed');

    if(sideOpen){
        sideOpen = false;
        $( "#sidebarIndicator" ).html("<");
    }
    else{
        sideOpen = true;
        $( "#sidebarIndicator" ).html(">");
    }

    

}

function onSideVisitClick(e) {

    //TODO: fix all this logic, one function to alter arrays, one to go to page

    var inItinerary = false;
    var maxVisitation = 0;
    var indexOfExhibit = 0;

    var visitStart = 0;

    //find the highest visitation number
    //also find out if the exhibit is already in itinerary or not
    for(var i=0; i < Itinerary.number.length; i++)
    {
        if(Itinerary.visit[i] != 1000)
        {
            if(Itinerary.visit[i] > maxVisitation)
            {
                maxVisitation = Itinerary.visit[i];
            }
        }
        //if it's in the itinerary 
        if(Itinerary.number[i] == activeExhibit.exhibitNumber){
            inItinerary = true; //set this to true
            indexOfExhibit = i; // save it's index
        }
    }

    //if it's in the interary simply set it's visitation number to be +1 max
    //and timestamp to be current time
    if(inItinerary == true)
    {
        maxVisitation = Number(maxVisitation) + 1;
        Itinerary.visit[indexOfExhibit] = maxVisitation;
        
    }
    //if it's not insert it at end
    //and timestamp to be current time
    if(inItinerary == false)
    {
        //adds the active exhibt (which we are visiting) to array and increases visitation number
        Itinerary.number.push(activeExhibit.exhibitNumber);
        Itinerary.visit.push(Number(maxVisitation) + 1);
        Itinerary.image.push(activeExhibit.picture);
        Itinerary.title.push(activeExhibit.title);

        //set it's index to be length-1 as it was just added
        indexOfExhibit = Itinerary.number.length-1;
    }

    visitStart = getDateTime();

    //delete all rows from table 
    $.ajax({
      url: "MuseumGen/php/deleteItinerary.php",
      type: "post",
      data: {"museum": museumNumber, "exhibit": activeExhibit.exhibitNumber, "visitation": maxVisitation},
      success: function(data, status) {
        //we nest the writing in here to make sure it only add's the filmes when the deletion is done
        //otherwise it may add the files and then call the deletion which deletes teh files

            //write to interary table
            $.ajax({
              url: "MuseumGen/php/inputItinerary.php",
              type: "post",
              data: {"museum": museumNumber, "exhibitArray": Itinerary.number, "visitationArray": Itinerary.visit, "titleArray" : Itinerary.title, "imageArray" : Itinerary.image },
              success: function(data, status) {
            
                //write to ExhibitVisits table
                $.ajax({
                  url: "MuseumGen/php/inputExhibitVisits.php",
                  type: "post",
                  data: {"museum": museumNumber, "exhibit": Itinerary.number[indexOfExhibit], "$exhibitType": activeExhibit.exhibitType, "title" : Itinerary.title[indexOfExhibit], "numArtifacts": activeExhibit.numArtifacts, "image" : Itinerary.image[indexOfExhibit], "visitStart" : visitStart },
                  success: function(data, status) {
                        
                        //go to exhibit
                        window.location = activePath;
                  },
                  error: function(xhr, desc, err) {
                    console.log(xhr);
                    console.log("Details: " + desc + "\nError:" + err);
                  }
                }); // end ajax call  
  

              },
              error: function(xhr, desc, err) {
                console.log(xhr);
                console.log("Details: " + desc + "\nError:" + err);
              }
            }); // end ajax call  

      },
      error: function(xhr, desc, err) {
        console.log(xhr);
        console.log("Details: " + desc + "\nError:" + err);
      }
    }); // end ajax call
}

function addRemoveExhibitClick(e) {

    //TODO: could probably optimize the logic of this function
    
    var contains = false;

    //check to see if the exhibit is there
    for(var i=0; i < Itinerary.number.length; i++)
    { 
        if(Itinerary.number[i] == activeExhibit.exhibitNumber)
        {
            contains = true;
            var index = i;
        }
    }

    //add it if it's not there
    if(contains==false)
    {

        //add item to the arrays
        Itinerary.number.push(activeExhibit.exhibitNumber);
        Itinerary.visit.push(1000);
        Itinerary.image.push(activeExhibit.picture);
        Itinerary.title.push(activeExhibit.title);

        //create the visual item with last added item
        addItineraryItem(Itinerary.number.length-1)
    }

    //remove it if it's there
    if(contains==true)
    {
        //only get rid of it if it's red and unvisited
        if(Itinerary.visit[index] == 1000)
        {

            //remove visual item 
                $("#" +  activeExhibit.exhibitNumber ).parent().remove();

                //remove from array 
                Itinerary.number.splice(index, 1);
                Itinerary.visit.splice(index, 1);
                Itinerary.image.splice(index, 1);
                Itinerary.title.splice(index, 1);
        }
        else
        {
            alert("You have already visited this exhibit, you can't remove it");
        }
    }

    //change the button to appropriate colour
    checkButton(activeExhibit.exhibitNumber);

    checkAllVisited();

}

function checkButton(exhibNum){

    //change the button back to blue
    $("#addRemoveExhibit").html("Add to Itinerary");
    $("#addRemoveExhibit").css( "background-color" , "blue" );


    //look through itinerary for exhib number
    //if it's there then the exhib is in the itinerary then change the button to red
    for(var i = 0; i < Itinerary.number.length; i++)
    {
        if(Itinerary.number[i]==exhibNum)
        {
            $("#addRemoveExhibit").html("Remove from Itinerary");
            $("#addRemoveExhibit").css( "background-color" , "red" );
        }
    }
}

///---------------------Itineary functions--------------------------------

function itineraryItemClick(exhibNum){

    //TODO: see if you can just use 'this' to get active exhibit or this.id instead of looping through
    //make the clicked on exhibit the active exhibit 
    for(var i = 0; i < MuseumInfo.MapExhibits.length; i++)
    {
        if(MuseumInfo.MapExhibits[i].exhibitNumber == exhibNum)
        {

            activeExhibit = MuseumInfo.MapExhibits[i];
            activePath = "ExhibitGen.php?museum=" + museumNumber + "&exhibit=" + activeExhibit.exhibitNumber;

        } 
    }
    
    setExhibitIconActive();
    setExhibitSidePanel();

    //change the button
    checkButton(exhibNum);
}

function addItineraryItem(i){

        //add itinerary item 
        var dropspot = $('<div></div>')
                            .appendTo('#itinerary')
                            .addClass('dropspot')
                            .attr("draggable", "true");

        //add the event listeners
        dropspot.get(0).addEventListener('dragstart', handleDragStart, false);
        dropspot.get(0).addEventListener('dragenter', handleDragEnter, false);
        dropspot.get(0).addEventListener('dragover', handleDragOver, false);
        dropspot.get(0).addEventListener('dragleave', handleDragLeave, false);
        dropspot.get(0).addEventListener('drop', handleDrop, false);
        dropspot.get(0).addEventListener('dragend', handleDragEnd, false);

        dropspot.on('click', function () { 
                        //exhibit number of exhibit currently in dropspot
                        var exhibNum = $( this ).children().attr('id')
                        itineraryItemClick(exhibNum);
                     });

        //TODO: make below a bit more readable like the above

        var itineraryItem = $('<div></div>')
                            .appendTo(dropspot)
                            .addClass('itineraryItem')
                            .attr("id", Itinerary.number[i]);


        //add the content to the itinerary item
        //the header
        $('<header>' + Itinerary.title[i] + '</header>').appendTo(itineraryItem);
        //the image
        $('<img id="' + Itinerary.number[i] + '" draggable="false" class="itineraryImage" src="' + Itinerary.image[i] + '"/>').appendTo(itineraryItem);
        //the status
        $('<span draggable="false"></span>').appendTo(itineraryItem);

        return itineraryItem;
}

function populateItinerary(){

    //populate itinerary
    for(var i=0; i < Itinerary.number.length; i++)
    {

        //add item to visual itinerary 
        item = addItineraryItem(i);

        if(Itinerary.visit[i] != 1000)
        {
            //item.css({'border-style': 'solid', 'border-color': 'green'});
            item.children('span').html("");
            item.children('span').html("Visited");
        }

    }

    checkAllVisited();
}

function checkAllVisited(){

    $( "#visulization" ).addClass( "inactive" );

    //if the array is not empty
    if(Itinerary.visit.length > 0)
    {
        //check itinerary to see if there is a visited item
        for(var i=0; i < Itinerary.visit.length; i++)
        {
            if(Itinerary.visit[i] != 1000)
            {
                //change visulization button to inactive
                $( "#visulization" ).removeClass( "inactive" );
                return true
            }
        }
    }

    //if it is empty or if there are only unvisited items
    $( "#visulization" ).addClass( "inactive" );
    return false;
}

function gotoVisulization(){

    if(checkAllVisited())
    {  
        window.location = "Visualizer.php?museum=" + museumNumber;
    }
    else{
        alert("You need to visit exhibits first before creating a visulization of what you saw.")
    }
}


//--------Itinerary Items Drag and Drop---------------------------

function handleDragStart(e) 
{
    // Target (this) element is the source node.
    this.style.opacity = '0.4';

    //set what we are currently dragging
    activeDrag = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) 
{
    if (e.preventDefault) 
    {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
}

function handleDragEnter(e) 
{
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function handleDragLeave(e) 
{
    this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) 
{
    // this/e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }

    // Don't do anything if dropping the same column we're dragging.
    if (activeDrag != this) {
        
        // Set the source column's inner HTML to the inner HTML of the column we dropped on.
        activeDrag.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    activeDrag.style.opacity = '1';
    this.style.opacity = '1';

    return false;
}

function handleDragEnd(e) 
{
  // this/e.target is the source node.

    activeDrag.style.opacity = '1';

    //don't think the below is needed
    /*==for (var i = 0; i < timelineItems.length; i++) {
        timelineItems[i].classList.remove('over'); 
    };*/

    $( '.dropspot').removeClass('over');
}

///---------------------Utility functions--------------------------------

function getDateTime(){

    var currentdate = new Date(); 
    var datetime =      currentdate.getFullYear() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getDate() + " "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();

    return datetime;
}
