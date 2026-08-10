import loadingButton from "../components/loadingButton.js";
import changePlaceHolder from "../utils/changePlaceHolder.js";
import playVideo from "../components/playVideo.js";
import musicList from "../components/musicList.js";
import clickVideo from "../components/clickVideo.js";

import { searchMusic } from "../services/music.service.js";

export async function handleSearch(input) {

    if (!input.value.trim()) {
        return alert("Nenhuma música digitada!");
    }

    loadingButton(document.querySelector("#searchButton"));

    try {

        const musics = await searchMusic(input.value);

        playVideo(musics[0].id.videoId);

        musicList(musics);

        clickVideo();

        changePlaceHolder(input);

        input.value = "";

    } catch (error) {

        console.error(error);

        alert(error.message);

    }finally{
        loadingButton(document.querySelector("#searchButton"));
    }

}