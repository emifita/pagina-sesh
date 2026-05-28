import playVideo from './playVideo.js';
import dataYT from '../api/youtube-api.js';
import musicList from './MusicList.js';
import clickVideo from './clickVideo.js';


// search for music on the API
export default async function searchMusic(music) {
    
    try {
        const data = await dataYT(music.value)
        const videoId = data.items[0].id.videoId;
        playVideo(videoId);
        musicList(data.items)
        clickVideo()
        
    } catch (erro) {
        console.error("Erro:", erro);
    }
    }


