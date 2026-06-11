import playVideo from './playVideo.js';
import musicList from './MusicList.js';
import clickVideo from './clickVideo.js';


// search for music on the API
export default async function searchMusic(music) {
    
    if(music.value){
        try {
            const response = await fetch(`http://localhost:3000/?music=${encodeURIComponent(music.value)}`)
            const data = await response.json()
            const videoId = data.items[0].id.videoId;
            playVideo(videoId);
            musicList(data.items)
            clickVideo()
            return
        }catch (erro) {
            console.error("Erro:", erro);
        }
    }
    alert('Nenhuma musica digitada!')
    }


