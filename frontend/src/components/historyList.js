export default async function historyList(){
    const ul = document.querySelector(".history-list")
    try{
        // Fetch persisted entries each time the panel opens so it reflects recent removals.
        const response = await fetch(`http://localhost:3000/history`)
        if (!response.ok) throw new Error("Não foi possível carregar o histórico.")
        const history = await response.json()
        ul.replaceChildren()
        if(history.length > 0){
            for(let i = 0; i<history.length; i++){

                const tag = document.createElement("li")
                tag.classList.add("history-item")

                const musicName = document.createElement("p")
                musicName.classList.add("history-item-name")
                musicName.innerText = history[i].music

                const buttonRemove = document.createElement("button")
                buttonRemove.type = "button"
                buttonRemove.setAttribute("aria-label", `Remover ${history[i].music} do histórico`)
                buttonRemove.classList.add("history-remove-button")


                const trashImage = document.createElement("img")
                trashImage.src = "/img/lixeira.jpg"
                trashImage.alt = ""
                trashImage.classList.add("trash-image")

                buttonRemove.appendChild(trashImage)
                buttonRemove.addEventListener("click", async () => {
                    try {
                        // The backend identifies the entry by its current array position.
                        const removeResponse = await fetch(`http://localhost:3000/history/${i}`, { method: "DELETE" })
                        if (!removeResponse.ok) throw new Error("Não foi possível remover a música do histórico.")
                        await historyList()
                    } catch (error) {
                        console.error(error)
                        alert(error.message)
                    }
                })

                tag.append(musicName, buttonRemove)
                ul.appendChild(tag)

            }
        }

    }catch(error){
        console.error(error)
        alert(error.message)
    }
}
