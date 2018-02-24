



	$( document ).ready(function(){
	  
        $(".fancybox").fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            padding    : 0,
            margin     : 5,
            nextEffect : 'fade',
            prevEffect : 'fade',
            autoCenter : false,
            modal : true,
            playspeed : 5000,
            autoPlay : true,
            loop : true,
            helpers : {
                title   : {
                    type: 'float'
                },
                thumbs  : {
                    width   : 50,
                    height  : 50
                }
            },
            afterLoad  : function () {
                $.extend(this, {
                    aspectRatio : false,
                    type    : 'html',
                    width   : '100%',
                    height  : '100%',
                    content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
                });
            }
        });

        populateGallery();

        $(".fancybox").eq(0).trigger('click');
	
	}); // end of document ready



    function populateGallery(){


        $( "#container" ).html( " " );


        //for each of the exhibits see...
        for(var i = 0; i < ExhibitData.exhibits.length; i++)
        {

            (function(i) {



                //----------add things

                //add the exhibit info in a container
                //$( '#container' ).append( "<div id ='topTear" + ExhibitData.titles[i].implode() + "' class='topTear'></div><div id=" + ExhibitData.titles[i].implode() + " class='container'></div>" );

                var exhibitAnchor = $('<a></a>')
                    .appendTo( '#container'  )
                    .addClass('fancybox')
                    .attr("rel", "gallery1")
                    .attr("title", ExhibitData.titles[i])
                    .attr("href", ExhibitData.images[i]);

/*                var exhibitImg = $('<img></img>')
                    .appendTo(exhibitAnchor)
                    .addClass('galleryImage')
                    .attr("alt", "")
                    .attr("src", ExhibitData.images[i]);*/


                //check to see if there is artifact info
                for(var x = 0; x < ArtifactData.exhibits.length; x++)
                {   
                    //if the exhibit numbers match
                    if(ArtifactData.exhibits[x] == ExhibitData.exhibits[i])
                    {
                        
                        var artifactAnchor = $('<a></a>')
                            .appendTo( '#container'  )
                            .addClass('fancybox')
                            .attr("rel", "gallery1")
                            .attr("title", ArtifactData.descriptions[x])
                            .attr("href", ArtifactData.images[x]);

/*                        var artifactImg = $('<img></img>')
                            .appendTo(artifactAnchor)
                            .addClass('galleryImage')
                            .attr("alt", "")
                            .attr("src", ArtifactData.images[x]);*/
                    }
                }


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

