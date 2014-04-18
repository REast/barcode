// left and right hand splits of the barcode generating URL. User input string will be sandwiched in the center to get the barcode img
var strLeft = "http://www.barcodesinc.com/generator/image.php?code=";
var strRight = "&style=196&type=C128B&width=500&height=200&xres=3&font=6";

// function called whenever the user changes the text in the barcode input
var inputChanged = function () {
	var str = document.getElementById("input_box").value;
	//int len = str.length;
	
	// if the input is a valid barcode input type, fetch the corresponding barcode
	//if (len === 7 || len === 8 || len === 12 || len === 13) {
		var urlOutput = urlLeft + str + urlRight;
		document.getElementById("barcode_img").setAttribute("src", "http://www.w3schools.com/images/w3logotest2.png");
	//}
}

//This block of jQuery inserts the newly created Pirate Name into the output field
$(document).ready(function() {
	$('form #click_button').click(function(event) {
		event.preventDefault();
		var strInput = "";
		strInput = $('#input_box').val();
		var strFull = "http://www.barcodesinc.com/generator/image.php?code=" + str + "&style=196&type=C128B&width=500&height=200&xres=3&font=6" //urlLeft + str + urlRight;			
		$('#outText p').text(strFull);
		//$('#barcode_img').src("http://www.w3schools.com/images/w3logotest2.png");
	});
});