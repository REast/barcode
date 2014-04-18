var strLeft = "aaaaaa";
var strRight = "cccccc"; 

$(document).ready(function() {
	$('form #click_button').click(function(event) {
		event.preventDefault();
		var strInput = "";
		strInput = $('#input_box').val();
		var strFull = strLeft + str + strRight;		
		$('#outText').text('strFull');
	});
});