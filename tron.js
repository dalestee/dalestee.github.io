let player1;
let player2;
let players;

let inputCooldown1 = 0; 
let inputCooldown2 = 0

let running;

function createPlayer(color, x, y) {
  player = new Sprite();
  player.x = x;
  player.y = y;
  player.width = 10;
  player.height = 10;
  player.color = color;
  player.direction += 270;
  player.speed = 3;
  player.trail = [];
  player.lastMove = "up";

  return player;
}

function setup() {
  new Canvas(window.innerWidth - 20, window.innerHeight - 20);
  player1 = createPlayer("cyan", (window.innerWidth / 2) - 10, window.innerHeight / 2);
  player2 = createPlayer("orange", (window.innerWidth / 2) + 10, window.innerHeight / 2);
  
  players = [player1, player2];

  running = true;
}

function draw() {
	clear();
	background("black");

    if (player1.overlaps(player2)) {

    }
    if (player2.overlaps(player1)) {

    }
	
	if(!running){
		textSize(50);
		fill("red");
		text("Game Over!", window.innerWidth/2 - 100, window.innerHeight/2);
	}

	if(running) {

		for (let i = 0; i < players.length; i++) {
			// if player leaves the screen, teleport to the other side
		  if (players[i].x < 0) {
			  players[i].x = window.innerWidth;
		  }
		  if (players[i].x > window.innerWidth) {
			  players[i].x = 0;
		  }
		  if (players[i].y < 0) {
			  players[i].y = window.innerHeight;
		  }
		  if (players[i].y > window.innerHeight) {
			  players[i].y = 0;
		  }
	  }	
  
	  for (let i = 0; i < player1.trail.length; i++) {
		  // if player1 hits their own trail, they lose
		  if ((player1.x == player1.trail[i][0] && player1.y == player1.trail[i][1])||(player1.x == player2.trail[i][0] && player1.y == player2.trail[i][1])) {
			  player1.speed = 0;
			  player2.speed = 0;

			  running = false;
		  }
		  else{
			  fill(51, 151, 131);
			  noStroke();
			  rect(player1.trail[i][0]-5, player1.trail[i][1]-5, 10, 10);
		  }
	  }
	  
	  for (let i = 0; i < player2.trail.length; i++) {
		  // if player2 hits their own trail, they lose
		  if (player2.x == player2.trail[i][0] && player2.y == player2.trail[i][1]) {
			  player2.speed = 0;
			  player1.speed = 0;
			  running = false;
		  }
		  else{
			  fill(151, 51, 51);
			  noStroke();
			  rect(player2.trail[i][0]-5, player2.trail[i][1]-5, 10, 10);
		  }
	  }	 
	  
	  player1.trail.push([player1.x, player1.y]);
	  player2.trail.push([player2.x, player2.y]);

	// Apply cooldown to player input
	if (inputCooldown1 > 0) {
	  inputCooldown1--;
	} else {
	  // controls and movement
	  if (kb.presses("arrowUp")) {
		if (player1.lastMove != "down") {
		  player1.direction = -90;
		  player1.lastMove = "up";
		  inputCooldown1 = 5; // Set the cooldown period (adjust as needed)
		}
	  } else if (kb.presses("arrowDown")) {
		if (player1.lastMove != "up") {
		  player1.direction = 90;
		  player1.lastMove = "down";
		  inputCooldown1 = 5; // Set the cooldown period (adjust as needed)
		}
	  } else if (kb.presses("arrowLeft")) {
		if (player1.lastMove != "right") {
		  player1.direction = 180;
		  player1.lastMove = "left";
		  inputCooldown1 = 5; // Set the cooldown period (adjust as needed)
		}
	  } else if (kb.presses("arrowRight")) {
		if (player1.lastMove != "left") {
		  player1.direction = 0;
		  player1.lastMove = "right";
		  inputCooldown1 = 5; // Set the cooldown period (adjust as needed)
		}
	  }
	}
  
	if (inputCooldown1 > 0) {
	  inputCooldown1--;
	} else {
	  // controls and movement
	  if (kb.presses("up")) {
		if (player2.lastMove != "down") {
		  player2.direction = -90;
		  player2.lastMove = "up";
		  inputCooldown1 = 5; // Set the cooldown period (adjust as needed)
		}
	  } else if (kb.presses("down")) {
		if (player2.lastMove != "up") {
		  player2.direction = 90;
		  player2.lastMove = "down";
		  inputCooldown1 = 5; // Set the cooldown period (adjust as needed)
		}
	  } else if (kb.presses("left")) {
		if (player2.lastMove != "right") {
		  player2.direction = 180;
		  player2.lastMove = "left";
		  inputCooldown1 = 5; // Set the cooldown period (adjust as needed)
		}
	  } else if (kb.presses("right")) {
		if (player2.lastMove != "left") {
		  player2.direction = 0;
		  player2.lastMove = "right";
		  inputCooldown1 = 5; // Set the cooldown period (adjust as needed)
		}
	  }
	}
}
}