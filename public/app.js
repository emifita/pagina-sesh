import searchMusic from "./modules/searchMusic.js";
import changePlaceHolder from "./modules/changePlaceHolder.js";
import loadingButton from "./modules/loadingButton.js";
const searchButton = document.getElementById("searchButton") 
let music = document.getElementById("musicInput");

// Main application
searchButton.addEventListener('click', (ev)=>{
    ev.preventDefault()

    loadingButton(searchButton)
    setTimeout(()=>{
        changePlaceHolder(music)
        searchMusic(music)
        music.value = ''
    },4000)
})








