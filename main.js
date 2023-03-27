let angle = 0;
let angleSlider;
let branchSliderL;
let branchSliderR;
let randoL = (Math.random() * .73);
let randoR = (Math.random() * .73);

function setup() {
  var initCanvas = createCanvas(windowWidth, windowHeight);
  angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);
  branchSliderL = createSlider(0, .73, randoL, .01);
  branchSliderR = createSlider(0, .73, randoR, .01);
  initCanvas.parent("backgroundCont");
  angleSlider.parent("slide");
  branchSliderL.parent("branchesL");
  branchSliderR.parent("branchesR");
}

function draw() {
  background(0);
  angle = angleSlider.value();
  branchNumL = branchSliderL.value();
  branchNumR = branchSliderR.value();
  stroke(255);
  strokeWeight(2);
  if (windowHeight > 740) {
    translate(width * 0.47, height * 0.92);
    branch(windowHeight * .2);
  }
  else {
    translate(width * 0.44, height * 0.92);
    branch(windowHeight * .15);
  }
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