//otp generation 

var i = 1;
function generateOtp() {
	//	import { randomInt } from "crypto";
	//const otp = randomInt(10000, 1000000);
	const otp = Math.floor(100000 + Math.random() * 900000);
	console.log(otp);
	document.getElementById('otp').innerHTML = otp;
	document.getElementById('inc').innerHTML = i;
	i++;
}
setInterval(generateOtp, 888);