// Show other music options 
export default function musicList(dataList){
    let docList = document.getElementById("musicList");
    const data = dataList
    let counter = 0
    
    //list first 5 videos results bellow the number 0 of the list 
    let newData = data.reduce((acum, element) => {
        return acum + `<li class="music list"><a id=${element.id.videoId}>
        ${element.snippet.title}</a></li>
        `
    }, '');
    docList.innerHTML = newData
}