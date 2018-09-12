define(["jquery", "../mylibs/constants"],
    function($jQ, constants) {
		console.log("inside dom");

		
		
		function colorFeedbackBox() {
			constants.theFeedbackBox.css({"background-color" : constants.theFeedbackColor});
		}
	
		function trueButtonClicked() {
			constants.theFeedbackBox.html("TRUE");
		}
		
		function falseButtonClicked() {
			constants.theFeedbackBox.html("FALSE");
		}
		
		function nextButtonClicked() {
			constants.theFeedbackBox.html("NEXT");
		}
	
		return {

			"colorFeedbackBox": colorFeedbackBox,
			"trueButtonClicked": trueButtonClicked,
			"falseButtonClicked": falseButtonClicked,
			"nextButtonClicked": nextButtonClicked

		}
	

	
	});