import playVideo from "./playVideo.js"

// Attach selection handlers after each search list is rendered.
export default function clickVideo(){
    const clickButton = document.querySelectorAll(".music")
        clickButton.forEach((element)=>{
            element.addEventListener('click', (ev)=>{
                
            // Prevent link navigation and replace the player with the selected video.
            ev.preventDefault()

            playVideo(ev.target.id)
})
        })
        
}
