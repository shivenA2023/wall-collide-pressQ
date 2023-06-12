// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

// Global Variables

let green = {
  x: 900,
  y: 700,
  w: 50,
  h: 50,
  speed: 5,
};
let wall = {
  x: 430,
  y: 300,
  w: 100,
  h: 200,
};

let ArrowRightPressed = false;
let ArrowLeftPressed = false;
let ArrowUpPressed = false;
let ArrowDownPressed = false;
let KeyQPressed = false;

// Animation Loop
requestAnimationFrame(draw);

function draw() {
  //Logic
  if (ArrowRightPressed) {
    green.x += green.speed;
  } else if (ArrowLeftPressed) {
    green.x += -green.speed;
  } else if (ArrowUpPressed) {
    green.y += -green.speed;
  } else if (ArrowDownPressed) {
    green.y += green.speed;
  }

  if (KeyQPressed) {
    wall.x = Math.random() * 700 + 100;
    wall.y = Math.random() * 500 + 100;
  }

  // Draw
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Player

  ctx.fillStyle = "lightgreen";
  ctx.fillRect(green.x, green.y, green.w, green.h);
  ctx.fillStyle = "black";
  ctx.fillRect(wall.x, wall.y, wall.w, wall.h);

  if (
    wall.x - 55 < green.x &&
    green.y < wall.y + 205 &&
    green.x < wall.x + 100 &&
    green.y > wall.y - 55
  ) {
    green.x = 900;
    green.y = 700;
  }

  // Animate
  requestAnimationFrame(draw);
}

//Hold Down
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    ArrowRightPressed = true;
  } else if (event.code == "ArrowLeft") {
    ArrowLeftPressed = true;
  } else if (event.code == "ArrowUp") {
    ArrowUpPressed = true;
  } else if (event.code == "ArrowDown") {
    ArrowDownPressed = true;
  } else if ((event.code = "KeyQ")) {
    KeyQPressed = true;
  }

  if (green.x < -60) {
    green.x = 1070;
  } else if (green.x > 1071) {
    green.x = -55;
  } else if (green.y > 860) {
    green.y = -55;
  } else if (green.y < -56) {
    green.y = 815;
  }
}
function keyupHandler(event) {
  if (event.code == "ArrowRight") {
    ArrowRightPressed = false;
  } else if (event.code == "ArrowLeft") {
    ArrowLeftPressed = false;
  } else if (event.code == "ArrowUp") {
    ArrowUpPressed = false;
  } else if (event.code == "ArrowDown") {
    ArrowDownPressed = false;
  } else if ((event.code = "KeyQ")) {
    KeyQPressed = false;
  }
}
