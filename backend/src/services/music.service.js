import dataYT from "../api/youtube.api.js";

async function search(music) {
    return await dataYT(music);
}

export default { search };