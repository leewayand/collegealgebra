define(["jquery", "../mylibs/constants"],
    function($jQ, constants) {
		console.log("inside feedback");
	
		feedhtml = function(string) {
			constants.theFeedbackBox.html(string);
		}
	
	
	
	
		return {

			"feedhtml": feedhtml
		
		}
	

	
	});