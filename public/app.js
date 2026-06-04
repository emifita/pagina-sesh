const searchButton = document.getElementById("searchButton") 
import searchMusic from "./modules/searchMusic.js";
let music = document.getElementById("musicInput");

// Main application
searchButton.addEventListener('click', (ev)=>{
    ev.preventDefault()

    searchMusic(music)
    music.value = ''
})








