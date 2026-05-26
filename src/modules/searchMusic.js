import playVideo from './playVideo.js';
import dataYT from '../api/youtube-api.js';
import musicList from './MusicList.js';

// search for music on the API
export default async function searchMusic() {
    
    const music = document.getElementById("musicInput").value;
    
    try {
        const data = await dataYT(music)
        const videoId = data.items[0].id.videoId;
        playVideo(videoId);
        musicList(data.items)
        console.log(data)

    } catch (erro) {
        console.error("Erro:", erro);
    }
    }


