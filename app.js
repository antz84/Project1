// step 1  make a grid from divs in html
// step 2  assign a variable to each div grid space
// step 3  click on div inserts a picture
// step 4  click alternates pictures (X/O) for two players to take turns

// step 5  determine when winning combinations occur
// step 6  make an event when a player wins
// step 7  button to reset game


console.log('script connected...');  // check script is connected

var d1 = document.getElementById('div1');
var d2 = document.getElementById('div2');
var d3 = document.getElementById('div3');
var d4 = document.getElementById('div4');       // step 2
var d5 = document.getElementById('div5');
var d6 = document.getElementById('div6');
var d7 = document.getElementById('div7');
var d8 = document.getElementById('div8');
var d9 = document.getElementById('div9');

var d1p1 = false;
var d1p2 = false;
var d2p1 = false;
var d2p2 = false;
var d3p1 = false;
var d3p2 = false;
var d4p1 = false;
var d4p2 = false;
var d5p1 = false;
var d5p2 = false;
var d6p1 = false;
var d6p2 = false;
var d7p1 = false;
var d7p2 = false;
var d8p1 = false;
var d8p2 = false;
var d9p1 = false;
var d9p2 = false;


((p1turn === true) &&
(d1p1 = false) &&
(d1p2 = false) &&
(d2p1 = false) &&
(d2p2 = false) &&
(d3p1 = false) &&
(d3p2 = false) &&
(d4p1 = false) &&
(d4p2 = false) &&
(d5p1 = false) &&
(d5p2 = false) &&
(d6p1 = false) &&
(d6p2 = false) &&
(d7p1 = false) &&
(d7p2 = false) &&
(d8p1 = false) &&
(d8p2 = false) &&
(d9p1 = false) &&
(d9p2 = false))











var moveCounter = 0;
var p1turn = true;  // for swapping turns     // player '1' always begins game

function swapTurn() {
  if (p1turn === true) {
    p1turn = false;
    moveCounter = (moveCounter + 1);
    console.log(moveCounter);
  } else if (p1turn === false) {
    p1turn = true;
    moveCounter = (moveCounter + 1);
    console.log(moveCounter);
  }
}

swapTurn();

// step 3  click on div inserts a picture

document.getElementById("div1").addEventListener("click", function() {
  if ((p1turn === true) && (d1p1 = false) && (d1p2 = false)) {
    document.getElementById("div1").innerHTML = "<img src=http://media.northernhills.ab.ca/soccer_ball.jpg />";
    swapTurn();
    var d1p1 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  } else {
    document.getElementById("div1").innerHTML = "<img src=http://ips-static.videopublishing.com/kyproscom/http___www_flickr_com_photos_dvpfagan_5580997148_-cyprus_thumb.jpg />";
    swapTurn();
    var d1p2 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  }
});

document.getElementById("div2").addEventListener("click", function() {
  if (p1turn === true && (d2p1 = false) && (d2p2 = false)) {
    document.getElementById("div2").innerHTML = "<img src=http://media.northernhills.ab.ca/soccer_ball.jpg />";
    swapTurn();
    var d2p1 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  } else {
    document.getElementById("div2").innerHTML = "<img src=http://ips-static.videopublishing.com/kyproscom/http___www_flickr_com_photos_dvpfagan_5580997148_-cyprus_thumb.jpg />";
    swapTurn();
    var d2p2 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  }
});

document.getElementById("div3").addEventListener("click", function() {
  if (p1turn === true && (d3p1 = false) && (d3p2 = false)) {
    document.getElementById("div3").innerHTML = "<img src=http://media.northernhills.ab.ca/soccer_ball.jpg />";
    swapTurn();
    var d3p1 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  } else {
    document.getElementById("div3").innerHTML = "<img src=http://ips-static.videopublishing.com/kyproscom/http___www_flickr_com_photos_dvpfagan_5580997148_-cyprus_thumb.jpg />";
    swapTurn();
    var d3p2 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  }
});

document.getElementById("div4").addEventListener("click", function() {
  if (p1turn === true && (d4p1 = false) && (d4p2 = false)) {
    document.getElementById("div4").innerHTML = "<img src=http://media.northernhills.ab.ca/soccer_ball.jpg />";
    swapTurn();
    var d4p1 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  } else {
    document.getElementById("div4").innerHTML = "<img src=http://ips-static.videopublishing.com/kyproscom/http___www_flickr_com_photos_dvpfagan_5580997148_-cyprus_thumb.jpg />";
    swapTurn();
    var d4p2 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  }
});

document.getElementById("div5").addEventListener("click", function() {
  if (p1turn === true && (d5p1 = false) && (d5p2 = false)) {
    document.getElementById("div5").innerHTML = "<img src=http://media.northernhills.ab.ca/soccer_ball.jpg />";
    swapTurn();
    var d5p1 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  } else {
    document.getElementById("div5").innerHTML = "<img src=http://ips-static.videopublishing.com/kyproscom/http___www_flickr_com_photos_dvpfagan_5580997148_-cyprus_thumb.jpg />";
    swapTurn();
    var d5p2 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  }
});

document.getElementById("div6").addEventListener("click", function() {
  if (p1turn === true && (d6p1 = false) && (d6p2 = false)) {
    document.getElementById("div6").innerHTML = "<img src=http://media.northernhills.ab.ca/soccer_ball.jpg />";
    swapTurn();
    var d6p1 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  } else {
    document.getElementById("div6").innerHTML = "<img src=http://ips-static.videopublishing.com/kyproscom/http___www_flickr_com_photos_dvpfagan_5580997148_-cyprus_thumb.jpg />";
    swapTurn();
    var d6p2 = true;
    //var moveCounter = moveCounter++;
    console.log(moveCounter);
  }
});

