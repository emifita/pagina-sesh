// Show other music options 
export default function musicList(dataList){
    let docList = document.getElementById("musicList");
    docList.innerHTML = '';

    //list first 5 videos results bellow the number 0 of the list 
    dataList.forEach((e)=>{
        let element = document.createElement('li');
        element.classList.add('music', 'list');

        let titleLink = document.createElement('a')
        titleLink.id = e.id.videoId
        titleLink.textContent = e.snippet.title


        element.appendChild(titleLink)
        docList.appendChild(element)
    })
}
