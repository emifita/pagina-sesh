import { searchMusicApi } from "../api/music.api.js";

export async function searchMusic(query) {
    if (!query.trim()) {
        throw new Error("Digite uma música.");
    }

    const data = await searchMusicApi(query);

    if (!data.items.length) {
        throw new Error("Nenhuma música encontrada.");
    }

    return data.items;
}