document.getElementById("div7").addEventListener("click", function() {
  if (p1turn === true && (d7p1 = false) && (d7p2 = false)) {
    document.getElementById("div7").innerHTML = "<img src=http://media.northernhills.ab.ca/soccer_ball.jpg />";
    var d7p1 = true;
    swapTurn();
    var moveCounter = moveCounter++;
    console.log(moveCounter);
  } else {
    document.getElementById("div7").innerHTML = "<img src=http://ips-static.videopublishing.com/kyproscom/http___www_flickr_com_photos_dvpfagan_5580997148_-cyprus_thumb.jpg />";
    var d7p2 = true;
    swapTurn();
    var moveCounter = moveCounter + 1;
    console.log(moveCounter);
  }
});

document.getElementById("div8").addEventListener("click", function() {
  if (p1turn === true && (d8p1 = false) && (d8p2 = false)) {
    document.getElementById("div8").innerHTML = "<img src=http://media.northernhills.ab.ca/soccer_ball.jpg />";
    var d8p1 = true;
    swapTurn();
    var moveCounter = moveCounter + 1;
    console.log(moveCounter);
  } else {
    document.getElementById("div8").innerHTML = "<img src=http://ips-static.videopublishing.com/kyproscom/http___www_flickr_com_photos_dvpfagan_5580997148_-cyprus_thumb.jpg />";
    var d8p2 = true;
    swapTurn();
    var moveCounter = moveCounter + 1;
    console.log(moveCounter);
  }
});

document.getElementById("div9").addEventListener("click", function() {
  if (p1turn === true && (d9p1 = false) && (d9p2 = false)) {
    document.getElementById("div9").innerHTML = "<img src=http://media.northernhills.ab.ca/soccer_ball.jpg />";
    var d9p1 = true;
    swapTurn();
    var moveCounter = moveCounter + 1;
    console.log(moveCounter);
  } else {
    document.getElementById("div9").innerHTML = "<img src=http://ips-static.videopublishing.com/kyproscom/http___www_flickr_com_photos_dvpfagan_5580997148_-cyprus_thumb.jpg />";
    var d9p2 = true;
    swapTurn();
    var moveCounter = moveCounter + 1;
    console.log(moveCounter);
  }
});



if ((d1p1 === true) && (d2p1 === true) && (d3p1 === true)) {
  console.log('p1 wins');
}

// if ((d1p1 === true) && (d2p1 === true) && (d3p1 === true)) {
//   console.log('Player 1 Wins !!');
// } else if((d4p1 === true) && (d5p1 === true) && (d6p1 === true)) {
//   console.log('Player 1 Wins !!');
// } else if((d7p1 === true) && (d8p1 === true) && (d9p1 === true)) {
//   console.log('Player 1 Wins !!');
// } else if((d1p1 === true) && (d4p1 === true) && (d7p1 === true)) {
//   console.log('Player 1 Wins !!');
// } else if((d2p1 === true) && (d5p1 === true) && (d8p1 === true)) {
//   console.log('Player 1 Wins !!');
// } else if((d3p1 === true) && (d6p1 === true) && (d9p1 === true)) {
//   console.log('Player 1 Wins !!');
// } else if((d1p1 === true) && (d5p1 === true) && (d9p1 === true)) {
//   console.log('Player 1 Wins !!');
// } else if((d3p1 === true) && (d5p1 === true) && (d7p1 === true)) {
//   console.log('Player 1 Wins !!');
// } else if((d1p2 === true) && (d2p2 === true) && (d3p2 === true)) {
//   console.log('Player 2 Wins !!');
// } else if((d4p2 === true) && (d5p2 === true) && (d6p2 === true)) {
//   console.log('Player 2 Wins !!');
// } else if((d7p2 === true) && (d8p2 === true) && (d9p2 === true)) {
//   console.log('Player 2 Wins !!');
// } else if((d1p2 === true) && (d4p2 === true) && (d7p2 === true)) {
//   console.log('Player 2 Wins !!');
// } else if((d2p2 === true) && (d5p2 === true) && (d8p2 === true)) {
//   console.log('Player 2 Wins !!');
// } else if((d3p2 === true) && (d6p2 === true) && (d9p2 === true)) {
//   console.log('Player 2 Wins !!');
// } else if((d1p2 === true) && (d5p2 === true) && (d9p2 === true)) {
//   console.log('Player 2 Wins !!');
// } else if((d3p2 === true) && (d5p2 === true) && (d7p2 === true)) {
//   console.log('Player 2 Wins !!');
// } else {
//   console.log('Le Draw');
// }

// step 6 reset game to blank

// document.getElementsByClass("button").addEventListener("click", function() {
//   if (counter >= 9) {
//     document.getElementById("div1").innerHTML = "le end";
//     document.getElementById("div2").innerHTML = "le end";
//     document.getElementById("div3").innerHTML = "le end";
//     document.getElementById("div4").innerHTML = "le end";
//     document.getElementById("div5").innerHTML = "le end";
//     document.getElementById("div6").innerHTML = "le end";
//     document.getElementById("div7").innerHTML = "le end";
//     document.getElementById("div8").innerHTML = "le end";
//     document.getElementById("div9").innerHTML = "le end";
//     console.log('end of game');
//   }
// });
