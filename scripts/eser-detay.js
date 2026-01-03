import { allSongs} from "../songs/songs.js";

//get song id info from url
// Support both old query parameter format and new path-based format
let urlParamId;
const urlKey = window.location.search;
const urlParams = new URLSearchParams(urlKey);
const queryParamId = urlParams.get('songId');

if (queryParamId) {
  // Old format: eser-detay.html?songId=izmirin-kavaklari
  urlParamId = queryParamId;
} else {
  // New format: eser-detay/izmirin-kavaklari.html
  const pathname = window.location.pathname;
  const pathParts = pathname.split('/');
  const fileName = pathParts[pathParts.length - 1]; // Get the last part (e.g., "izmirin-kavaklari.html")
  urlParamId = fileName.replace('.html', ''); // Remove .html extension
}

//find selectedSong using the id value from url
let selectedSong = allSongs.find((obj) => obj['id'] === urlParamId);

//change page title & meta description according to song name
let metaDescription = document.querySelector('meta[name="description"]');
let description = `Bağlama ile ${selectedSong.title} türküsü nasıl çalınır? ${selectedSong.secondTitle} nasıl çalınır? ${selectedSong.title} notaları, ${selectedSong.title} türküsü sözleri`;
metaDescription.content = description;
document.title = `${selectedSong.title} | Bağlama Çal`;

//define notes
const notes = ['Al','Bbl','Bb2l','Bl','Cl','C#3l','C#l','Dl','Ebl','Eb2l','El','Fl','F#3l','F#l','Gl','Abl','Ab2l','Am','Bbm','Bb2m','Bm','Cm','C#3m','C#m','Dm','Ebm','Eb2m','Em','Fm','F#3m','F#m','Gm','Abm','Ab2m','Ah','Bbh','Bb2h','Bh','Ch','C#3h','C#h','Dh','Ebh','Eb2h','Eh','Fh','F#3h','F#h','Gh','Abh','Ab2h','-','|',':|','|:',':|:'];
const noteNames = ['La', 'Si&flat;','Si&flat;<sup>2</sup>', 'Si', 'Do','Do&sharp;<sup>3</sup>','Do&sharp;','Re','Mi&flat;','Mi&flat;<sup>2</sup>','Mi','Fa','Fa&sharp;<sup>3</sup>','Fa&sharp;','Sol','La&flat;','La&flat;<sup>2</sup>','La', 'Si&flat;','Si&flat;<sup>2</sup>', 'Si', 'Do','Do&sharp;<sup>3</sup>','Do&sharp;','Re','Mi&flat;','Mi&flat;<sup>2</sup>','Mi','Fa','Fa&sharp;<sup>3</sup>','Fa&sharp;','Sol','La&flat;','La&flat;<sup>2</sup>','La', 'Si&flat;','Si&flat;<sup>2</sup>', 'Si', 'Do','Do&sharp;<sup>3</sup>','Do&sharp;','Re','Mi&flat;','Mi&flat;<sup>2</sup>','Mi','Fa','Fa&sharp;<sup>3</sup>','Fa&sharp;','Sol','La&flat;','La&flat;<sup>2</sup>','-','|',':|','|:',':|:'];


