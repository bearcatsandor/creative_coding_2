/* Week 1 homework: draw favorite food
* I love sushi, but I'm not crazy enough to 
* try to draw that in P5, so my new favorite
* food is pancakes */ 

let myFont;
var napkinX = 10;
var napkinY = 165;
var timerNapkinAnim = 1;

function preload() {
    myFont = loadFont('./_assets/fonts/JetBrainsMonoNL-Bold.ttf');
    img_wine = loadImage('./_assets/images/wine_glass.png');
    img_spoon = loadImage('./_assets/images/spoon.png');
    img_fork = loadImage('./_assets/images/fork.png');
    img_napkin = loadImage('./_assets/images/napkin.png');
}

function setup() {
   createCanvas(800, 500);
    setInterval(pauseSeconds, 500);
   }
function draw() {
    background(220);
    /* make plate */
    fill(255,255,255);
    circle(350,250,300);

    /* make pancake*/
    let c = color (205,133,63);
    fill(c);
    circle(350,250,260);
   
    /* make butter*/
    let b = color (251,236,93);
    fill(b);
    square(320,220,55);

    img_wine.resize(75,0); 
    image(img_wine, 575, 35);

    img_spoon.resize(50,0);
    image(img_spoon, 150, 175);

    img_fork.resize(40,0);
    image(img_fork, 505, 165);

    img_napkin.resize(200,0);
    image(img_napkin, napkinX, napkinY);

    /* add textual items */
    fill(0, 102, 153);
    textFont(myFont);
    textSize(32);
    text("pancakes!", 50, 50);
    text("Bearcat", 50, 450);
}

function pauseSeconds () {
    timerNapkinAnim +=1;
    // the napkin moves after 3 seconds
    if (timerNapkinAnim > 3) {
       napkinX = timerNapkinAnim * 10;
       napkinY = timerNapkinAnim * 5;
    } 
}
