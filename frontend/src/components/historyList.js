import CreateTag from "../utils/CreateTag"

export default async function historyList(){
    const ul = document.querySelector(".history-list")
    try{
        const response = await fetch(`http://localhost:3000/history`)
        const history = await response.json()
        if(history.length > 0){
            for(let i = 0; i<history.length; i++){
                const tag = new CreateTag("li", "history-item", history[i].music)
                ul.appendChild(tag.element)
            }
        }
    }catch(error){
        console.log(error)
        alert(error)
    }
}