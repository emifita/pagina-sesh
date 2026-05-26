const searchButton = document.getElementById("searchButton") 
import searchMusic from "./modules/searchMusic.js";

// Main application
searchButton.addEventListener('click', (ev)=>{
    ev.preventDefault()

    searchMusic()
})








