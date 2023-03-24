//Display and joins digits together in the input box
function display(val) {
		nums = document.getElementById("text-input").value += val;
	}

// An emty list
let listNums = [];


// For '=' and display of the array (results) on web page
function calculate() {

	let saved = eval(nums)

	// If saved inludes a decimal point, shows result up to two decimal places.
	if (saved.toString().includes(".")) {
		let s = saved.toFixed(2)
		document.getElementById("text-input").value = s;
		listNums.unshift(s);
	}

	else {listNums.unshift(saved)
		saved = document.getElementById("text-input").value = saved;

	}

	document.getElementById("results").innerHTML = listNums;
}


// Clears the whole inut box to 0
function clearDisplay() {
	document.getElementById("text-input").value = "";
}

// Deletes 1 character at a time
function delOneChar() {
	var value = document.getElementById("text-input").value;
	document.getElementById("text-input").value = value.substr(0, value.length -1);
	
}