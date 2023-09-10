// JavaScript for generating color palettes

// A list of good color palettes
const colorPalettes = [
    // Palette 1
    ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'],
    // Palette 2
    ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F'],
    // Palette 3
    ['#343434', '#767676', '#C4C4C4', '#EFEFEF', '#FFFFFF'],
    // Palette 4
    ['#0E4A86', '#4DA8DA', '#85C7F2', '#C1E1FC', '#E7F6FF'],
    // Palette 5
    ['#FF6B6B', '#FFE066', '#6B4226', '#D9BF77', '#ACD8AA'],
    // Palette 6
    ['#FFD6BA', '#FFAAA6', '#FF8A8A', '#FF7A7A', '#FF5252'],
    // Palette 7
    ['#FF6B6B', '#FFE66D', '#3F88C5', '#56E39F', '#F76C5E'],
    // Palette 8
    ['#FD3A69', '#E95880', '#B967A4', '#7E6C92', '#454E59'],
    // Palette 9
    ['#FFFB46', '#80D081', '#47B6AC', '#F19F4D', '#FF6961'],
    // Palette 10
    ['#081C15', '#1B4332', '#3DCCC7', '#5F6C7B', '#ACC6AA'],
    // Palette 11
    ['#2E2E2E', '#3E9A8C', '#F4A261', '#E76F51', '#C75757'],
    // Palette 12
    ['#AB83A1', '#EDCDC2', '#FFD3B5', '#F49D6E', '#A7897B'],
    // Palette 13
    ['#007BA7', '#FFF05A', '#FF8C42', '#F06166', '#8A296B'],
    // Palette 14
    ['#F9EBEA', '#D5DBDB', '#ABB2B9', '#85929E', '#34495E'],
    // Palette 15
    ['#D9BF77', '#DB6400', '#A1230E', '#F5D6C6', '#F0A500'],
    // Palette 16
    ['#ECEFF1', '#B0BEC5', '#78909C', '#546E7A', '#455A64'],
    // Palette 17
    ['#CB997E', '#DDA15E', '#E0DAD1', '#264653', '#2A9D8F'],
    // Palette 18
    ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'],
    // Palette 19
    ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'],
    // Palette 20
    ['#03045E', '#023E8A', '#0077B6', '#0096C7', '#00B4D8'],
    // Palette 21
    ['#FF6B6B', '#F4A261', '#E76F51', '#2A9D8F', '#264653'],
    // Palette 22
    ['#F72585', '#B5179E', '#7209B7', '#560BAD', '#480CA8'],
    // Palette 23
    ['#3A86FF', '#70A4DD', '#E9C46A', '#F4A261', '#E76F51'],
    // Palette 24
    ['#E63946', '#F1FAEE', '#A8DADC', '#1D3557', '#457B9D'],
    // Palette 25
    ['#2A9D8F', '#F4A261', '#E76F51', '#264653', '#E9C46A'],
    // Palette 26
    ['#FF9A8B', '#FDCB92', '#FDE5A7', '#9DE0AD', '#6A0572'],
    // Palette 27
    ['#343434', '#767676', '#C4C4C4', '#EFEFEF', '#FFFFFF'],
    // Palette 28
    ['#E63946', '#F1FAEE', '#A8DADC', '#1D3557', '#457B9D'],
    // Palette 29
    ['#3A86FF', '#70A4DD', '#E9C46A', '#F4A261', '#E76F51'],
    // Palette 30
    ['#FF6B6B', '#F4A261', '#E76F51', '#2A9D8F', '#264653'],
    // Palette 31
    ['#F72585', '#B5179E', '#7209B7', '#560BAD', '#480CA8'],
    // Palette 32
    ['#CB997E', '#DDA15E', '#E0DAD1', '#264653', '#2A9D8F'],
    // Palette 33
    ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'],
    // Palette 34
    ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'],
    // Palette 35
    ['#03045E', '#023E8A', '#0077B6', '#0096C7', '#00B4D8'],
    // Palette 36
    ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'],
    // Palette 37
    ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F'],
    // Palette 38
    ['#343434', '#767676', '#C4C4C4', '#EFEFEF', '#FFFFFF'],
    // Palette 39
    ['#0E4A86', '#4DA8DA', '#85C7F2', '#C1E1FC', '#E7F6FF'],
    // Palette 40
    ['#FF6B6B', '#FFE066', '#6B4226', '#D9BF77', '#ACD8AA'],
    // Palette 41
    ['#FFD6BA', '#FFAAA6', '#FF8A8A', '#FF7A7A', '#FF5252'],
    // Palette 42
    ['#FF6B6B', '#FFE66D', '#3F88C5', '#56E39F', '#F76C5E'],
    // Palette 43
    ['#FD3A69', '#E95880', '#B967A4', '#7E6C92', '#454E59'],
    // Palette 44
    ['#FFFB46', '#80D081', '#47B6AC', '#F19F4D', '#FF6961'],
    // Palette 45
    ['#081C15', '#1B4332', '#3DCCC7', '#5F6C7B', '#ACC6AA'],
    // Palette 46
    ['#2E2E2E', '#3E9A8C', '#F4A261', '#E76F51', '#C75757'],
    // Palette 47
    ['#AB83A1', '#EDCDC2', '#FFD3B5', '#F49D6E', '#A7897B'],
    // Palette 48
    ['#007BA7', '#FFF05A', '#FF8C42', '#F06166', '#8A296B'],
    // Palette 49
    ['#F9EBEA', '#D5DBDB', '#ABB2B9', '#85929E', '#34495E'],
    // Palette 50
    ['#D9BF77', '#DB6400', '#A1230E', '#F5D6C6', '#F0A500']
];
  
