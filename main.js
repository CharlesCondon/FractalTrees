let angle = 0;
let angleSlider;
let branchSlider;

function setup() {
  var initCanvas = createCanvas(windowWidth, windowHeight);
  angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);
  branchSlider = createSlider(0, .73, 0, .01);
  initCanvas.parent("background");
  angleSlider.parent("slide");
  branchSlider.parent("branches");
}

function draw() {
  background(0);
  angle = angleSlider.value();
  branchNum = branchSlider.value();
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
    branch(len * branchNum);
    pop();
    push();
    rotate(-angle);
    branch(len * branchNum);
    pop();
  }
}