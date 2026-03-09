var expand=0;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(46,216,230); //light blue blackground

}

//The draw function happens over and over again
function draw() {
//circle
  stroke(248,250,100); // yellow border
  strokeWeight(5);
  fill(227,209,52,220); // purple fill (red,blue,green,transparent)
  ellipse(110,expand,40,40); // purple circle in center (x,y,width,height)
  ellipse(mouseX,mouseY,45,45);
}

function mousePressed(){
if (expand>=500) {
  expand=0
} 
else {
  expand= expand+10   
}

}