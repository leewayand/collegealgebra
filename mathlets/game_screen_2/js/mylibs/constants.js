define(["jquery"],
    function($jQ) {
		console.log("inside constants");
	
	
		var theFeedbackBox = $jQ("#theMiddleFeedbackBox");
		var theFeedbackColor = "#aa00aa";
		
		var theTrueButton = $jQ("#theTrueButton");
		var theFalseButton = $jQ("#theFalseButton");
		var theNextButton = $jQ("#theNextButton");

	
	
		return {
		
			"theFeedbackBox": theFeedbackBox,
			"theFeedbackColor": theFeedbackColor,
			
			"theTrueButton": theTrueButton,
			"theFalseButton": theFalseButton,
			"theNextButton": theNextButton
		
		}
	

	
	});