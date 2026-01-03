import { allSongs} from "../songs/songs.js";

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
  document.querySelector(`#${item.id}`).addEventListener('click', function(){window.location.href = `eser-detay/${item.id}.html`;})
}
allSongs.forEach(selectSong);