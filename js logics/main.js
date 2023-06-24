// Digital Clock

function DisplayTime() {
  let hrs = new Date().getHours();
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();
  let mode = document.querySelector(".mode");

  if (hrs >= 12) {
    mode.innerHTML = "PM";
  } else {
    mode.innerHTML = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }
  document.querySelector(".hours").innerHTML = hrs;
  document.querySelector(".mins").innerHTML = mins;
  document.querySelector(".seconds").innerHTML = secs;
}

setInterval(DisplayTime, 10);

// Starting Article Editor Tool
// select Variables
const articleEditorOBject = {
  select: document.querySelector("select"),
  Fontresults: document.querySelector(".Fontresults"),
  subBtn: document.querySelector(".minus"),
  addBtn: document.querySelector(".add"),
  boldBtn: document.querySelector(".bold"),
  invertBtn: document.querySelector(".invert"),
  refreshBtn: document.querySelector(".refresh"),
  txt: document.querySelector(".text"),
  inpText: document.querySelector(".inpText"),
  colorInp: document.querySelector(".colorInp"),
  counterNum: 16,
  Boldstatues: false,
};

// Generate P Text According To Input Text
articleEditorOBject.inpText.onblur = function () {
  articleEditorOBject.txt.innerHTML = articleEditorOBject.inpText.value;
  if (
    articleEditorOBject.inpText.value == "" ||
    articleEditorOBject.inpText.value == " "
  ) {
    articleEditorOBject.txt.innerHTML = "";
    articleEditorOBject.inpText.value = "";
    alert("You Must Type Something");
  } else if (articleEditorOBject.inpText.value.length > 20) {
    articleEditorOBject.txt.innerHTML = "";
    articleEditorOBject.inpText.value = "";
    alert("inpText Length Must Not Be More Than 20");
  }
};
// Generate Font Types With Select
articleEditorOBject.select.onclick = function () {
  // console.log(select.value)
  articleEditorOBject.txt.style.fontFamily = articleEditorOBject.select.value;
  if (articleEditorOBject.inpText.value == "") {
    alert("You Must Type Text First Selecting Font Type");
    articleEditorOBject.txt.style.fontFamily = "Serif";
    articleEditorOBject.select.value = "Choose Font--";
  }
};
// Bold Btn Fucntion

articleEditorOBject.boldBtn.onclick = function () {
  if (articleEditorOBject.Boldstatues != true) {
    articleEditorOBject.Boldstatues = true;
    articleEditorOBject.txt.style.fontWeight = "bold";
    articleEditorOBject.boldBtn.style.color = "#3cadfd";
  } else {
    articleEditorOBject.Boldstatues = false;
    articleEditorOBject.txt.style.fontWeight = "normal";
    articleEditorOBject.boldBtn.style.backgroundColor = "white";
    articleEditorOBject.boldBtn.style.color = "black";
  }

  if (articleEditorOBject.inpText.value == "") {
    alert("You Must Type Text First Before Bold Text");
    articleEditorOBject.boldBtn.style.backgroundColor = "white";
    articleEditorOBject.boldBtn.style.color = "black";
    articleEditorOBject.txt.style.fontWeight = "normal";
  }
};

