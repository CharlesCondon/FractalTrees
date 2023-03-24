let angle = 0;
let angleSlider;
let branchSliderL;
let branchSliderR;

function setup() {
  var initCanvas = createCanvas(windowWidth, windowHeight);
  angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);
  branchSliderL = createSlider(0, .73, 0, .01);
  branchSliderR = createSlider(0, .73, 0, .01);
  initCanvas.parent("background");
  angleSlider.parent("slide");
  branchSliderL.parent("branches");
  branchSliderR.parent("branches");
}

function draw() {
  background(0);
  angle = angleSlider.value();
  branchNumL = branchSliderL.value();
  branchNumR = branchSliderR.value();
  stroke(255);
  strokeWeight(2);
  translate(width * 0.47, height * 0.92);
  branch(windowHeight * .25);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * branchNumL);
    pop();
    push();
    rotate(-angle);
    branch(len * branchNumR);
    pop();
  }
}