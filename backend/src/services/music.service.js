import dataYT from "../api/youtube.api.js";

async function search(music) {
    // Keep the controller independent of the external provider implementation.
    return await dataYT(music);
}

export default { search };