//define audio files
let audioAl = new Audio('http://www.freesound.org/data/previews/39/39172_35187-lq.mp3');
let audioBbl = new Audio('http://www.freesound.org/data/previews/39/39173_35187-lq.mp3');
let audioBb2l = new Audio('http://www.freesound.org/data/previews/39/39173_35187-lq.mp3');
let audioBl = new Audio('http://www.freesound.org/data/previews/39/39174_35187-lq.mp3');
let audioCl = new Audio('http://www.freesound.org/data/previews/39/39175_35187-lq.mp3');
let audioCs3l = new Audio('http://www.freesound.org/data/previews/39/39176_35187-lq.mp3');
let audioCsl = new Audio('http://www.freesound.org/data/previews/39/39176_35187-lq.mp3');
let audioDl = new Audio('http://www.freesound.org/data/previews/39/39177_35187-lq.mp3');
let audioEbl = new Audio('http://www.freesound.org/data/previews/39/39178_35187-lq.mp3');
let audioEb2l = new Audio('http://www.freesound.org/data/previews/39/39178_35187-lq.mp3');
let audioEl = new Audio('http://www.freesound.org/data/previews/39/39179_35187-lq.mp3');
let audioFl = new Audio('http://www.freesound.org/data/previews/39/39180_35187-lq.mp3');
let audioFs3l = new Audio('http://www.freesound.org/data/previews/39/39181_35187-lq.mp3');
let audioFsl = new Audio('http://www.freesound.org/data/previews/39/39181_35187-lq.mp3');
let audioGl = new Audio('https://cdn.freesound.org/previews/717/717204_15530819-lq.mp3');
let audioAbl = new Audio('https://cdn.freesound.org/previews/717/717179_15530819-lq.mp3');
let audioAb2l = new Audio('https://cdn.freesound.org/previews/717/717178_15530819-lq.mp3');
let audioA = new Audio('https://cdn.freesound.org/previews/717/717175_15530819-lq.mp3');
let audioBb = new Audio('https://cdn.freesound.org/previews/717/717182_15530819-lq.mp3');
let audioBb2 = new Audio('https://cdn.freesound.org/previews/717/717183_15530819-lq.mp3');
let audioB = new Audio('https://cdn.freesound.org/previews/717/717181_15530819-lq.mp3');
let audioC = new Audio('https://cdn.freesound.org/previews/717/717187_15530819-lq.mp3');
let audioCs3 = new Audio('https://cdn.freesound.org/previews/717/717190_15530819-lq.mp3');
let audioCs = new Audio('https://cdn.freesound.org/previews/717/717189_15530819-lq.mp3');
let audioD = new Audio('https://cdn.freesound.org/previews/719/719281_15530819-lq.mp3');
let audioEb = new Audio('https://cdn.freesound.org/previews/717/717196_15530819-lq.mp3');
let audioEb2 = new Audio('https://cdn.freesound.org/previews/717/717197_15530819-lq.mp3');
let audioE = new Audio('https://cdn.freesound.org/previews/717/717195_15530819-lq.mp3');
let audioF = new Audio('https://cdn.freesound.org/previews/717/717200_15530819-lq.mp3');
let audioFs3 = new Audio('https://cdn.freesound.org/previews/717/717202_15530819-lq.mp3');
let audioFs = new Audio('https://cdn.freesound.org/previews/717/717201_15530819-lq.mp3');
let audioG = new Audio('https://cdn.freesound.org/previews/717/717203_15530819-lq.mp3');
let audioAb = new Audio('https://cdn.freesound.org/previews/717/717176_15530819-lq.mp3');
let audioAb2 = new Audio('https://cdn.freesound.org/previews/717/717177_15530819-lq.mp3');
let audioAh = new Audio('https://cdn.freesound.org/previews/717/717180_15530819-lq.mp3');
let audioBbh = new Audio('https://cdn.freesound.org/previews/717/717185_15530819-lq.mp3');
let audioBb2h = new Audio('https://cdn.freesound.org/previews/717/717184_15530819-lq.mp3');
let audioBh = new Audio('https://cdn.freesound.org/previews/717/717186_15530819-lq.mp3');
let audioCh = new Audio('https://cdn.freesound.org/previews/717/717188_15530819-lq.mp3');
let audioCs3h = new Audio('https://cdn.freesound.org/previews/717/717191_15530819-lq.mp3');
let audioCsh = new Audio('https://cdn.freesound.org/previews/717/717192_15530819-lq.mp3');
let audioDh = new Audio('https://cdn.freesound.org/previews/717/717194_15530819-lq.mp3');
let audioEbh = new Audio('https://cdn.freesound.org/previews/717/717198_15530819-lq.mp3');
let audioEb2h = new Audio('https://cdn.freesound.org/previews/717/717198_15530819-lq.mp3');
let audioEh = new Audio('https://cdn.freesound.org/previews/717/717199_15530819-lq.mp3');
let audioFh = new Audio('http://www.freesound.org/data/previews/39/39205_35187-lq.mp3');
let audioFs3h = new Audio('http://www.freesound.org/data/previews/39/39206_35187-lq.mp3');
let audioFsh = new Audio('http://www.freesound.org/data/previews/39/39206_35187-lq.mp3');
let audioGh = new Audio('http://www.freesound.org/data/previews/39/39207_35187-lq.mp3');
let audioAbh = new Audio('http://www.freesound.org/data/previews/39/39208_35187-lq.mp3');
let audioAb2h = new Audio('http://www.freesound.org/data/previews/39/39208_35187-lq.mp3');
let audioSilence = new Audio('https://cdn.freesound.org/previews/472/472955_6142149-lq.mp3');

//create an array of the audio files
const audioFiles = [audioAl,audioBbl,audioBb2l,audioBl,audioCl,audioCs3l,audioCsl,audioDl,audioEbl,audioEb2l,audioEl,audioFl,audioFs3l,audioFsl,audioGl,audioAbl,audioAb2l,audioA,audioBb,audioBb2,audioB,audioC,audioCs3,audioCs,audioD,audioEb,audioEb2,audioE,audioF,audioFs3,audioFs,audioG,audioAb,audioAb2,audioAh,audioBbh,audioBb2h,audioBh,audioCh,audioCs3h,audioCsh,audioDh,audioEbh,audioEb2h,audioEh,audioFh,audioFs3h,audioFsh,audioGh,audioAbh,audioAb2h,audioSilence];

