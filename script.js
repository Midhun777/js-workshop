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

	var resultText = document.getElementById('result-1');

	//Capital O
	if (box0 == 'O' && box1 == 'O' && box2 == 'O') {
		resultText.innerHTML = 'O Won!';
	}
	if (box3 == 'O' && box4 == 'O' && box5 == 'O') {
		resultText.innerHTML = 'O Won!';
	}
	if (box6 == 'O' && box7 == 'O' && box8 == 'O') {
		resultText.innerHTML = 'O Won!';
	}

	if (box0 == 'O' && box3 == 'O' && box6 == 'O') {

		resultText.innerHTML = 'O Won!';
	}
	if (box1 == 'O' && box4 == 'O' && box7 == 'O') {
		resultText.innerHTML = 'O Won!';
	}
	if (box2 == 'O' && box5 == 'O' && box8 == 'O') {
		resultText.innerHTML = 'O Won!';
	}

	if (box0 == 'O' && box4 == 'O' && box8 == 'O') {
		resultText.innerHTML = 'O Won!';
	}
	if (box2 == 'O' && box4 == 'O' && box6 == 'O') {
		resultText.innerHTML = 'O Won!';
	}

	//Small o  
	if (box0 == 'o' && box1 == 'o' && box2 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box3 == 'o' && box4 == 'o' && box5 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box6 == 'o' && box7 == 'o' && box8 == 'o') {
		resultText.innerHTML = 'O Won!';
	}

	if (box0 == 'o' && box3 == 'o' && box6 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box1 == 'o' && box4 == 'o' && box7 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box2 == 'o' && box5 == 'o' && box8 == 'o') {
		resultText.innerHTML = 'O Won!';
	}

	if (box0 == 'o' && box4 == 'o' && box8 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box2 == 'o' && box4 == 'o' && box6 == 'o') {
		resultText.innerHTML = 'O Won!';
	}

	//Capital X
	if (box0 == 'X' && box1 == 'X' && box2 == 'X') {
		resultText.innerHTML = 'X Won!';
	}
	if (box3 == 'X' && box4 == 'X' && box5 == 'X') {

		resultText.innerHTML = 'X Won!';
	}
	if (box6 == 'X' && box7 == 'X' && box8 == 'X') {
		resultText.innerHTML = 'X Won!';
	}

	if (box0 == 'X' && box3 == 'X' && box6 == 'X') {

		resultText.innerHTML = 'X Won!';
	}
	if (box1 == 'x' && box4 == 'X' && box7 == 'X') {
		resultText.innerHTML = 'X Won!';
	}
	if (box2 == 'X' && box5 == 'X' && box8 == 'X') {
		resultText.innerHTML = 'X Won!';
	}

	if (box0 == 'X' && box4 == 'X' && box8 == 'X') {
		resultText.innerHTML = 'X Won!';
	}
	if (box2 == 'X' && box4 == 'X' && box6 == 'X') {
		resultText.innerHTML = 'X Won!';
	}

	//Small x
	if (box0 == 'x' && box1 == 'x' && box2 == 'x') {
		resultText.innerHTML = 'X Won!';
	}
	if (box3 == 'x' && box4 == 'x' && box5 == 'x') {
		resultText.innerHTML = 'X Won!';
	}
	if (box6 == 'x' && box7 == 'x' && box8 == 'x') {
		resultText.innerHTML = 'X Won!';
	}

	if (box0 == 'x' && box3 == 'x' && box6 == 'x') {
		resultText.innerHTML = 'X Won!';
	}
	if (box1 == 'x' && box4 == 'X' && box7 == 'X') {
		resultText.innerHTML = 'X Won!';
	}
	if (box2 == 'x' && box5 == 'x' && box8 == 'x') {
		resultText.innerHTML = 'X Won!';
	}

	if (box0 == 'x' && box4 == 'x' && box8 == 'x') {
		resultText.innerHTML = 'X Won!';
	}
	if (box2 == 'x' && box4 == 'x' && box6 == 'x') {
		resultText.innerHTML = 'X Won!';
	}

}

function reset() {

	var box0 = document.getElementById('box-0');
	var box1 = document.getElementById('box-1');
	var box2 = document.getElementById('box-2');
	var box3 = document.getElementById('box-3');
	var box4 = document.getElementById('box-4');
	var box5 = document.getElementById('box-5');
	var box6 = document.getElementById('box-6');
	var box7 = document.getElementById('box-7');
	var box8 = document.getElementById('box-8');

	box0.value = "";
	box1.value = "";
	box2.value = "";
	box3.value = "";
	box4.value = "";
	box5.value = "";
	box6.value = "";
	box7.value = "";
	box9.value = "";
}

// setInterval(checkResult, 700);

/*


// Initialize the board
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Function to print the board
function printBoard() {
  console.log('  0 1 2');
  for (let i = 0; i < 3; i++) {
    let row = i + ' ';
    for (let j = 0; j < 3; j++) {
      row += board[i][j] + ' ';
    }
    console.log(row);
  }
}

// Function to check if a player has won
function checkWin(player) {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if ((board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
        (board[0][i] === player && board[1][i] === player && board[2][i] === player)) {
      return true;
    }
  }
  // Check diagonals
  if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
      (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
    return true;
  }
  return false;
}

// Function to check if the board is full
function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}

// Function for computer's move
function computerMove() {
  let row, col;
  do {
    row = Math.floor(Math.random() * 3);
    col = Math.floor(Math.random() * 3);
  } while (board[row][col] !== '');
  board[row][col] = 'O';
}

// Function to play the game
function playGame() {
  let currentPlayer = 'X';

  while (true) {
    printBoard();
    let row, col;
    if (currentPlayer === 'X') {
      // Player's move
      console.log('Player\'s turn (X)');
      row = parseInt(prompt('Enter row (0, 1, or 2):'));
      col = parseInt(prompt('Enter column (0, 1, or 2):'));
    } else {
      // Computer's move
      console.log('Computer\'s turn (O)');
      computerMove();
    }

    // Check if move is valid
    if (board[row][col] !== '') {
      console.log('Invalid move. Try again.');
      continue;
    }

    // Make the move
    board[row][col] = currentPlayer;

    // Check for win
    if (checkWin(currentPlayer)) {
      printBoard();
      console.log(`${currentPlayer} wins!`);
      break;
    }

    // Check for tie
    if (isBoardFull()) {
      printBoard();
      console.log('It\'s a tie!');
      break;
    }

    // Switch players
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
}

// Start the game
playGame();

*/

//javascript user input
/*
let username = window.prompt('Enter the name');

console.log(username);
*/

//Javascript Math Functions

/*

let x = 3.14;
let y = 7;

let round = Math.round(x);
let ceil = Math.ceil(x)
let floor = Math.floor(x);
let abs = Math.abs(x);
let trunc = Math.trunc(x);
let max = Math.max(x, y);
let sqrt = Math.sqrt(y);
let pow = Math.pow(x,y);
let sign = Math.sign(x);

console.log(round);
console.log(ceil);
console.log(floor);
console.log(abs);
console.log(trunc);
console.log(max);
console.log(sqrt);
console.log(pow);
console.log(sign);

*/