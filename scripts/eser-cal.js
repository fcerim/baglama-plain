import { allSongs} from "../songs/songs.js";

let selectedSong = {}; //define a variable to save selected song

//Generate HTML for song buttons in table
let songSelectorTable = document.querySelector('.song-list-table').innerHTML;

function writeSongButtonsTable (item) {
  let songButtonTable = `<tr id="${item.id}"><td class="song-table-title">${item.title}</td><td class="song-table-region">${item.region}</td><td class="song-table-difficulty">${item.difficulty}</td></tr>`;
  songSelectorTable = songSelectorTable + songButtonTable;
  document.querySelector('.song-list-table').innerHTML = songSelectorTable;
} 
allSongs.forEach(writeSongButtonsTable); 


//Add Event Listener for song buttons
function selectSong (item) {
  document.querySelector(`#${item.id}`).addEventListener('click', function(){selectedSong = item; console.log(selectedSong); localStorage.setItem('selectedSong', JSON.stringify(selectedSong)); window.location.href = "eser-detay.html";})
}
allSongs.forEach(selectSong);



//Keep selectedSong info permanently
//localStorage.setItem('selectedSong', JSON.stringify(selectedSong));

/*function (i)
let songButtons = document.querySelectorAll('.song-selection-menu buttons');
songButtons.forEach()
*/

//document.querySelectorAll('.song-selection-menu button').forEach(function(){addEventListener('click', function(){window.location.href = "eser-detay.html";})})

//onclick="selectedSong=${item};"

//window.location.href = "sarki-detay.html";

//onclick="selectedSong=${item.varName}"