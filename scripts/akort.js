const notes = [
  "La (A)",
  "La Diyez (A#)",
  "Si (B)",
  "Do (C)",
  "Do Diyez (C#)",
  "Re (D)",
  "Re Diyez (D#)",
  "Mi (E)",
  "Fa (F)",
  "Fa Diyez (F#)",
  "Sol (G)",
  "Sol Diyez (G#)",
];

//selected root is A at the beginning
let selectedRoot = 0;

//call the function to make A button bold
boldSelectedRoot(selectedRoot);

//make the calculation to show tuning notes, it is called onclick of the root selector button
function tunerDisplay (selectedRoot) {
let middleStrings = (selectedRoot + 10) % 12;
let bottomStrings = (selectedRoot + 5) % 12;
document.querySelector('.js-bottom-strings').innerHTML = `Alt - ${notes [bottomStrings]}`;
document.querySelector('.js-middle-strings').innerHTML = `Orta - ${notes [middleStrings]}`;
document.querySelector('.js-top-strings').innerHTML = `Üst - ${notes [selectedRoot]}`;
}

tunerDisplay(selectedRoot);

//make selected root button bold and remove bold from previously selected buttons
function boldSelectedRoot (selectedRoot) {
  document.querySelector(`.js-button-${selectedRoot}`).classList.add('selected-root-bold');
  if (selectedRoot !== 0) {document.querySelector('.js-button-0').classList.remove('selected-root-bold');}
  if (selectedRoot !== 2) {document.querySelector('.js-button-2').classList.remove('selected-root-bold');}
  if (selectedRoot !== 3) {document.querySelector('.js-button-3').classList.remove('selected-root-bold');}
  if (selectedRoot !== 5) {document.querySelector('.js-button-5').classList.remove('selected-root-bold');}
  if (selectedRoot !== 7) {document.querySelector('.js-button-7').classList.remove('selected-root-bold');}
  if (selectedRoot !== 8) {document.querySelector('.js-button-8').classList.remove('selected-root-bold');}
  if (selectedRoot !== 10) {document.querySelector('.js-button-10').classList.remove('selected-root-bold');}
}


