/**
 * 
 */

function showDigits(){
	
	var digitA = document.getElementById("digit-a").value;
	var digitB = document.getElementById("digit-b").value;
	var result = "";
	var notANumber = whichIsNotANumber(digitA,digitB);
	
	if (notANumber == "none") {
		if(digitA < digitB){
	    for (var i = digitA; i <= digitB; i++){
			console.log(i);
			result = result + i + " ";
		}
		document.getElementById("result").innerHTML = result;
		} else if(digitA > digitB){
			for (var i = digitA; i >= digitB; i--){
				console.log(i);
				result = result + i + " ";
			}
			document.getElementById("result").innerHTML = result;
		} else {
			alert("Provided arguments are even. Please provide uneven arguments!");
		}
	} else if (notANumber == "both"){
		alert("Provided arguments are not numbers. Please correct them!");
	} else {
		alert("The " +notANumber+ " argument is not a number. Please correct it!")
	}
}

function whichIsNotANumber(a,b){
	var isANumber = !isNaN(a);
	var isBNumber = !isNaN(b);
	var result = ""
	
	console.log(isANumber);
	console.log(isBNumber);
	
		
	if (isANumber==false && isBNumber==false){
		result="both";
	} else if (!isANumber) {
		result = "left";
	} else if (!isBNumber) {
		result = "right"
	} else {
		result = "none";
	}
	return result;	
}



