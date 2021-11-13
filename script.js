const actualGradient = document.querySelector("h3");
const inptColor1 = document.getElementById("inpt-color1");
const inptColor2 = document.getElementById("inpt-color2");
const body = document.getElementById("gradient");
const btnRandomColor = document.getElementById("random-color");

randomNumber = () => {
  const randValue = Math.floor(Math.random() * 256);
  return randValue;
};

setGradient = () => {
  body.style.background = `
    linear-gradient(to right, ${inptColor1.value}, ${inptColor2.value})
  `;
  actualGradient.textContent = `${body.style.background};`;
};

setElementBackground = (element) => {
  element.style.background = `
    linear-gradient(to right, 
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

getRgbColor = () => {
  let red1 = parseInt(getRgbValue(btnRandomColor, 1).split(",")[0]);
  let green1 = parseInt(getRgbValue(btnRandomColor, 1).split(",")[1]);
  let blue1 = parseInt(getRgbValue(btnRandomColor, 1).split(",")[2]);
  let red2 = parseInt(getRgbValue(btnRandomColor, 2).split(",")[0]);
  let green2 = parseInt(getRgbValue(btnRandomColor, 2).split(",")[1]);
  let blue2 = parseInt(getRgbValue(btnRandomColor, 2).split(",")[2]);

  return [
    `#${rgbToHex(red1)}${rgbToHex(green1)}${rgbToHex(blue1)}`,
    `#${rgbToHex(red2)}${rgbToHex(green2)}${rgbToHex(blue2)}`,
  ];
};

inptColor1.addEventListener("input", setGradient);
inptColor2.addEventListener("input", setGradient);
setElementBackground(btnRandomColor);

btnRandomColor.addEventListener("click", () => {
  body.style.background = `${btnRandomColor.style.background}`;
  actualGradient.textContent = `${body.style.background};`;
  inptColor1.value = getRgbColor()[0];
  inptColor2.value = getRgbColor()[1];
  btnRandomColor.style.background = setElementBackground(btnRandomColor);
});
