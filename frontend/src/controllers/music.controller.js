import updateClassName from "../utils/updateClassName.js";
import changePlaceHolder from "../utils/changePlaceHolder.js";
import playVideo from "../components/playVideo.js";
import musicList from "../components/musicList.js";
import clickVideo from "../components/clickVideo.js";

import { searchMusic } from "../services/music.service.js";

export async function handleSearch(input) {

    // Avoid an unnecessary request and give immediate feedback for blank input.
    if (!input.value.trim()) {
        return alert("Nenhuma música digitada!");
    }

    updateClassName(document.querySelector("#player"), "loader");

    try {

        // Use the top match in the player and render the remaining options below it.
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
        // Clear the loading state even when the request or rendering fails.
        updateClassName(document.querySelector("#player"), "loader");
    }

}
