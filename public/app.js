import searchMusic from "./modules/searchMusic.js";
import changePlaceHolder from "./modules/changePlaceHolder.js";
const searchButton = document.getElementById("searchButton") 
let music = document.getElementById("musicInput");

// Main application
searchButton.addEventListener('click', (ev)=>{
    ev.preventDefault()

    changePlaceHolder(music)
    searchMusic(music)
    music.value = ''
})








