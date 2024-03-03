//otp generation 

var i = 1;

function generateOtp() {
	document.getElementById('otp-result').innerHTML = "Waiting for confirmation..";
	const otp = Math.floor(100000 + Math.random() * 900000);
	document.getElementById('otp').innerHTML = otp;
	document.getElementById('inc').innerHTML = i;
	i++;
}

function checkOtp() {
	var otpValue = document.getElementById('otpBox').value;
	var otp = document.getElementById('otp').innerHTML;
	if (otpValue == otp) {
		document.getElementById('otp-result').innerHTML = "Otp Successfully Verified!";
	} else {
		document.getElementById('otp-result').innerHTML = "Otp Verification Failed!";
	}
}


//function argument passing test
function testFunction() {
	let a = 5;
	let b = 10
	return a + b;
}
//console.log(testFunction());

//objects 
let userObject = {
	firstName: 'John',
	lastName: 'Doe'
};


//console.log(userObject);
//console.log(userObject.firstName + ' ' + userObject.lastName);

//array test
let userArray = ['John', 'Kevin', 'Harry'];
//console.log(userArray);
/*
for (var i = 0; i < userArray.length; i++) {
	console.log(userArray[n]);
}
*/

//string slice
let name = "Midhun";
//console.log(name.slice(0,3));

//type conversion
let ta = "10";
let tb = 15;

//console.log(typeof ta);
//console.log(typeof tb);

//console.log('----')

//console.log(typeof parseInt(ta));
//console.log(typeof tb.toString());

/*

0 1 2
3 4 5
6 7 8

winning conditions

0 1 2
3 4 5
6 7 8 

0 3 6
1 4 7
2 5 8

0 4 8
2 4 6

*/

//Tic Tac Toe Game Code

var displayResult = document.getElementById('result-1');

function checkResult() {

	var box0 = document.getElementById('box-0').value;
	var box1 = document.getElementById('box-1').value;
	var box2 = document.getElementById('box-2').value;
	var box3 = document.getElementById('box-3').value;
	var box4 = document.getElementById('box-4').value;
	var box5 = document.getElementById('box-5').value;
	var box6 = document.getElementById('box-6').value;
	var box7 = document.getElementById('box-7').value;
	var box8 = document.getElementById('box-8').value;

	//Capital O
	if (box0 == 'O' && box1 == 'O' && box2 == 'O') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box3 == 'O' && box4 == 'O' && box5 == 'O') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box6 == 'O' && box7 == 'O' && box8 == 'O') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}

	if (box0 == 'O' && box3 == 'O' && box6 == 'O') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box1 == 'O' && box4 == 'O' && box7 == 'O') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box2 == 'O' && box5 == 'O' && box8 == 'O') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}

	if (box0 == 'O' && box4 == 'O' && box8 == 'O') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box2 == 'O' && box4 == 'O' && box6 == 'O') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}

	//Small o  
	if (box0 == 'o' && box1 == 'o' && box2 == 'o') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box3 == 'o' && box4 == 'o' && box5 == 'o') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box6 == 'o' && box7 == 'o' && box8 == 'o') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}

	if (box0 == 'o' && box3 == 'o' && box6 == 'o') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box1 == 'o' && box4 == 'o' && box7 == 'o') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box2 == 'o' && box5 == 'o' && box8 == 'o') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}

	if (box0 == 'o' && box4 == 'o' && box8 == 'o') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}
	if (box2 == 'o' && box4 == 'o' && box6 == 'o') {
		document.getElementById('result-1').innerHTML = 'O Won!';
	}

	//Capital X
	if (box0 == 'X' && box1 == 'X' && box2 == 'X') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box3 == 'X' && box4 == 'X' && box5 == 'X') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box6 == 'X' && box7 == 'X' && box8 == 'X') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}

	if (box0 == 'X' && box3 == 'X' && box6 == 'X') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box1 == 'x' && box4 == 'X' && box7 == 'X') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box2 == 'X' && box5 == 'X' && box8 == 'X') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}

	if (box0 == 'X' && box4 == 'X' && box8 == 'X') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box2 == 'X' && box4 == 'X' && box6 == 'X') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}

	//Small x
	if (box0 == 'x' && box1 == 'x' && box2 == 'x') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box3 == 'x' && box4 == 'x' && box5 == 'x') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box6 == 'x' && box7 == 'x' && box8 == 'x') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}

	if (box0 == 'x' && box3 == 'x' && box6 == 'x') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box1 == 'x' && box4 == 'X' && box7 == 'X') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box2 == 'x' && box5 == 'x' && box8 == 'x') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}

	if (box0 == 'x' && box4 == 'x' && box8 == 'x') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}
	if (box2 == 'x' && box4 == 'x' && box6 == 'x') {
		document.getElementById('result-1').innerHTML = 'X Won!';
	}

}

setInterval(checkResult, 700);