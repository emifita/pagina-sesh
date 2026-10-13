import CreateTag from "../utils/CreateTag";

// Rebuild the alternatives list from the latest search response.
export default function musicList(dataList){
    const docList = document.getElementById("musicList");
    docList.innerHTML = '';

    // Store each video ID on its link so clickVideo can play that selection.
    dataList.forEach((e)=>{
        let element = new CreateTag('li', 'music list')

        let titleLink = new CreateTag('a', 'music-list-item', e.snippet.title, e.id.videoId)

        element.append(titleLink.element)
        docList.appendChild(element.element)
    })
}
