import playVideo from "./playVideo.js"

//switch video by click on a music title in music list  
export default function clickVideo(){
    const clickButton = document.querySelectorAll(".music")
        clickButton.forEach((element)=>{
            element.addEventListener('click', (ev)=>{
                
            ev.preventDefault()

            playVideo(ev.target.id)
})
        })
        
}