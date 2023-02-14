/* Week 1 homework: draw favorite food
* I love sushi, but I'm not crazy enough to 
* try to draw that in P5, so my new favorite
* food is pancakes */ 

let myFont;
function preload() {
    myFont = loadFont('./_assets/fonts/JetBrainsMonoNL-Bold.ttf');
    img_wine = loadImage('./_assets/images/wine_glass.png');
    img_spoon = loadImage('./_assets/images/spoon.png');
    img_fork = loadImage('./_assets/images/fork.png');
}

function setup() {
   createCanvas(800, 500);
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
    
    /* add textual items */
    fill(0, 102, 153);
    textFont(myFont);
    textSize(32);
    text("pancakes!", 50, 50);
    text("Bearcat 0", 50, 450);
}