document.getElementById('generate-palette').addEventListener('click', generatePalette);

function generatePalette() {
  // Generate random colors or use a color palette generation library
  const colors = getRandomPalette(); // Adjust as needed

  // Display the generated colors in the color palette div
  const colorPalette = document.getElementById('color-palette');
  colorPalette.innerHTML = '';

  colors.forEach((color) => {
    let colorBox = document.createElement('div');
    let colorCode = document.createElement('p');
    colorCode.innerText = color;
    colorCode.classList.add('color-code');
    colorBox.style.backgroundColor = color;
    colorBox.classList.add('color-box');
    colorBox.appendChild(colorCode);
    colorPalette.appendChild(colorBox);
  });
}

let previousPaletteIndex = -1;

function getRandomPalette() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * colorPalettes.length);
  } while (randomIndex === previousPaletteIndex); // Keep generating until it's different
  
  previousPaletteIndex = randomIndex;
  return colorPalettes[randomIndex];
}




// JavaScript for typography controls
const fontSizeSlider = document.getElementById('font-size-slider');
const fontSizeValue = document.getElementById('font-size-value');
const fontWeightSlider = document.getElementById('font-weight-slider');
const fontWeightValue = document.getElementById('font-weight-value');
const fontStyleSelect = document.getElementById('font-style-select');
const liveTextInput = document.getElementById('live-text-input');
const liveTextOutput = document.getElementById('live-text-output');
const fontFamilySelect = document.getElementById('font-family-select');
const sampleText = document.getElementById('sample-text');

fontSizeSlider.addEventListener('input', updateTypography);
fontWeightSlider.addEventListener('input', updateTypography);
fontStyleSelect.addEventListener('change', updateTypography);
liveTextInput.addEventListener('input', updateLiveText);
fontFamilySelect.addEventListener('change', updateFontFamily);

function updateTypography() {
  const fontSize = fontSizeSlider.value + 'px';
  const fontWeight = fontWeightSlider.value;
  const fontStyle = fontStyleSelect.value;

  liveTextOutput.style.fontSize = fontSize;
  liveTextOutput.style.fontWeight = fontWeight;
  liveTextOutput.style.fontStyle = fontStyle;

  fontSizeValue.textContent = fontSize;
  fontWeightValue.textContent = fontWeight;
}

function updateLiveText() {
  liveTextOutput.textContent = liveTextInput.value || 'Your text will appear here.';
}

function updateFontFamily() {
  const selectedFontFamily = fontFamilySelect.value;
  liveTextOutput.style.fontFamily = selectedFontFamily;
}

// Open when someone clicks on the span element
function openNav() {
  document.getElementById("menu").style.width = "100%";
  document.getElementById("header-nav").style.display = "block";
  
}

// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
  document.getElementById("header-nav").style.display = "none";
  document.getElementById("menu").style.width = "0%";
}

//  Close when you click on a  header nav-item
const navItems = document.getElementsByClassName("hn");
let navItemsArray = Array.from(navItems);
navItemsArray.forEach((navItem) => {
  navItem.addEventListener('click', closeNav);
})
