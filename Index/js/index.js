	  	

      function resetSystem(){

	  		    //delete all rows from table 
          $.ajax({
            url: "Index/php/index.php",
            type: "post",
            data: {"museum": 1},
            success: function(data, status) {

            	alert("System successfully reset and ready for testing.");

            },
            error: function(xhr, desc, err) {
              console.log(xhr);
              console.log("Details: " + desc + "\nError:" + err);
              alert("There has been an error in reseting the system for testing.");
            }
          }); // end ajax call

	  	}