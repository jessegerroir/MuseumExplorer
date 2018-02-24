(function($){//encapsulates the code


    var stage;
    var background;

    var queue;

    //var World = new createjs.Container(); 

    //TODO: should probably have this in a database
    // exhibit Number | X coordinate | Y coordinate
/*    var mapExhibitData = [];
    mapExhibitData[0] = [0, 3006, 3175];
    mapExhibitData[1] = [14, 1000, 900];
    mapExhibitData[2] = [15, 1000, 1300];
    mapExhibitData[3] = [18, 1778, 1081];
    mapExhibitData[4] = [5, 2213, 1382];
    mapExhibitData[5] = [6, 2601, 1382];
    mapExhibitData[6] = [7, 2974, 1382];
    mapExhibitData[7] = [8, 3349, 1382];
    mapExhibitData[8] = [1, 4327, 1075];
    mapExhibitData[9] = [2, 4904, 885];
    mapExhibitData[10] = [19, 4617, 2037];*/

    var ExhibitMarkers = [];

    var currentExhibit = 0;

    $( document ).ready(function(){
        
        addLines();

        createExhibitMarkers();

        scrollThroughExhibits(currentExhibit);

        $( '.buttonLeft' ).click(function() {
            forwardClick();
        });

        $( '.buttonRight' ).click(function() {
            backwardClick();
        });
    
    }); // end of document ready

    function createExhibitMarkers(){

        //for each of the exhibits see...
        for(var i = 0; i < UniqueExhibitData.exhibits.length; i++)
        {

            (function(i) {

                //figure out background colour
                var colour = "red";
                if(UniqueExhibitData.type[i] == "Rocks and Space")
                    colour = "#318C43";
                if(UniqueExhibitData.type[i] == "Water")
                    colour = "#37779a";
                if(UniqueExhibitData.type[i] == "Mammals")
                    colour = "#FFBD31";

                //----------add exhibit markers

                //add the container for the exhibit menu to the body
                $( 'body' ).append( "<div id='menu" + UniqueExhibitData.titles[i].implode() + "' class='menu'><div id ='marker" + UniqueExhibitData.titles[i].implode() + "' class='exhibitMarker'></div></div>" );

                var container = $("#menu" + UniqueExhibitData.titles[i].implode());

                //set the position of the container

                container.css("left", SequentialData.positionX[i+1] + "px");
                container.css("top", SequentialData.positionY[i+1] + "px");


                //setup exhibit marker graphics

                var marker =  $("#marker" + UniqueExhibitData.titles[i].implode());
                
                //set background colour
                marker.css("background-color", colour);

                //add the image
                marker.append( "<img id ='image" + UniqueExhibitData.titles[i].implode() + "' class='exhibitImage' src=" + UniqueExhibitData.images[i] +">");
               
                //add the text
                marker.append( "<span id ='title" + UniqueExhibitData.titles[i].implode() + "' class='exhibitTitle'>" + UniqueExhibitData.titles[i] + "</span>");
                
                
                //ADD ARTIFACTS -------------------------------------------------------

                //check to see if there is artifact info
                for(var x = 0; x < ArtifactData.exhibits.length; x++)
                {   

                    //if the exhibit numbers match
                    if(ArtifactData.exhibits[x] == UniqueExhibitData.exhibits[i])
                    {
                        (function(x) {
                            //create artifact container
                            container.append("<div id ='marker" + x + "' class='artifactMarker " + UniqueExhibitData.titles[i].implode() + " closed'><img class='artifactImage' src=" + ArtifactData.images[x] +"><p>" + ArtifactData.information[x] + "</p><span>" + ArtifactData.descriptions[x] + "</span></div>");
                            $( "#marker" + x ).css("background-color", colour);
                            //add click event
                            $("#marker" + x).click(function() {
                                $( "#marker" + x ).toggleClass( "artifactMarker" );
                                $( "#marker" + x ).toggleClass( "artifactSquare" );
                            });

                        }(x)); 
                    }
                }

                //Artifact Circular Menu creation ------------------------------------------------

                //setup the image
                var image = $("#image" + UniqueExhibitData.titles[i].implode());

                var markerArtifact =  $("." + UniqueExhibitData.titles[i].implode() + "" );
  
                var artifacts = [];

                markerArtifact.each(function() {
                    artifacts.push(this);
                });

                //place artifact in circle about exhibit
                var radius = 200;
                var orginX = 0;
                var orginY = 0;

                for(var z = 0; z < artifacts.length; z++) 
                {
                    (function(z) {

                        angle = z * (360/artifacts.length); 

                        artifacts[z].style.left = (orginX + radius * Math.cos(Math.radians(angle))) + "px";
                        artifacts[z].style.top = (orginY + radius * Math.sin(Math.radians(angle))) + "px";

                    }(z));   
                }

                marker.hover(function() {
                    image.toggleClass("hover");

                });

                marker.click(function() {
                    markerArtifact.toggleClass("closed");
                });

    

            }(i));
        }
    }

    function forwardClick(){

        currentExhibit++;

        if(currentExhibit > UniqueExhibitData.exhibits.length){
            currentExhibit = 0;
        }

        scrollThroughExhibits(currentExhibit)

    }

    function backwardClick(){

        currentExhibit--;

        if(currentExhibit < 0){
            currentExhibit = UniqueExhibitData.exhibits.length;
        }

        scrollThroughExhibits(currentExhibit)

    }

    function scrollThroughExhibits(index){

        //scroll the page to the corresponding container 
        $('html, body').animate({ scrollLeft: SequentialData.positionX[index] - ($( window ).width()/2)}, 400);
        $('html, body').animate({ scrollTop: SequentialData.positionY[index] - ($( window ).height()/2)}, 400);
    }

    function addLines(){

        //set the start point of first line is musuem front
        var x1 = SequentialData.positionX[0];
        var y1 = SequentialData.positionY[0];

        var x2 = 0;
        var y2 = 0;


        //loop through all the exhibits visited in order they were visited
        for(var i = 0; i < ExhibitData.exhibits.length; i++)
        {
            //loop through the sequential data until we find the corresponding exhibit number
            for(var j = 0; j < SequentialData.exhibits.length; j++){

                //draw the line
                if( SequentialData.exhibits[j] == ExhibitData.exhibits[i]){

                    //set the end point of the line (start point is previous end point)
                    x2 = SequentialData.positionX[j];
                    y2 = SequentialData.positionY[j];

                    //set start time of exhibit 
                    var startDate = parseDate(ExhibitData.visitStart[i]);
                    var startTime = "Arrived: " + startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds();

                    //special first case 
                    if(i == 0)
                    {
                        var endDate = parseDate(ExhibitData.visitEnd[i]);
                        //special first case for musuem front
                        endTime = "Visited on " + endDate.toLocaleDateString();
                    }
                    else
                    {
                        //set end time of previous exhibit (drawn at beinning of line near previous exhibit)
                        var endDate = parseDate(ExhibitData.visitEnd[i-1]);
                        var endTime = "Departed: " + endDate.getHours() + ":" + endDate.getMinutes() + ":" + endDate.getSeconds();
                    }

                    createLine(x1, y1, x2, y2, startTime, endTime);

                    x1 = x2;
                    y1 = y2;
                }

            }
        }
    }

    function createLine(x1, y1, x2, y2, startTime, endTime){

        var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
        var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        var transform = 'rotate('+angle+'deg)';
    
        var line = $('<div></div>')
          .appendTo('body')
          .addClass('line')
          .css({
            'position': 'absolute',
            '-webkit-transform':  transform,
            '-moz-transform':     transform
          })
          .width(length)

        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

        if (isChrome){
            line.offset({left: x1, top: y1});
        }
        else{
            line.offset({left: x1 < x2 ? x1 : x1 - (x1-x2), top: y1 < y2 ? y1 : y1 - (y1-y2)});
        }

        $('<span>' + startTime + '</span>')
        .appendTo(line)
        .addClass('entered')

        $('<span>' + endTime + '</span>')
        .appendTo(line)
        .addClass('exited')


        return line;
    }

    // Converts from degrees to radians.
    Math.radians = function(degrees) {
      return degrees * Math.PI / 180;
    };
     
    // Converts from radians to degrees.
    Math.degrees = function(radians) {
      return radians * 180 / Math.PI;
    };

    String.prototype.implode = function() {
        var str = this
        
        str = str.replace(/\s+/g, '');

        return str; 
    }

    //TODO: had to re-write this function a bit so it's different from one in Visulizer, not sure which one is right in terms of date order
    function parseDate(date){

        var twoHalves = date.split(" ");
        var half1 = twoHalves[0].split("-");
        var half2 = twoHalves[1].split(":");

        var joined = half1.concat(half2);

        //make javascript date date
        var jsDate = new Date(joined[0], joined[1], joined[2], joined[3], joined[4], joined[5], "00");

        return jsDate;
    }

})(jQuery); // end of jQuery name space