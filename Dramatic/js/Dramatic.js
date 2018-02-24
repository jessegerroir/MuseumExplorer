(function($){//encapsulates the code


	$( document ).ready(function(){
	  
        formatHeader();
        reorderArrays();
        createContainers();
        formatFooter();

	
	}); // end of document ready

    function reorderArrays(){

        var newArray1 = [];
        var newArray2 = [];
        var newArray3 = [];
        var newArray4 = [];
        var newArray5 = [];
        var newArray6 = [];
        var newArray7 = [];
        var newArray8 = [];

        for(var j = 0; j < ExhibitData.exhibits.length; j++)
        {

            for(var k = 0; k < DramaticData.exhibits.length; k++)
            {
                if(ExhibitData.exhibits[j] == DramaticData.exhibits[k])
                {
                    newArray1.push(DramaticData.exhibits[k]);
                    newArray2.push(DramaticData.background[k]);
                    newArray3.push(DramaticData.tear[k]);
                    newArray4.push(DramaticData.splash[k]);
                    newArray5.push(DramaticData.favouredArtifactThere[k]);
                    newArray6.push(DramaticData.favouredArtifactAbsent[k]);
                    newArray7.push(DramaticData.favouredArtifactNumber[k]);
                    newArray8.push(DramaticData.averageTime[k]);

                }
            }

        }

        DramaticData.exhibits = newArray1;
        DramaticData.background = newArray2;
        DramaticData.tear = newArray3;
        DramaticData.splash = newArray4;
        DramaticData.favouredArtifactThere = newArray5;
        DramaticData.favouredArtifactAbsent = newArray6;
        DramaticData.favouredArtifactNumber = newArray7;
        DramaticData.averageTime = newArray8;
    }

    function formatHeader(){

        $( "#visitHeader" ).html( " " );
        var date = parseDate(ExhibitData.dates[0]);
        $( "#visitHeader" ).html( "<h1>Visted on " + date.toLocaleDateString() + "</h1>");
    }

    function formatFooter(){

        $( "#visitFooter" ).html( " " );
        $( "#visitFooter" ).html( "<h1>You visited " + ExhibitData.exhibits.length + " out of 10 Exibits</h1>");
        //$( "#visitHeader" ).append( "<h1>You took photos of" + ArtifactData.exhibits.length + " out of 10 Exibits</h1>");
    }

    function createContainers(){

        $( "#containers" ).html( " " );


        //for each of the exhibits see...
        for(var i = 0; i < ExhibitData.exhibits.length; i++)
        {

            (function(i) {

                //add the exhibit info in a container
                $( '#containers' ).append( "<div id ='topTear" + ExhibitData.titles[i].implode() + "' class='topTear'></div><div id=" + ExhibitData.titles[i].implode() + " class='container'></div>" );
                
                var container =  $("#" + ExhibitData.titles[i].implode());

                //add the exhibit title and image
                container.append( "<h1>" + ExhibitData.titles[i] + "</h1><img class='exhibitImg' src=" + ExhibitData.images[i] + "><img class='splash' src=" + DramaticData.splash[i] + "></img>" )
                //add polaroid container
                container.append( "<div id='polaroids" + ExhibitData.titles[i].implode() + "' class='polaroids'></div>")
                //add info container
                container.append( "<div id='info" + ExhibitData.titles[i].implode() + "' class='info'></div>" )


                var count = 0;
                var added = false;

                //add artifacts
                for(var x=0; x < ArtifactData.exhibits.length; x++)
                {

                    count++;

                    //if the artifact is in the exhibit add it
                    if(ArtifactData.exhibits[x] == ExhibitData.exhibits[i])
                    {
                        $("#polaroids"  + ExhibitData.titles[i].implode()).append("<div class='polaroid'><img class='artifactImg' src=" + ArtifactData.images[x] + "><span>" + ArtifactData.descriptions[x] + "</span></div>");
                        $("#info"  + ExhibitData.titles[i].implode()).append("<p>" + ArtifactData.information[x] + "</p><br>");

                        //if the artifact is also the favoured artifact add comment
                        if(ArtifactData.artifactNumber[x] == DramaticData.favouredArtifactNumber[i] )
                        {
                            added= true;
                            $("#polaroids"  + ExhibitData.titles[i].implode()).append("<p>" + DramaticData.favouredArtifactThere[i] + "</p>");
                        }

                    }    
                    
                }

                //add blanks
                while(count <= ExhibitData.maxArtifacts[i])
                {
                    count++;

                    $("#polaroids"  + ExhibitData.titles[i].implode()).append("<div class='blankSpot'><span></span></div>");

                }

                                //add absent comment if the there one wasn't added
                if(added == false)
                    $("#polaroids"  + ExhibitData.titles[i].implode()).append("<p>" + DramaticData.favouredArtifactAbsent[i] + "</p>");

                //Add tear and background images

                var tear =  $("#topTear" + ExhibitData.titles[i].implode());

                //set background colour of container
                container.css("background-image" , "url(" + DramaticData.background[i] + ")");

                //set top tear
                tear.css("background-image" , "url(" + DramaticData.tear[i] + ")");





            }(i));
        }

    }


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