//PLAYING SONG
let intervalID = 0;
let selectedBeat = 0;
let indexOfNoteInNotes = 0;
let repeatBegin = 0;
let applyRepeat = true;

//Function to play in intervals
function playSong(){
  
  clearInterval(intervalID); //interval is cleared each time to change the interval duration
  
  //reset the audio before each beat
  audioFiles[indexOfNoteInNotes].pause();
  audioFiles[indexOfNoteInNotes].currentTime = 0; 

  //reset the highlights before each beat
  document.querySelectorAll('.js-note').forEach(function(value){value.classList.remove('selected-note-highlight');}); //remove highlight from all notes each time to highlight only the active note
  document.querySelectorAll('.frets-container button').forEach(function(value){value.classList.remove('selected-fret-visible');}); //remove highlight from all frets to highlight only the active fret
  document.querySelectorAll('.long-frets-container button').forEach(function(value){value.classList.remove('selected-fret-visible');}); //LongNeck - remove highlight from all frets to highlight only the active fret

  let selectedNote = selectedSong.notes[selectedBeat]; //the note in the current beat
  
  //bar lines and repeat controls
  if (selectedNote === '|') {selectedBeat++;selectedNote = selectedSong.notes[selectedBeat];} //don't play bar endings and assign selectedNote again if it has to be skipped
  if (selectedNote === '|:') {selectedBeat++; repeatBegin = selectedBeat; applyRepeat = true;}
  if (selectedNote === ':|') {
    if (applyRepeat === true) {
      selectedBeat = repeatBegin;
      applyRepeat = false;
    }
    else selectedBeat++;
  }
  if (selectedNote === ':|:') {
    if (applyRepeat === true) {
      selectedBeat = repeatBegin;
      applyRepeat = false;
    }
    else {
      selectedBeat++; 
      repeatBegin = selectedBeat; 
      applyRepeat = true;
    }
  }
  selectedNote = selectedSong.notes[selectedBeat];
  
  //exit function at the last note
  if (selectedBeat === selectedSong.notes.length) {selectedBeat=0; repeatBegin = 0; applyRepeat = true; return;}

  indexOfNoteInNotes = notes.indexOf(selectedNote);
  audioFiles[indexOfNoteInNotes].play(); //play the corresponding audio file
  document.querySelector(`.js-note-${selectedBeat}`).classList.add('selected-note-highlight'); //highlight the note in notation
  if(selectedNote !== '-'){
    document.querySelector(`.frets-container .fret-${indexOfNoteInNotes}`).classList.add('selected-fret-visible'); //show the fret on baglama
    document.querySelector(`.long-frets-container .fret-${indexOfNoteInNotes}`).classList.add('selected-fret-visible'); //LongNeck - show the fret on baglama
  } 
  intervalID = setInterval(playSong, selectedSong.beats[selectedBeat] * 60000 / (selectedSong.tempo*tempo));
  selectedBeat++; //move to next beat
  //if (selectedBeat === selectedSong.notes.length || selectedBeat === selectedSong.notes.length+1 || selectedBeat === selectedSong.notes.length+2) {clearInterval(intervalID); selectedBeat = 0;}
}

//Play, Pause, Stop button events
const buttonPlay = document.querySelector('.js-button-play');
buttonPlay.addEventListener("click", playSong);

const buttonPause = document.querySelector('.js-button-pause');
buttonPause.addEventListener("click", function() {clearInterval(intervalID);});

const buttonStop = document.querySelector('.js-button-stop');
buttonStop.addEventListener("click", stopPlayback);
function stopPlayback () {
  clearInterval(intervalID);
  selectedBeat = 0;
  repeatBegin = 0;
  applyRepeat = true; 
  document.querySelectorAll('.js-note').forEach(function(value){value.classList.remove('selected-note-highlight');}); 
  document.querySelectorAll('.frets-container button').forEach(function(value){value.classList.remove('selected-fret-visible');});
  document.querySelectorAll('.long-frets-container button').forEach(function(value){value.classList.remove('selected-fret-visible');});
}


//GENERATING HTML
//Write Title
document.querySelector('.main-title').innerHTML = selectedSong.title;


//Writing Beat Values
let symbols = [' ','&#8857','&#183','&#9475;','&#9475;.','&#9485;','&#9485;.','&#9489;','&#9554;','&#9554;.','&#9557;'];
let beatValues = [0,3,2,1,3/2,1/2,3/4,1/21,1/4,3/8,1/41]
function writeBeatValues(item) {
  let indexOfBeatValue = beatValues.indexOf(item);
  return symbols[indexOfBeatValue];
}

