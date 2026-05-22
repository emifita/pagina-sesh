const searchButton = document.getElementById("searchButton") 
import SearchMusic from "./SearchMusic.js";

searchButton.addEventListener('click', (ev)=>{

    ev.preventDefault()
    SearchMusic()
})






