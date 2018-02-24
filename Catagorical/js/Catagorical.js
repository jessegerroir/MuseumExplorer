(function($){//encapsulates the code

    var menuHeight = 150;

    var uniqueTypes;

    //TODO: should re-write this so it isn't hardcoded this way
    typeColour = []
    typeColour[0] = "#f4d432";
    typeColour[1] = "#0099cc";
    typeColour[2] = "#9ed846";

	$( document ).ready(function(){

        //find out how many unique musuem types there are (stores unique memebers in array)
        uniqueTypes = ExhibitData.type.unique();

        createMenuItems();

        // Scrolls the menu bar when you scroll through the document
        $(window).scroll(function() {
            scrollVertical();
        });
	
	}); // end of document ready

    function createMenuItems(){

        //create exhibit catagory menu items

        $( "#menuItems1" ).html( " " );


        //for each unique exhibit type
        for(var i = 0; i < uniqueTypes.length; i++)
        {

            (function(i) {

                $("#menuItems1").append( "<li class='category' id='" + uniqueTypes[i].implode() + "'><a href=#" + uniqueTypes[i].implode() + ">" + uniqueTypes[i] + "</a></li>" );

                //reference the added button
                var button = $("#" + uniqueTypes[i].implode());

                button.click(function(e) {

                    exhibitTypeClick(e, i, button);
                });

            }(i));
        }

        //creates submenu based off active exhibit type
        exhibitTypeActive(0);


    }

    function exhibitTypeActive(typeIndex){

        $( "#containers" ).html( " " );
        $( "#menuItems2" ).html( " " );

        var first = true;


        //add title page for exhibits
        if(uniqueTypes[typeIndex] == "Mammals")
        {
            $( '#containers' ).append( "<div id='MammalTitle'><h1>Mammals</h1><img class='exhibitImg' src='Media/museum1/museum/mammals.jpg'></img><p>All mammals have evolved from marine ancestors, but most of them now live in terrestrial habitats. Mammals show an interesting diversity of shapes, sizes and lifestyles. They include cetaceans such as whales and dolphins, and carnivores such as bears, marine animals such as sea otters, seals, seas lions and walruses. Some mammals are herbivore's like cattle, and thin horn sheep, and other mammals like dogs and cats have even been domesticated.</p></div>" );      
        }
            
        if(uniqueTypes[typeIndex] == "Rocks and Space")
        {
            $( '#containers' ).append( "<div id='RocksTitle'><h1>Rocks and Space</h1><img class='exhibitImg' src='Media/museum1/museum/earth.png'></img><p>Earth-born of a spinning cloud of dust within a boundless universe. From its beginnings as a sea of molten rock, Earth has unceasingly transformed itself into the vast expanse of water dotted with continents that makes up our planet today.</p><p>Earth and Life: Life appeared on Earth 3.8 billion years ago, out of seemingly uninhabitable environment. Since then life has flourished and transformed our planet.</p><p>Earth provides for life. Its particular chemical and physical conditions allowed life to appear and continue to allow it to thrive.</p><p>The appearance of life in the universe requires a specific mix of favorable conditions. Earth has just the right combination of qualities. It is close enough to the sun to keep water liquid, and far enough to prevent the water from evaporating away.</p></div>" );
        }                     
            
        if(uniqueTypes[typeIndex] == "Water")
        {
            $( '#containers' ).append( "<div id='WaterTitle'><h1>Water</h1><img class='exhibitImg' src='Media/museum1/museum/blueEarth.png'></img><p>Viewed from space, our planet&#39s most valuable substance shines bright blue. The Earth&#39s richness in water is the main reason why our home is teeming with life.</p><p>Water is a very common substance in our solar system. Many planets, moons, and comets are thought to contain water, mostly as ice and vapour. But as far as we know, Earth is the only planet with large quantities of liquid water.</p><p>This section contains all the water exhibits that you visited.</p></div>" );
        }                     

        //for each of the exhibits see...
        for(var i = 0; i < ExhibitData.exhibits.length; i++)
        {

            (function(i) {

                //..if it is of that type
                if(ExhibitData.type[i] == uniqueTypes[typeIndex])
                {

                    //ADD EXHIBIT MENU  BUTTON AND CONENT

                    //Add a button in submenu for exhibit 
                    $("#menuItems2").append( "<li class='category' id='" + ExhibitData.titles[i].implode() + "Button'><a href=#" + ExhibitData.titles[i].implode() + ">" + ExhibitData.titles[i] + "</a></li>" );

                    //save refrences to button 
                    var button =  $("#" + ExhibitData.titles[i].implode() + "Button");

                    //Now add the exhibit info in a container
                    $( '#containers' ).append( "<div id=" + ExhibitData.titles[i].implode() + " class='container'><h1>" + ExhibitData.titles[i] + "</h1><img class='exhibitImg' src=" + ExhibitData.images[i] + "></img><div id='" + ExhibitData.titles[i].implode() + "infoContainer' class='infoContainer'></div></div>" );
                    
                    var container =  $("#" + ExhibitData.titles[i].implode() );


                    var infoContainer =  $("#" + ExhibitData.titles[i].implode() + "infoContainer");

                    //EXHIBIT MENU STUFF

                    //if it's the first added button make it active
                    if(first)
                    {
                        first=false;
                        button.toggleClass('active');
                    }

                    //add the click event
                    button.click(function(e) {
                        exhibitClick(e, typeIndex, container, button);
                    });

                    //EXHIBIT CONTAINER AND CONTENT

                    //set background colour of container
                    if(uniqueTypes[typeIndex] == "Mammals")
                        container.css("background-color", "#b29600");
                    if(uniqueTypes[typeIndex] == "Rocks and Space")
                        container.css("background-color", "#7F9A65");
                    if(uniqueTypes[typeIndex] == "Water")
                        container.css("background-color", "#0099cc");

                    //ARTIFACT CONTENT

                    var atifact = false;

                    //check to see if there is artifact info
                    for(var x = 0; x < ArtifactData.exhibits.length; x++)
                    {   
                        //if the exhibit numbers match
                        if(ArtifactData.exhibits[x] == ExhibitData.exhibits[i])
                        {
                            infoContainer.append("<div class='artifactsContainer'><img class='artifactImg' src=" + ArtifactData.images[x] + "><div class='artifactInfo'>" + ArtifactData.infomation[x] + "</div></div>");
                            artifact = true;
                        }
                    }

                    if(atifact == false)
                    {
                        //loop through the additional info
                        for(var x = 0; x < AdditionalInfo.exhibits.length; x++)
                        {   
                            //when find the right info add it
                            if(AdditionalInfo.exhibits[x] == ExhibitData.exhibits[i])
                            {
                                infoContainer.append("<div class='additionalInfo'><p>" + AdditionalInfo.information[x] + "<p><br><p>Learn more here: <a href='"+ AdditionalInfo.weblink[x] + "'>" + AdditionalInfo.weblink[x] + "<a/></p></div>");
                            }
                        }
                    }

                }

            }(i));
        }

        //scroll page to top
        $( document ).scrollTop(0);
    }

    function exhibitTypeClick(e, type, button){
        e.preventDefault();
        var button = e.target;
        slideSlider(button, type, "#knobType", "#beforeType");
        exhibitTypeActive(type);
    }

    function exhibitClick(e, type, container, button){
        e.preventDefault();
        slideSlider(button, type, "#knobExhibit", "#beforeExhibit");


        //scroll the page to the corresponding container 
        $('html, body').animate({ scrollTop: container.offset().top - 50}, 400);

    }

    function slideSlider(button, typeIndex, knob, beforeBar){
        
        //move the knob to the right location
        var left = $(button).position().left +  ($(button).outerWidth(true) / 2) - ($(knob).outerWidth(true) / 2);
        $(knob).css("left", left);

        //change the background colour and length of before bar
        $(beforeBar).css("width", left + 20);

        //set background colour of container
        if(uniqueTypes[typeIndex] == "Mammals")
             $(".menu .slider .bar .before").css("background-color", "#b29600");
        if(uniqueTypes[typeIndex] == "Rocks and Space")
             $(".menu .slider .bar .before").css("background-color", "#7F9A65");
        if(uniqueTypes[typeIndex] == "Water")
             $(".menu .slider .bar .before").css("background-color", "#0099cc");
    }

    //this function changes sets the liste items to active as you scroll through the page
    function scrollVertical(){

        //the positoin of the top of the window in the document
        var top = $(window).scrollTop() + menuHeight; // Take into account height of fixed menu

        //for each container
        $(".container").each(function() {
            
            //where the top of the container is relative to the document
            var c_top = $(this).offset().top;

            //where the bottom of the container is relative to the document
            var c_bot = c_top + $(this).height();

            //get the id of the container
            var id = $(this).attr("id");



            //grab corresponding button 
            var li_tag = $("#" + id + "Button");
            
            //if the position of the top of the document is between the current contaier top and bottom
            if ((top > c_top) && (top < c_bot)) 
            {
                //if it's already active do nothing
                if (li_tag.hasClass("active")) 
                {
                    return false;
                }
                else 
                {
                    //if it's not active then make that list item 
                    li_tag.siblings().andSelf().removeClass("active");
                    li_tag.addClass("active");


                    //slide the slider
                    //TODO: get type index based on background colour? There has to be a better way of doing this.
                    var typeIndex = typeColour.indexOf($(this).css('background-color'));

                    slideSlider(li_tag, typeIndex, "#knobExhibit", "#beforeExhibit");  
                }
            }
        });
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

    String.prototype.implode = function() {
        var str = this
        
        str = str.replace(/\s+/g, '');

        return str; 
    }


})(jQuery); // end of jQuery name space