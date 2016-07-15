// make a grid from divs in html
var mainDiv = document.getElementById('mainDiv');
var whoseTurn = 'x';

// assign a variable to each div grid space
var eiffel = '<img src="http://icons.iconarchive.com/icons/icons8/windows-8/128/Travel-Eiffel-Tower-icon.png">';
var ball = '<img src="https://cdn4.iconfinder.com/data/icons/ball-sports-1/28/soccer-ball-128.png">';
var heart = '<img src="http://icons.iconarchive.com/icons/designbolts/free-valentine-heart/128/Heart-icon.png">';

// click alternates pictures (X/O) for two players to take turns
mainDiv.addEventListener('click', function(event) {
  if (whoseTurn === 'x') {
    // click on div inserts a picture
    event.target.innerHTML = eiffel;
    checkWinner();
    whoseTurn = 'o';
  } else {
    event.target.innerHTML = ball;
    checkWinner();
    whoseTurn = 'x';
  }
})

// determine when winning combinations occur
function checkWinner() {
  if (
    document.getElementById('d1').innerHTML ==  eiffel &&
    document.getElementById('d2').innerHTML ==  eiffel &&
    document.getElementById('d3').innerHTML ==  eiffel) {
      // make an event when a player wins
    document.getElementById("d1").innerHTML = heart;
    document.getElementById("d2").innerHTML = heart;
    document.getElementById("d3").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d1').innerHTML ==  ball &&
    document.getElementById('d2').innerHTML ==  ball &&
    document.getElementById('d3').innerHTML ==  ball) {
    document.getElementById("d1").innerHTML = heart;
    document.getElementById("d2").innerHTML = heart;
    document.getElementById("d3").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d4').innerHTML ==  eiffel &&
    document.getElementById('d5').innerHTML ==  eiffel &&
    document.getElementById('d6').innerHTML ==  eiffel) {
    document.getElementById("d4").innerHTML = heart;
    document.getElementById("d5").innerHTML = heart;
    document.getElementById("d6").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d4').innerHTML ==  ball &&
    document.getElementById('d5').innerHTML ==  ball &&
    document.getElementById('d6').innerHTML ==  ball) {
    document.getElementById("d4").innerHTML = heart;
    document.getElementById("d5").innerHTML = heart;
    document.getElementById("d6").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d7').innerHTML ==  eiffel &&
    document.getElementById('d8').innerHTML ==  eiffel &&
    document.getElementById('d9').innerHTML ==  eiffel) {
    document.getElementById("d7").innerHTML = heart;
    document.getElementById("d8").innerHTML = heart;
    document.getElementById("d9").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d7').innerHTML ==  ball &&
    document.getElementById('d8').innerHTML ==  ball &&
    document.getElementById('d9').innerHTML ==  ball) {
    document.getElementById("d7").innerHTML = heart;
    document.getElementById("d8").innerHTML = heart;
    document.getElementById("d9").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d1').innerHTML ==  eiffel &&
    document.getElementById('d4').innerHTML ==  eiffel &&
    document.getElementById('d7').innerHTML ==  eiffel) {
    document.getElementById("d1").innerHTML = heart;
    document.getElementById("d4").innerHTML = heart;
    document.getElementById("d7").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d1').innerHTML ==  ball &&
    document.getElementById('d4').innerHTML ==  ball &&
    document.getElementById('d7').innerHTML ==  ball) {
    document.getElementById("d1").innerHTML = heart;
    document.getElementById("d4").innerHTML = heart;
    document.getElementById("d7").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d2').innerHTML == eiffel &&
    document.getElementById('d5').innerHTML == eiffel &&
    document.getElementById('d8').innerHTML == eiffel) {
    document.getElementById("d2").innerHTML = heart;
    document.getElementById("d5").innerHTML = heart;
    document.getElementById("d8").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d2').innerHTML == ball &&
    document.getElementById('d5').innerHTML == ball &&
    document.getElementById('d8').innerHTML == ball) {
    document.getElementById("d2").innerHTML = heart;
    document.getElementById("d5").innerHTML = heart;
    document.getElementById("d8").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d3').innerHTML == eiffel &&
    document.getElementById('d6').innerHTML == eiffel &&
    document.getElementById('d9').innerHTML == eiffel) {
    document.getElementById("d3").innerHTML = heart;
    document.getElementById("d6").innerHTML = heart;
    document.getElementById("d9").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d3').innerHTML == ball &&
    document.getElementById('d6').innerHTML == ball &&
    document.getElementById('d9').innerHTML == ball) {
    document.getElementById("d3").innerHTML = heart;
    document.getElementById("d6").innerHTML = heart;
    document.getElementById("d9").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d1').innerHTML == eiffel &&
    document.getElementById('d5').innerHTML == eiffel &&
    document.getElementById('d9').innerHTML == eiffel) {
    document.getElementById("d1").innerHTML = heart;
    document.getElementById("d5").innerHTML = heart;
    document.getElementById("d9").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d1').innerHTML == ball &&
    document.getElementById('d5').innerHTML == ball &&
    document.getElementById('d9').innerHTML == ball) {
    document.getElementById("d1").innerHTML = heart;
    document.getElementById("d5").innerHTML = heart;
    document.getElementById("d9").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d3').innerHTML == eiffel &&
    document.getElementById('d5').innerHTML == eiffel &&
    document.getElementById('d7').innerHTML == eiffel) {
    document.getElementById("d3").innerHTML = heart;
    document.getElementById("d5").innerHTML = heart;
    document.getElementById("d7").innerHTML = heart;
    delay();
  } else if (
    document.getElementById('d3').innerHTML == ball &&
    document.getElementById('d5').innerHTML == ball &&
    document.getElementById('d7').innerHTML == ball) {
    document.getElementById("d3").innerHTML = heart;
    document.getElementById("d5").innerHTML = heart;
    document.getElementById("d7").innerHTML = heart;
    delay();
  }
}

// clears the board
function clear() {
  for(var i = 0; i <= 8; i++) {
    document.getElementsByClassName('smallDiv')[i].innerHTML = "";
  }
}

// keeps the love
function delay() {
  setTimeout(clear, 2000);
}
