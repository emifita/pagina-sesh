import playVideo from './playVideo.js'

// search for music on the API
export default async function searchMusic() {
    
    const music = document.getElementById("musicInput").value;
    const apiKey = `part=snippet&type=video&maxResults=1&q=${encodeURIComponent(music)}&key=${prompt("Digite sua API KEY")}`
    const apiYT = `https://www.googleapis.com/youtube/v3/search?`
    const url = apiYT + apiKey

    try {
        const response = await fetch(url);
        const data = await response.json();

        const videoId = data.items[0].id.videoId;
        console.log(data)

        playVideo(videoId);

    } catch (erro) {
        console.error("Erro:", erro);
    }
    }


