import PlayVideo from './PlayVideo.js'

// 
export default async function SearchMusic() {
    

    const apiKey = prompt("Digite sua API KEY");


    let musica = document.getElementById("musicInput").value;

    const url =
        `https://www.googleapis.com/youtube/v3/search?` +
        `part=snippet&type=video&maxResults=1&q=${encodeURIComponent(musica)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const videoId = data.items[0].id.videoId;

        PlayVideo(videoId);

    } catch (erro) {
        console.error("Erro:", erro);
    }
    }


