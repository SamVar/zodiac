function ckeckYear() {
	let textField = document.getElementById("textID");
	let result = document.getElementById("result");
	let year = textField.value;
	let yearInput = year;

	if (isNaN(year)) {
		alert("Not a valid year");
		textField.value = "";
	}

	function sign(year) {
		if (year == 1984) {
			yearSign = "RAT";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐀";
		} else if (year == 1985) {
			yearSign = "OX";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐮";
		} else if (year == 1986) {
			yearSign = "TIGER";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐅";
		} else if (year == 1987) {
			yearSign = "RABBIT";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐰";
		} else if (year == 1988) {
			yearSign = "DRAGON";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐲";
		} else if (year == 1989) {
			yearSign = "SNAKE";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐉";
		} else if (year == 1990) {
			yearSign = "HORSE";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐎";
		} else if (year == 1991) {
			yearSign = "SHEEP";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐑";
		} else if (year == 1992) {
			yearSign = "MONKEY";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐵";
		} else if (year == 1993) {
			yearSign = "ROOSTER";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐓";
		} else if (year == 1994) {
			yearSign = "DOG";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐶";
		} else if (year == 1995) {
			yearSign = "PIG";
			result.innerHTML = yearInput + " is a year of the " + yearSign + "\n🐖";
		}
	}

	if (year > 1995) {
		while (year > 1995) {
			year -= 12;
		}
		sign(year);
	} else if (year < 1984) {
		while (year < 1984) {
			year = parseInt(year) + parseInt(12);
		}
		sign(year);
	} else {
		sign(year);
	}

	result.style.fontSize = "1.3rem";
	result.style.marginBottom = "3%";
}

function startOver() {
	let textField = document.getElementById("textID");
	let result = document.getElementById("result");
	result.innerHTML = "";
	textField.value = "";
}
