
var artifacts;
var activeArtifact;

var userComment;

$(document).ready(function(){
	
	//fancybox behaviour
	$(".fancybox").fancybox();

	//default image map behaviour
	$('.map').maphilight();

	populateCamera();

	for(var i = 0; i < Artifact.information.length; i++)
	{
		//for each artifact in the exhibit create the handler
		$("#" + i ).click(artifactClick);
	}

	$("#cameraIcon").click(cameraIconClick);
	//$("#cameraIcon").hover(cameraIconHover);
	$("#backToMuseum").click(backToMuseum);

});

//------------------- Button Handlers 

function artifactClick(e){

	activeArtifact = this.id;

	//display artifact picture
	$("#panel").html("<img src='" + Artifact.image[activeArtifact] + "' />");
	//display artifact information
	$("#panel").append("<p>" + Artifact.information[activeArtifact] + "</p>");



	e.preventDefault();

	var data = $("#" + this.id).mouseout().data("maphilight") || {};

	//if it's already on we turn it off
	if(data.alwaysOn == true )
	{
		data.alwaysOn = false;
	    $("#" + this.id).data("maphilight", data).trigger("alwaysOn.maphilight");
	}
	//turn them all off and then the clicked one on
	else
	{
		//turn them all off
		for(var i = 0; i < Artifact.information.length; i++)
		{
			var data = $("#" + i).mouseout().data("maphilight") || {};

		    data.alwaysOn = false;
		    $("#" + i).data("maphilight", data).trigger("alwaysOn.maphilight");

		}
		//turn clicked one on
		var data = $("#" + this.id).mouseout().data("maphilight") || {};
	    data.alwaysOn = true;
	    $("#" + this.id).data("maphilight", data).trigger("alwaysOn.maphilight");
	}

}

function backToMuseum(e){

	var visitEnd = getDateTime();


	//TODO: should probably do this in the SQL
    //figure out highest exhibitnumber so we alter the latest entry relating to this exhibit (and leave previous visits to same exhibit untouched)

    var maxVisitNumber = 0;

    for(var i = 0; i < VisitData.visitNumber.length; i++)
    {
    	if(VisitData.visitNumber[i] > maxVisitNumber)
    	{
    		maxVisitNumber = VisitData.visitNumber[i];
    	}
    }

	//add exhibit vist end time to exhibit database
    $.ajax({
      url: "ExhibitGen/php/updateExhibitVisits.php",
      type: "post",
      data: {"Museum": museumNumber, "Exhibit":exhibitNumber, "VisitNum": maxVisitNumber,  "VisitEnd": visitEnd},
      success: function(data, status) {
      	
      	window.location = "MuseumGen.php?museum=" + museumNumber;

      },
      error: function(xhr, desc, err) {
        console.log(xhr);
        console.log("Details: " + desc + "\nError:" + err);
      }
    }); // end ajax call  
}

//-----------------Camera and User Data

function cameraIconClick(e){
	
	//-------check to see if already added or not

	//grab all timeline items and put in list
    var myNodeList = document.querySelectorAll('#camera .cameraItem');

    //create an empty array to hold timeline items
    var cameraItems = []; 

    //store timeline items in array
    for (var i = 0; i < myNodeList.length; i++) {
        cameraItems.push(myNodeList[i]); 
    }

    for (var i = 0; i < cameraItems.length; i++) {

        //if the src of an item is equal to the src of selected artifact
        if(cameraItems[i].id == activeArtifact)
        {
        	alert("you already have this photograph");
        	return;
        } 
    }

    //--------popup and input

    //popup
    $.fancybox.open(
    	[{
	        href : Artifact.image[activeArtifact],
	    	openEffect	: 'elastic',
	    	closeEffect	: 'elastic',
	    	'width'  : 600,           // set the width
		    'height' : 800,           // set the height
		    'type'   : 'iframe', 
		    afterLoad   : function() {
		        this.inner.prepend( '<div id=popupForm><h2 id="popupTitle">Write any comments or notes you have here</h2><textarea cols="50" rows="3" id="popupComment"></textarea><div id=popupSubmit class="button" onClick="addCameraItem()">Enter</div></div>');
		    },
		    afterClose : function() {
		        
		    }
	    }], 
		{
    		padding : 0   
		}
	);

}

function addCameraItem(){


	//take user comment
	userComment = $("#popupComment").val()

	if(userComment == null)
	{
		userComment = " ";
	} 

	$.fancybox.close();

    //add photo and comment to cameraList

    //add the image
	$("#camera").append("<a class='fancybox' href='" + Artifact.image[activeArtifact] + "' title='" + userComment + "'><img id='" + activeArtifact + "' class='cameraItem' src='" + Artifact.image[activeArtifact] + "'/></a>");

	//add to arrays
	UserData.number.push(activeArtifact); 
    UserData.image.push(Artifact.image[activeArtifact]);
    UserData.comment.push( userComment );

    var timestamp = getDateTime();

    $.ajax({
      url: "ExhibitGen/php/inputArtifactDatabase.php",
      type: "post",
      data: {"Museum": museumNumber, "ExhibitNumber": exhibitNumber, "ArtifactNumber": activeArtifact, "UserImage": Artifact.image[activeArtifact], "UserComment" : userComment, "ArtifactInfo" : Artifact.information[activeArtifact], "Timestamp" : timestamp},
      success: function(data, status) {

      },
      error: function(xhr, desc, err) {
        console.log(xhr);
        console.log("Details: " + desc + "\nError:" + err);
      }
    }); // end ajax call  

}

function populateCamera(){

	for(var i=0; i < UserData.image.length; i++)
	{
		$("#camera").append("<a class='fancybox' href='" + Artifact.image[i] + "' title='" + userComment + "'><img id='" + i + "' class='cameraItem' src='" + Artifact.image[i] + "'/></a>");


	}
}

//-----------------Utility--------------------------

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