// Subtracting Button
articleEditorOBject.Fontresults.innerHTML = articleEditorOBject.counterNum;
articleEditorOBject.subBtn.onclick = function () {
  articleEditorOBject.counterNum -= 1;
  articleEditorOBject.Fontresults.innerHTML = articleEditorOBject.counterNum;
  articleEditorOBject.txt.style.fontSize = `${articleEditorOBject.Fontresults.innerHTML}px`;
  if (articleEditorOBject.Fontresults.innerHTML < 12) {
    articleEditorOBject.txt.style.fontSize = "12px";
    articleEditorOBject.Fontresults.innerHTML = 12;
    articleEditorOBject.counterNum = 12;
  } else if (articleEditorOBject.inpText.value == "") {
    alert("You Must Type Text First Before Changing Font Size");
    articleEditorOBject.counterNum = 16;
    articleEditorOBject.Fontresults.innerHTML = 16;
    articleEditorOBject.txt.style.fontSize = "16px";
  }
};
// Adding Button
articleEditorOBject.addBtn.onclick = function () {
  articleEditorOBject.counterNum += 1;
  articleEditorOBject.Fontresults.innerHTML = articleEditorOBject.counterNum;
  articleEditorOBject.txt.style.fontSize = `${articleEditorOBject.Fontresults.innerHTML}px`;
  if (articleEditorOBject.Fontresults.innerHTML > 24) {
    articleEditorOBject.txt.style.fontSize = "24px";
    articleEditorOBject.Fontresults.innerHTML = 24;
    articleEditorOBject.counterNum = 24;
  } else if (articleEditorOBject.inpText.value == "") {
    alert("You Must Type Text First Before Changing Font Size");

    articleEditorOBject.counterNum = 16;
    articleEditorOBject.Fontresults.innerHTML = 16;
    articleEditorOBject.txt.style.fontSize = "16px";
  }
};
// Generate P text Color Accroding To Input Color
articleEditorOBject.colorInp.onblur = function () {
  articleEditorOBject.txt.style.color = articleEditorOBject.colorInp.value;
  if (articleEditorOBject.inpText.value == "") {
    alert("You Must Type Text First Before Changing Text Color");
    articleEditorOBject.txt.style.color = "black";
    articleEditorOBject.colorInp.value = "#000000";
  }
};
// Invert Button Function
let invertStatues = false;
articleEditorOBject.invertBtn.onclick = function () {
  if (invertStatues != true) {
    invertStatues = true;
    articleEditorOBject.invertBtn.style.backgroundColor =
      articleEditorOBject.colorInp.value;
    articleEditorOBject.invertBtn.style.color = "white";
    articleEditorOBject.txt.style.backgroundColor =
      articleEditorOBject.colorInp.value;
    articleEditorOBject.txt.style.color = "white";
  } else {
    invertStatues = false;
    articleEditorOBject.invertBtn.style.backgroundColor = "white";
    articleEditorOBject.invertBtn.style.color = "black";
    articleEditorOBject.txt.style.backgroundColor = "white";
    articleEditorOBject.txt.style.color = `${articleEditorOBject.colorInp.value}`;
  }
  if (articleEditorOBject.inpText.value == "") {
    alert("You Must Type Text First Before Inverting Colors");
    articleEditorOBject.invertBtn.style.backgroundColor = "white";
    articleEditorOBject.invertBtn.style.color = "black";
    articleEditorOBject.txt.style.backgroundColor = "white";
    articleEditorOBject.txt.style.color = "black";
  }
};
// Reseting All Functions With Reset Button
articleEditorOBject.refreshBtn.onclick = function (p) {
  articleEditorOBject.invertBtn.style.backgroundColor = "white";
  articleEditorOBject.invertBtn.style.color = "black";
  articleEditorOBject.Fontresults.innerHTML = 16;
  articleEditorOBject.txt.style.fontWeight = "normal";
  articleEditorOBject.boldBtn.style.backgroundColor = "white";
  articleEditorOBject.boldBtn.style.color = "black";
  articleEditorOBject.txt.style.fontSize = `16px`;
  articleEditorOBject.txt.style.fontFamily = "Serif";
  articleEditorOBject.txt.style.backgroundColor = "white";
  articleEditorOBject.txt.style.color = "black";
  articleEditorOBject.select.value = "Choose Font--";
  articleEditorOBject.txt.innerHTML = "";
  articleEditorOBject.inpText.value = "";
  articleEditorOBject.colorInp.value = "#000000";
};
// Ending Article Editor Tool
// Starting Generated Numbers Game
// Selecting Variables
const gameObject = {
  gameSubmitBtn: document.querySelector(".sub"),
  numInput: document.querySelector(".numInput"),
  results: document.querySelector(".results"),
  userSpan: document.querySelector(".user"),
  computerSpan: document.querySelector(".computer"),
  counter: 0,
  counter2: 0,
};

