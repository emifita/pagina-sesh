import CreateTag from "../utils/CreateTag";

// Show other music options
export default function musicList(dataList){
    const docList = document.getElementById("musicList");
    docList.innerHTML = '';

    //list first 5 videos results bellow the number 0 of the list 
    dataList.forEach((e)=>{
        let element = new CreateTag('li', 'music list')

        let titleLink = new CreateTag('a', 'music-list-item', e.snippet.title, e.id.videoId)

        element.append(titleLink.element)
        docList.appendChild(element.element)
    })
}
