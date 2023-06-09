let angle = 0;
let angleSlider;
let branchSliderL;
let branchSliderR;
let randoL = (Math.random() * .73);
let randoR = (Math.random() * .73);

function setup() {
  let randoA = (Math.random() * (PI));
  var initCanvas = createCanvas(windowWidth, windowHeight);
  angleSlider = createSlider(0, TWO_PI, randoA, 0.01);
  branchSliderL = createSlider(0, .73, randoL, .01);
  branchSliderR = createSlider(0, .73, randoR, .01);
  initCanvas.parent("backgroundCont");
  angleSlider.parent("slide");
  branchSliderL.parent("branchesR");
  branchSliderR.parent("branchesL");

  let down = document.getElementById("down");
  down.onclick = function() {
    saveCanvas(initCanvas, 'myFractal');
  }
}

function draw() {
  background(0);
  angle = angleSlider.value();
  branchNumL = branchSliderL.value();
  branchNumR = branchSliderR.value();
  stroke(255);
  if (windowHeight > 740) {
    strokeWeight(2);
    translate(width * 0.47, height * 0.92);
    branch(windowHeight * .2);
  }
  else {
    strokeWeight(1);
    translate(width * 0.47, height * 0.8);
    branch(windowHeight * .12);
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

window.addEventListener("DOMContentLoaded", (event) => {
  let info = document.getElementById("info");
  let blurb = document.getElementById("infoBox");
  info.onclick = function() {
    blurb.classList.toggle("hide");
    blurb.classList.toggle("animate__fadeIn");
  }
});