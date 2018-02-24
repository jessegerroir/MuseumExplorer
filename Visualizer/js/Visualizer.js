
    //drag and drop variables
    //var activeDrag = null;
    //var timelineItems;


    //Timeline variables
    var cTimeline;
    var sTimeline;

    //Map variables
    var cMap;
    var sMap;

    var mapExhibitData = new Array(10);

    var markers = [];
    var points = [];
    var bars = [];


    function onLoad(){

        initData();

        generateCheckboxes();

        //initilize both stages
        initStage();

        //creates the map
        createMap();

        //creates the Timeline
        createTimeline();

        $( "#Sequential" ).click(function(){
            VisulizationClick("Sequential.php?museum=1");
        });
        $( "#Dramatic" ).click(function(){
            VisulizationClick("Dramatic.php?museum=1");
        });
        $( "#Catagorical" ).click(function(){
            VisulizationClick("Catagorical.php?museum=1");
        });
        $( "#Slideshow" ).click(function(){
            VisulizationClick("Slideshow.php?museum=1");
        });

    }

    function generateCheckboxes(){

        //find unique exhibits
        var uniqueNumber = ExhibitData.number.unique();

        //find unique exhibits
        var uniqueTitle = ExhibitData.title.unique();

        for(var i=0; i < uniqueNumber.length; i++)
        {
            $( "#exhibitChecks" ).append( "<input class='check' type='checkbox' checked='true' name='checks' id=" + uniqueNumber[i] + ">" + uniqueTitle[i] + "      " );
        }
    }

    //---------global Stage stuff---------------

    function initData(){

        //TODO: should probably put the marker data in a database instead of hardcoded here

        //blue
        mapExhibitData[8] = [1,627,73, "SteelBlue"];
        mapExhibitData[9] = [2,728,39, "RoyalBlue"];

        //yellow
        mapExhibitData[0] = [5,266,129, "Gold"];
        mapExhibitData[1] = [6,335,129, "Khaki"];
        mapExhibitData[2] = [7,395,129, "Orange"];
        mapExhibitData[3] = [8,460,129, "Yellow"];

        //green
        mapExhibitData[4] = [14,52,39, "OliveDrab"];
        mapExhibitData[5] = [15,52,111, "DarkOliveGreen"];
        mapExhibitData[6] = [18,679,241, "ForestGreen"];
        mapExhibitData[7] = [19,190,76, "SeaGreen"];  


    }

    function initStage(){

        $('#popupDiv').hide();

        // create a new sTimeline and point it at our cTimeline:
        cMap = document.getElementById("canvasMap");
        sMap = new createjs.Stage(cMap);

        sMap.enableMouseOver(20);  

        // create a new sTimeline and point it at our cTimeline:
        cTimeline = document.getElementById("canvasTimeline");
        sTimeline = new createjs.Stage(cTimeline);

        sTimeline.enableMouseOver(20);  


        createjs.Ticker.addEventListener("tick", handleTick);
        function handleTick(event) {
          sMap.update()
          sTimeline.update()
        }
    }

    //----------------------------------------------------------------------
    //----------------------------------- Map ------------------------------
    //----------------------------------------------------------------------

    //--------- Class and data --------------------

    function Marker () {
        this.radius = 10;
        this.x = 0;
        this.y = 0;
        this.colour = "red";
        this.circle;
        this.title;
    }

    function initMarkerInfo(){

        //go through each element of the timeline
        for (var j=0; j < ExhibitData.number.length; j++)
        {   
            //go through each element in data
            for (var k=0; k < mapExhibitData.length; k++)
            { 
                //if they match
                if(ExhibitData.number[j] == mapExhibitData[k][0])
                {
                    markers.push(new Marker());
                    markers[j].x = mapExhibitData[k][1];
                    markers[j].y = mapExhibitData[k][2];
                    markers[j].colour = mapExhibitData[k][3];
                    markers[j].title = ExhibitData.title[j];
                }
            }
        }

    }

    //--------- Map --------------------

    function createMap(){

        initMarkerInfo();
        initMap();
    }

    function initMap(){

        var map = new Image();

        map.src = "Media/museum1/museum/resizedMap.png";

        //when map is done loading, add elements
        map.onload = function(){
            var bitmap = new createjs.Bitmap(map);
            sMap.addChild(bitmap);
            //have to have this here so that the circles are drawn after the map
            drawMarkers();
        }
    }

    function drawMarkers(){


        for (var i=0; i < markers.length; i++)
        { 
            
            //create the marker container to hold marker shape and label
            var container = new createjs.Container(); 

            //Create a Marker Shape
            var marker = new createjs.Shape();
            marker = new createjs.Shape();
            marker.graphics.beginFill(markers[i].colour).drawCircle(0, 0, markers[i].radius);
            marker.addEventListener("mouseover", function() {

            });

            label = new createjs.Text(markers[i].title, "bold 14px Arial", "#000000");
            label.textAlign = "center";
            label.x = 0;
            label.y = -25;

            //add marker shape to container
            container.addChild(marker, label);

            // position the container, and add it to the sTimeline:
            container.x = markers[i].x;
            container.y = markers[i].y;

            //Add container to stage
            sMap.addChild(container);
        }
    }

    //----------------------------------------------------------------------
    //----------------------------------- Timeline -------------------------
    //----------------------------------------------------------------------

    //--------- Class and data --------------------

    function Bar () {
        this.number = 0
        this.width = 0;
        this.height = 100;
        this.x = 0;
        this.y = 0;
        this.colour;
        this.bar;
        this.title;
        this.start;
        this.end;
    }

    function initBarInfo(){

        //data var
        var visitLength = [];
        var visitTotal = 0;

        //step 1: calcuate the lengths of all the visits
        for(var i = 0; i < ExhibitData.visitStart.length; i++)
        {

            var dateStart = parseDate(ExhibitData.visitStart[i]);
            var dateEnd = parseDate(ExhibitData.visitEnd[i]);

            var diff = dateEnd.getTime() - dateStart.getTime(); 

            //visit length is calculated and stored as milliseconds
            visitLength.push(diff);

            //a running total of the length of all the visits is stored
            visitTotal += diff;  

        }

        //start the bars 50px in from the edge of the stage
        var currBarX = 10;
        //amount of padding on either side
        var timelinePadding = 20;

        // calculate the bar width and height based on number of bars and width of Timeline:
        for (var i=0; i < ExhibitData.number.length; i++) 
        {
            
            bars.push(new Bar());
            bars[i].number = ExhibitData.number[i];
            bars[i].width = (visitLength[i] / visitTotal) * (cTimeline.width-timelinePadding);
            bars[i].y = Math.round((cTimeline.height / 2) - (bars[i].height / 2)); 
            bars[i].x = currBarX;
            bars[i].title = ExhibitData.title[i];

            var start = parseDate(ExhibitData.visitStart[i])
            var end = parseDate(ExhibitData.visitEnd[i])

            bars[i].start = start.toLocaleTimeString();
            bars[i].end = end.toLocaleTimeString();

            currBarX += bars[i].width;

        }

        //set the colour
        for (var j=0; j < bars.length; j++)
        {   
            //go through each element in data
            for (var k=0; k < mapExhibitData.length; k++)
            { 
                //if they match
                if(ExhibitData.number[j] == mapExhibitData[k][0])
                {
                    bars[j].colour = mapExhibitData[k][3];
                }
            }
        }
    }

    //-------- Timeline ---------------------------
    function createTimeline(){

        initBarInfo();
        drawGraph();
        drawBars();
        drawPoints();
    }

    function drawGraph(){

        // create a shape to draw the background into:
        var bg = new createjs.Shape();
        sTimeline.addChild(bg);

    }

    function drawBars(){

        // draw the bars:
        for (i=0; i < bars.length; i++) 
        {
            // each bar is assembled in its own Container, to make them easier to work with:
            var container = new createjs.Container();

            // draw the bar
            var barGraphic = new createjs.Shape();
            //barGraphic.graphics.beginLinearGradientFill([100,createjs.Graphics.getHSL(100,100,20,0.75)],[0,1],0,0,100,100)
            barGraphic.graphics.beginFill(bars[i].colour).drawRect(0,0, bars[i].width, bars[i].height);

            // create the label at the bottom of the bar:
            var label = new createjs.Text(bars[i].title, "16px Arial", "#000000");
            label.textAlign = "left";
            label.x = 0;
            label.maxWidth = bars[i].width;
            label.y = -20;
            label.alpha = 1;

            // create the label at the bottom of the bar:
            /*  var timestart = new createjs.Text(bars[i].start, "16px Arial", "#000000");
            timestart.textAlign = "left";
            timestart.x = 0;
            label.maxWidth = (bars[i].width/2);
            timestart.y = 0;
            timestart.alpha = 1;

            // create the label at the bottom of the bar:
            var timeend = new createjs.Text(bars[i].end, "16px Arial", "#000000");
            timeend.textAlign = "right";
            timeend.x = (bars[i].width - timeend.width);
            //label.maxWidth = bars[i].width *2;
            timeend.y =  (bars[i].height - timeend.height);
            timeend.alpha = 1;*/

            // add all of the elements to the bar Container:
            container.addChild(barGraphic, label);

            // position the container, and add it to the sTimeline:
            container.x = bars[i].x;
            container.y = bars[i].y;

            sTimeline.addChild(container);

        }
    }

    function drawPoints(){

        //draw the line through the graph
        var lineStartX = bars[0].x;
        var lineStartY = bars[0].y + (bars[0].height / 2);
        var lineEndX = (bars[bars.length-1].x + bars[bars.length-1].width);
        var lineEndY = bars[0].y + (bars[0].height / 2);

        var line = new createjs.Shape();
        line.graphics.moveTo(lineStartX, lineStartY).setStrokeStyle(3).beginStroke("#000000").lineTo(lineEndX, lineEndY);
        sTimeline.addChild(line);

        for (var i=0; i < ArtifactData.number.length; i++)
        { 

            //we have to put the loop code inside it's own little function 
            //to make sure it's scoped properly and so that i will be 'frozen'
            (function(i) {

                //Create a Shape DisplayObject.
                points[i] = new createjs.Shape();
                points[i].graphics.beginFill("black").drawCircle(0, 0, 10);
                //Set position of Shape instance.

                points[i].x = calculatePointPosition(i);

                points[i].y = bars[0].y + (bars[0].height / 2);

                //assign that reference to themouseover
                points[i].addEventListener("mouseover", function(evt) {
                    mouseOverPoint(evt, i);
                });


                points[i].addEventListener("mouseout", function(evt) {
                    $('#popupDiv').hide();
                });

                //Add Shape instance to sTimeline display list.
                sTimeline.addChild(points[i]);


            }(i));
        }
    }

    function mouseOverPoint(evt, i){

        var popup_div = $('#popupDiv');

        popup_div.html("</p><img src=" + ArtifactData.image[i] + "><p>" + ArtifactData.description[i] + "</p>"  );

        //positon popup
        var stage = $('#canvasTimeline');
        var offset = stage.offset();

        var new_top = offset.top + evt.stageY -175;
        var new_left = offset.left + evt.stageX -275;
        
        popup_div.css('left', new_left + 'px');
        popup_div.css('top', new_top + 'px');
        
        popup_div.show();
    }
       
    //find the x position of the points
    function calculatePointPosition(eNum){

        //first match it up with correct exhibit start/end time
        for(var k = 0; k < ExhibitData.number.length; k++)
        {
            //if the exhibit numbers match
            if(ArtifactData.number[eNum] == ExhibitData.number[k])
            {
                //convert timestamp to jsDate
                var timePoint = parseDate(ArtifactData.timestamp[eNum]);

                var beginTime = parseDate(ExhibitData.visitStart[k]);

                var endTime = parseDate(ExhibitData.visitEnd[k]);


                var totalDuration = Math.abs(beginTime.getTime() - endTime.getTime()); // time distance

                //see if it's inbetween
                if (timePoint - Math.min(beginTime, endTime) <= totalDuration) {
                  
                    var durationPoint = Math.abs(timePoint.getTime() - beginTime.getTime()); 

                    var percent = durationPoint / totalDuration;

                    var distanceFromStart = (bars[k].width * percent);

                    var xPos = bars[k].x + distanceFromStart;

                    return xPos;

                } 

            }
        }
    }

    //---------- Other -----------------------------------------

    function VisulizationClick(pageURL){


        //grab all timeline items and put in list
        var myNodeList = document.querySelectorAll('input[name="checks"]:checked');

        //create an empty array to hold timeline items
        var exhibitChecks = []; 

        var url = pageURL;

        for (var i = 0; i < myNodeList.length; i++) 
        {
            url = url + "&exhibit" + myNodeList[i].id + "=true";
        }

        //window.location = url;

        window.open(url, '_blank');

    }

    function parseDate(date){

            var twoHalves = date.split(" ");
            var half1 = twoHalves[0].split("-");
            var half2 = twoHalves[1].split(":");

            var joined = half1.concat(half2);

            //make javascript date date
            var jsDate = new Date(joined[2], joined[1], joined[0], joined[3], joined[4], joined[5]);

            return jsDate;
    }

    //array prototype functions to add functions to arrays
    Array.prototype.contains = function(v) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === v) return true;
        }
        return false;
    };

    Array.prototype.unique = function() {
        var arr = [];
        for(var i = 0; i < this.length; i++) {
            if(!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr; 
    }





/*//--------Timeline---------------------------

function populateTimeline(){


    for(var i=0; i < timeline.length; i++)
    {
        //add image to visual itinerary list
        $( '#timeline').append("<div class='timelineItem' draggable='true'><header>"+ titles[i] +"</header><img id='" + timeline[i] + "'' draggable='false' class='timelineImage' src='" + images[i] + "'/></div>");
        //<img class='timelineItem' draggable='true' id='" +  timeline[i] + "' src='" + images[i] + "'/>
        //<img id='" +  timeline[i] + "' src='" + images[i] + "' class='timelineImage'/>
    }
}

function addEventHandlers(){
    
    //grab all timeline items and put in list
    var myNodeList = document.querySelectorAll('#timeline .timelineItem');

    //create an empty array to hold timeline items
    timelineItems = []; 

    //store timeline items in array
    for (var i = 0; i < myNodeList.length; i++) {
        timelineItems.push(myNodeList[i]); 
    }

    //add event handlers
    for (var i = 0; i < timelineItems.length; i++) {
        timelineItems[i].addEventListener('dragstart', handleDragStart, false);
        timelineItems[i].addEventListener('dragenter', handleDragEnter, false)
        timelineItems[i].addEventListener('dragover', handleDragOver, false);
        timelineItems[i].addEventListener('dragleave', handleDragLeave, false);
        timelineItems[i].addEventListener('drop', handleDrop, false);
        timelineItems[i].addEventListener('dragend', handleDragEnd, false);
    }
}

//--------Timeline Items Drag and Drop---------------------------

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
        


        // Set the source column's HTML to the HTML of the column we dropped on.
        activeDrag.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.

    activeDrag.style.opacity = '1';

    for (var i = 0; i < timelineItems.length; i++) {
        timelineItems[i].classList.remove('over'); //error?
    };

}*/