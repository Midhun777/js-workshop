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
