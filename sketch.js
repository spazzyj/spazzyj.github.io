// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var mic

function setup() {
  createCanvas(576, 576);
};


mic = new p5.AudioIn();
mic.start();

/*

//Mouse-over on a stripe changes its color
	var mouseOver = MOUSEOVERWHATEVER(){
		setRandomFill();
	} ;

//Stripes are not the same color as adjacent ones
	If currentColor === nextColor {
		num = Math.floor(Math.random() * (7 - 1)) + 1;};

//some intense input cancels out noLoop();

*/

function draw() {
  background(0);
  xPos = 18;

  for (numStripes = 0; numStripes <=29; numStripes++) {
  	currentColor = setRandomFill();
  	noStroke();
  	rect(xPos, 18, 18, 540);
  	xPos += 18;
  	nextColor = setRandomFill();

  	//If (currentColor === nextColor) {
	//nextColor = setRandomFill();
  };

  noLoop();

}; //close function draw

function setRandomFill() {
	num = Math.floor(Math.random() * (7 - 1)) + 1;

	switch(num) {
		case 1:
			fill(255,205,0);
			break
		case 2:
			fill(255,85,0);
			break;
		case 3:
			fill(68,36,108);
			break;
		case 4:
			fill(195,0,125);
			break;
		case 5:
			fill(0,127,23);
			break;
		case 6:
			fill(0,84,166);
			break;
		default:
			fill(0);
	};

}; //close function setRandomFill



	/*if (num < .16) {
		fill(255,205,0);
	} else if (.16 < num > .32) {
		fill(255,85,0);
	} else if (.32 < num > .48) {
		fill(68,36,108);
	} else if (.48 < num > .64) {
		fill(195,0,125);
	} else if (.64 < num > .80) {
		fill(0,127,23);
	} else {
		fill(0,84,166);
	}
}


  /*
  	while (numStripes <= 29) {
  	fill(255,205,0);
  	rect((xPos + 18), 18, 18, 600);
  	xPos += 18; 
  	numStripes--;
  };

};


function draw() {
  background(0);
  
  fill(255,205,0);
  rect(18, 18, 18, 600);
  
  fill(255,85,0);
  rect(36, 18, 18, 600);
  
  fill(68,36,108);
  rect(54, 18, 18, 600);
  
  fill(195,0,125);
  rect(72, 18, 18, 600);
  
  fill(0,127,23);
  rect(90, 18, 18, 600);

  fill(0,84,166);
  rect(108, 18, 18, 600);
}
*/