//Writing Note Names of the Selected Song
function writeNotes(item, index) {
  let html = document.querySelector('.beats-notes-lyrics').innerHTML;
  let indexOfNoteInNotes = notes.indexOf(item);
  //let noteName = `<div class="js-note-${index} js-note"> ${noteNames[indexOfNoteInNotes]}</div>`; //Only NoteName
  let noteName = `<div class="each-beat"><div class="beat-values">${writeBeatValues(selectedSong.beats[index])}</div><div class="js-note-${index} js-note"> ${noteNames[indexOfNoteInNotes]}</div><div class=lyrics>${selectedSong.lyrics[index]}</div></div>`; //Note Name and Lyrics Together
  html = html+noteName;
  document.querySelector('.beats-notes-lyrics').innerHTML = html;
}
selectedSong.notes.forEach(writeNotes);

//Manually selecting the beats to play from. Selected note is highlighted in notation and on the keyboard
function selectNoteToPlay(item, index) {
  document.querySelector(`.js-note-${index}`).addEventListener('click', function(){
    selectedBeat = index;
    let selectedNote = selectedSong.notes[selectedBeat];
    indexOfNoteInNotes = notes.indexOf(selectedNote);
    document.querySelectorAll('.js-note').forEach(function(value){value.classList.remove('selected-note-highlight');});
    document.querySelector(`.js-note-${selectedBeat}`).classList.add('selected-note-highlight');
    document.querySelectorAll('.frets-container button').forEach(function(value){value.classList.remove('selected-fret-visible');});
    document.querySelectorAll('.long-frets-container button').forEach(function(value){value.classList.remove('selected-fret-visible');});
    document.querySelector(`.frets-container .fret-${indexOfNoteInNotes}`).classList.add('selected-fret-visible');
    document.querySelector(`.long-frets-container .fret-${indexOfNoteInNotes}`).classList.add('selected-fret-visible');
  });
}
selectedSong.notes.forEach(selectNoteToPlay); //add event listener for each beat of the song


//Show notation link of notaarsivleri.com
document.querySelector('.notation-link').innerHTML = `(Kaynak: <a href="${selectedSong.notation}" target="_blank" rel="noopener noreferrer">${selectedSong.notation}</a>)`;

//Show notation of the selected song from notaarsivleri.com
function showNotation(item) {
  let html = document.querySelector('.notation').innerHTML;
  let notation = `<embed src="${item.notation}" type="text/html" height="760px" width="500px"/>`;
  html = html+notation;
  document.querySelector('.notation').innerHTML = html;
}
showNotation(selectedSong);

//Show full lyrics
document.querySelector('.full-lyrics').innerHTML = selectedSong.fullLyrics;

//TEMPO SLIDER
let tempoSelector = document.getElementById("js-tempo-selector");
let output = document.getElementById("tempo-value");
output.innerHTML = `Hız: ${tempoSelector.value}%`;
let tempo = tempoSelector.value/100;
tempoSelector.oninput = function() {
  tempo = tempoSelector.value/100;
  output.innerHTML = `Hız: ${this.value}%`;
}

//SHOW THE SELECTED NECK TYPE ONLY
let shortNeckSelector = document.getElementById("short-neck");
shortNeckSelector.oninput = function() {
  if (shortNeckSelector.value === "short-neck") {
    document.querySelector(`.baglama-keyboard`).classList.remove('hide-section');
    document.querySelector(`.long-baglama-keyboard`).classList.add('hide-section');
}
}
let longNeckSelector = document.getElementById("long-neck");
longNeckSelector.oninput = function() {
  if (longNeckSelector.value === "long-neck") {
    document.querySelector(`.baglama-keyboard`).classList.add('hide-section');
    document.querySelector(`.long-baglama-keyboard`).classList.remove('hide-section');
}
}

//KEEP THE MAIN PART ON SCREEN
window.onscroll = function() {stickyMainPart(); scrollFunction();};
let mainPart = document.querySelector('.main-part');
let sticky = mainPart.offsetTop - 96; // Get the offset position of the main part
function stickyMainPart() {
  if (window.pageYOffset >= sticky) {
    mainPart.classList.add('main-part-sticky')
  } else {
    mainPart.classList.remove('main-part-sticky');
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
    document.querySelector('.banner').classList.add('banner-shrinked');
    document.querySelector('.logo').classList.add('logo-shrinked');
    document.querySelector('.title').classList.add('title-shrinked');
    document.querySelector('.subtitle').classList.add('subtitle-shrinked');
    document.querySelector('nav').classList.add('nav-shrinked');
  } 
  else {
    document.querySelector('.banner').classList.remove('banner-shrinked');
    document.querySelector('.logo').classList.remove('logo-shrinked');
    document.querySelector('.title').classList.remove('title-shrinked');
    document.querySelector('.subtitle').classList.remove('subtitle-shrinked');
    document.querySelector('nav').classList.remove('nav-shrinked');
  }
}