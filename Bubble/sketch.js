var mic;
var grow = 1;
var grow2 = 1;
var grow3 = 1;
var grow4 = 1;
var img;
var vid1;
var vid2;
var vid3;
var vid4;
var theta = 0;

// function preload() {
//   mySound = loadSound('assets/shell.m4a');
// }

function setup() {
createCanvas(windowWidth,windowHeight, WEBGL);
ambientLight('#FCEDDC');
ambientMaterial(250);
mic = new p5.AudioIn();
mic.start();
img = loadImage("assets/test.png");
vid1 = createVideo(["assets/oil4-1.mov"]);
vid1.loop();
vid1.hide();
vid2 = createVideo(["assets/oil4-2.mov"]);
vid2.loop();
vid2.hide();
vid3 = createVideo(["assets/oil4-3.mov"]);
vid3.loop();
vid3.hide();
vid4 = createVideo(["assets/oil4-4.mov"]);
vid4.loop();
vid4.hide();

//mySound.setVolume(0.1);
// mySound.play();
// mySound.loop();

};

function draw() {



var d = map(mic.getLevel(), 0, 0.25, 50, 5);

//rotation behavior
function rotateSphere1() {
	rotateZ(80 + sin(theta * d * 0.01));
	rotateX(sin(theta * d * 0.01));
	rotateY(sin(theta * d * 0.01));
};
function rotateSphere2() {
	rotateZ(sin(theta * d * 0.02 * -1));
	rotateX(sin(theta * d * 0.02 * -1));
	rotateY(80 + sin(theta * d * 0.02 * -1));
};
function rotateSphere3() {
	rotateZ(sin(theta * d * 0.03));
	rotateX(80 + sin(theta * d * 0.03));
	rotateY(sin(theta * d * 0.03));
};
function rotateSphere4() {
	rotateZ(sin(theta * d * 0.025) * -1);
	rotateX(sin(theta * d * 0.025) * -1);
	rotateY(80 + sin(theta * d * 0.025) * -1);
};

//spheres
push(); //top center
translate(0, -height/3.25 - 50, 0)
rotateSphere3();
texture(vid1);
sphere(d + grow2);
pop();

push();  //upper right
translate(width/5, 0 - 60, 0);
rotateSphere1();
texture(vid2);
sphere(d + grow);
pop();

push();  //upper left
translate(-width/5, 0 - 60, 0);
rotateSphere2();
texture(vid4);
sphere(d + grow3);
pop();

push();  //bottom right
translate(width/8, height/2.5 - 50, 0);
rotateSphere4();
texture(vid3);
sphere(d + grow4);
pop();

push();  //bottom left
translate(-width/8, height/2.5 - 50, 0)
rotateSphere3();
texture(vid2);
sphere(d + grow);
pop();

push();  //wtf
texture(img);
pop();

grow += 0.07; //default
grow2 += 0.08; //top center
grow3 += 0.1025; //upper left
grow4 += 0.115; //bottom right
theta += 0.025; //rotation

if (d + grow > 300 || d + grow2 > 300 || d + grow3 > 300 || d + grow4 > 300 || mic.getLevel() > 0.1) {
	grow = 0;
	grow2 = 0;
	grow3 = 0;
	grow4 = 0;
};

};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};
