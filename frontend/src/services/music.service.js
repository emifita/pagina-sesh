import { searchMusicApi } from "../api/music.api.js";

export async function searchMusic(query) {
    // Reject blank searches before making a request to the backend.
    if (!query.trim()) {
        throw new Error("Digite uma música.");
    }

    const data = await searchMusicApi(query);

    // The caller expects a playable result, so report an empty response as a search error.
    if (!data.items.length) {
        throw new Error("Nenhuma música encontrada.");
    }

    return data.items;
}
