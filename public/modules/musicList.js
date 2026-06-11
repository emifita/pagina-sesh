// Show other music options 
export default function musicList(dataList){
    let docList = document.getElementById("musicList");

    //list first 5 videos results bellow the number 0 of the list 
    let newData = dataList.reduce((acum, element) => {
        return acum + `<li class="music list"><a id=${element.id.videoId}>
        ${element.snippet.title}</a></li>
        `
    }, '');
    docList.innerHTML = newData
}