// Function On CLicking Submit Button
gameObject.gameSubmitBtn.onclick = function (e) {
  e.preventDefault();
  gameObject.results.innerHTML = "";
  gameObject.results.innerHTML = Math.floor(Math.random() * 100);
  // Concept Game Condition
  // If Number Input IS Greater Than Results & Vice Versa
  if (
    gameObject.numInput.value > gameObject.results.innerHTML &&
    gameObject.numInput.value != ""
  ) {
    gameObject.results.innerHTML = `Generated Number Is ${gameObject.results.innerHTML} , Your Number Is ${gameObject.numInput.value}, You Won!`;
    gameObject.counter += 1;
    gameObject.userSpan.innerHTML = gameObject.counter;
    gameObject.userSpan.style.cssText = "align-items:center";
  } else if (
    gameObject.numInput.value < gameObject.results.innerHTML &&
    gameObject.numInput.value != ""
  ) {
    gameObject.results.innerHTML = `Generated Number Is ${gameObject.results.innerHTML} , Your Number Is ${gameObject.numInput.value}, You Lost!`;
    gameObject.counter2 += 1;
    gameObject.computerSpan.innerHTML = gameObject.counter2;
    gameObject.computerSpan.style.cssText = "align-items:center";
  } else if (gameObject.numInput.value == gameObject.results.innerHTML) {
    gameObject.results.innerHTML = `${gameObject.results.innerHTML} Generated Num Is Equal , Draw`;
  }
  if (gameObject.numInput.value == "") {
    gameObject.results.innerHTML = "You Must Add Number First";
  } else if (
    gameObject.computerSpan.innerHTML == "10" ||
    gameObject.userSpan.innerHTML == "10"
  ) {
    // Winning & Loosing Conditions
    if (gameObject.userSpan.innerHTML > gameObject.computerSpan.innerHTML) {
      alert("What a pity, You Lost..");
      gameObject.computerSpan.innerHTML = 0;
      gameObject.userSpan.innerHTML = 0;
      gameObject.numInput.value = "";
      gameObject.results.innerHTML = "";
      gameObject.counter = 0;
      gameObject.counter2 = 0;
    } else {
      alert("Congratulations, You Won!");
      gameObject.computerSpan.innerHTML = 0;
      gameObject.userSpan.innerHTML = 0;
      gameObject.numInput.value = "";
      gameObject.results.innerHTML = "";
      gameObject.counter = 0;
      gameObject.counter2 = 0;
    }
  }
  // Minimun And Maximum Number Condition
  if (gameObject.numInput.value > 80) {
    gameObject.results.innerHTML = "Number Must Not Be More Than 80";
    gameObject.computerSpan.innerHTML = 0;
    gameObject.userSpan.innerHTML = 0;
    gameObject.numInput.value = "";
    gameObject.counter = 0;
    gameObject.counter2 = 0;
  } else if (gameObject.numInput.value < 0) {
    gameObject.results.innerHTML = "Number Must Not Be Less Than 0";
    gameObject.computerSpan.innerHTML = 0;
    gameObject.userSpan.innerHTML = 0;
    gameObject.numInput.value = "";
    gameObject.counter = 0;
    gameObject.counter2 = 0;
  }
};
// Ending Generated Numbers Game
// start Calculator

let calcBtn = Array.from(document.querySelectorAll(".button"));
let display = document.querySelector(".display");
let equal = document.getElementById("special");

calcBtn.map((btn) => {
  btn.onclick = function (e) {
    switch (e.target.innerHTML) {
      // On Clicking C Button
      case "C":
        display.innerHTML = "";
        break;
      // On Clicking ← Button
      case "←":
        display.innerHTML = display.innerHTML.slice(0, -1);
        break;
      // On Clicking = Button
      case "=":
        // If Error Occured
        try {
          display.innerHTML = eval(display.innerHTML);
        } catch {
          display.innerHTML = "Math Error!";
        }
        break;
      default:
        display.innerHTML += e.target.innerHTML;
    }
  };
});

// End Calculator
// Scroll To Top Btn

let scrollBtn = document.querySelector(".scroll");
window.onscroll = function () {
  if (window.scrollY >= 250) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.onclick = function () {
  window.scrollTo({
    top: "0",
    behavior: "smooth",
  });
};
//  What Is My Age Generator

let inp = document.querySelectorAll("section input")[0];
let sendBTN = document.querySelectorAll("section input")[1];
let theResults = document.querySelector(".theResults");
let AgeSelection = document.querySelector("#UnitsOfAge");
sendBTN.onclick = function () {
  let diff = new Date() - new Date(inp.value);
  if (new Date(inp.value) == "Invalid Date") {
    theResults.innerHTML =
      "Invalid Date, Please Make Sure Of Typing Valid Date";
  } else if (diff < 0) {
    theResults.innerHTML = `Date Of Birth Needs to be Earlier Than Current date`;
  } else if (AgeSelection.value == "Years") {
    theResults.innerHTML = `Your Age In Years Is ${(
      diff /
      1000 /
      60 /
      60 /
      24 /
      365
    ).toFixed(2)} Year`;
  } else if (AgeSelection.value == "Months") {
    theResults.innerHTML = `Your Age In Months Is ${(
      diff /
      1000 /
      60 /
      60 /
      24 /
      30
    ).toFixed(2)} Month`;
  } else if (AgeSelection.value == "Days") {
    theResults.innerHTML = `Your Age In Days Is ${(
      diff /
      1000 /
      60 /
      60 /
      24
    ).toFixed(2)} Day`;
  } else if (AgeSelection.value == "Hours") {
    theResults.innerHTML = `Your Age In Hours Is ${(
      diff /
      1000 /
      60 /
      60
    ).toFixed(2)} Hour`;
  } else if (AgeSelection.value == "Minutes") {
    theResults.innerHTML = `Your Age In Minutes Is ${(diff / 1000 / 60).toFixed(
      2
    )} Minute`;
  } else if (AgeSelection.value == "Seconds") {
    theResults.innerHTML = `Your Age In Seconds Is ${(diff / 1000).toFixed(
      2
    )} Second`;
  }
};
