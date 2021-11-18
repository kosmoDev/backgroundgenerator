const actualGradient = document.querySelector("h3");
const inptColor1 = document.getElementById("inpt-color1");
const inptColor2 = document.getElementById("inpt-color2");
const body = document.getElementById("gradient");
const btnRandomColor = document.getElementById("random-color");
const btnToRight = document.getElementById("btn-to-right");
const btnToLeft = document.getElementById("btn-to-left");
const btnToTop = document.getElementById("btn-to-top");
const btnToDown = document.getElementById("btn-to-down");

randomNumber = () => {
  const randValue = Math.floor(Math.random() * 256);
  return randValue;
};

setGradient = (side = "right") => {
  body.style.background = `
    linear-gradient(to ${side}, ${inptColor1.value}, ${inptColor2.value})
  `;
  actualGradient.textContent = `${body.style.background};`;
};

setElementBackground = (element, side = "right") => {
  element.style.background = `
    linear-gradient(to ${side}, 
    rgb(${randomNumber()},
    ${randomNumber()},
    ${randomNumber()}),
    rgb(${randomNumber()},
    ${randomNumber()},
    ${randomNumber()})
  `;
};

getRgbValue = (element, index) => {
  const rgbValue = element.style.background
    .split("rgb")
    [index].replace("(", "")
    .replace(")", "")
    .replace(/\s+/g, "")
    .trim();
  return rgbValue;
};

rgbToHex = (element) => {
  if (element <= 10 || (element > 10 && element < 16)) {
    element = "0" + element.toString(16);
    return element;
  } else {
    element = element.toString(16);
    return element;
  }
};

getRgbColor = (element = btnRandomColor) => {
  let red1 = parseInt(getRgbValue(element, 1).split(",")[0]);
  let green1 = parseInt(getRgbValue(element, 1).split(",")[1]);
  let blue1 = parseInt(getRgbValue(element, 1).split(",")[2]);
  let red2 = parseInt(getRgbValue(element, 2).split(",")[0]);
  let green2 = parseInt(getRgbValue(element, 2).split(",")[1]);
  let blue2 = parseInt(getRgbValue(element, 2).split(",")[2]);

  return [
    `#${rgbToHex(red1)}${rgbToHex(green1)}${rgbToHex(blue1)}`,
    `#${rgbToHex(red2)}${rgbToHex(green2)}${rgbToHex(blue2)}`,
  ];
};

switchColors = () => {
  // inptColor1.value = getRgbColor(body.style.backgroundColor);
  const bodyB = body.style.background;
  console.log(getRgbValue(bodyB));
};

inptColor1.addEventListener("input", () => setGradient("right"));
inptColor2.addEventListener("input", () => setGradient("right"));
setElementBackground(btnRandomColor);

btnToRight.addEventListener("click", () => {
  setGradient("right");
  switchColors();
});
btnToLeft.addEventListener("click", () => {
  setGradient("left");
  switchColors();
});
btnToTop.addEventListener("click", () => {
  setGradient("top");
});
btnToDown.addEventListener("click", () => {
  setGradient("bottom");
});

btnRandomColor.addEventListener("click", () => {
  body.style.background = `${btnRandomColor.style.background}`;
  actualGradient.textContent = `${body.style.background};`;
  inptColor1.value = getRgbColor()[0];
  inptColor2.value = getRgbColor()[1];
  btnRandomColor.style.background = setElementBackground(btnRandomColor);
});
