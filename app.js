const searchButton = document.getElementById("searchButton") 
import SearchMusic from "./modules/SearchMusic.js";

searchButton.addEventListener('click', (ev)=>{

    ev.preventDefault()
    SearchMusic()
})






