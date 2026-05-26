// Show other music options 

export default function musicList(dataList){
    let docList = document.getElementById("musicList");
    const data = dataList
    let counter = 0

    data.forEach(element => {
        docList.innerHTML += `<li><a>
        ${element.snippet.title}</a></li>
        `
        element.id = toString(counter++)
    });
}