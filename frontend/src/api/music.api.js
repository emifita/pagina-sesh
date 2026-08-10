export async function searchMusicApi(query) {
    const response = await fetch(
        `http://localhost:3000/?music=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Erro na requisição");
    }

    return response.json();
}