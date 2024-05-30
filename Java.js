// Canvas - Fishing Scene

// Canvas setup
var cnv = document.getElementById("my");
var ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;
let cloud1x = 100;
let cloud1y = 50;
let cloud2x = 500;

let star1 = 300;
let star1x = 100;
let stary = 700;
let star10 = 10;
let Sky = "DarkBlue";
let Water = "DarkBlue";
// Top-left corner (0,0)
// top-right corner (400,0)
// bottom-left corner (0,400)
// bottom-right corner is (400,400)

// This is the sky
requestAnimationFrame(draw);
function draw() {
  ctx.fillStyle = Sky;

  ctx.fillRect(0, 0, 1000, 1000);

  // grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, 500, 1000, 500);

  // mountains
  ctx.fillStyle = "gray";
  ctx.moveTo(0, 500);
  // ctx.lineTo(300, 200); draging pencil
  ctx.lineTo(100, 500);
  ctx.lineTo(350, 500);
  ctx.lineTo(170, 150);
  ctx.fill();

  ctx.fillStyle = "white";

  ctx.beginPath();
  // ctx.moveTo(250, 300);
  // ctx.lineTo(300, 150);
  // ctx.lineTo(175, 300);
  ctx.moveTo(265, 500);
  ctx.lineTo(500, 150);
  ctx.lineTo(750, 500);
  ctx.fill();

  // This is my Img's

  var cloudImg = document.getElementById("cloud");
  ctx.drawImage(cloudImg, cloud1x, cloud1y, 90, 90);
  ctx.drawImage(cloudImg, cloud2x, 30, 80, 90);
  var starImg = document.getElementById("star");
  ctx.drawImage(starImg, star1, star1x, 100, 80);
  ctx.drawImage(starImg, stary, 30, 100, 80);
  ctx.drawImage(starImg, star10, 10, 100, 80);
  // This is my lake

  ctx.beginPath();
  ctx.fillStyle = Water;
  ctx.ellipse(300, 700, 250, 150, Math.PI / 1, 0, 2 * Math.PI);
  ctx.fill();

  // house
  ctx.fillStyle = "black";
  ctx.fillRect(700, 700, 200, 200);

  //window
  ctx.fillStyle = "white";
  ctx.fillRect(725, 750, 50, 50);

  // Chim
  ctx.fillStyle = "brown";
  ctx.fillRect(725, 595, 60, 70);
  var smokeImg = document.getElementById("smoke");
  ctx.drawImage(smokeImg, 700, 520, 80, 80);

  // Door
  ctx.fillStyle = "brown";
  ctx.fillRect(770, 850, 50, 65);

  // Roof
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(700, 700);
  ctx.lineTo(800, 560);
  ctx.lineTo(900, 705);
  ctx.lineTo(900, 705);
  ctx.fill();

  // Tree
  ctx.fillStyle = "lightgreen";
  ctx.beginPath();
  ctx.moveTo(500, 900);
  ctx.lineTo(600, 660);
  ctx.lineTo(650, 900);
  ctx.lineTo(500, 900);
  ctx.fill();
  //Tree Trunk
  ctx.fillStyle = "brown";
  ctx.fillRect(560, 900, 30, 50);

  // animation
  star1 = star1 - 3;
  star1x += 2;
  star10 = star10 - 2;
  stary = stary + 1;

  if (star1 >= 800) {
    star1 = 900;

    stary = Math.random() * 150;
  }

  cloud1x = cloud1x - 3;
  cloud2x += 3;
  // When cloud1 exits the RIGHT side of the canvas, move it to the LEFT side of the canvas
  if (cloud1x >= 90) {
    cloud1x = -100;

    // Reappear at a random height
    cloud1y = Math.random() * 150;
  }
  requestAnimationFrame(draw);
}
// Keyboard handler
document.addEventListener("keypress", keyboardHandler);

function keyboardHandler(event) {
  if (event.code == "KeyT") {
    console.log("You Pressed T");
    Sky = "lightblue";
    Water = "blue";
  }
}
