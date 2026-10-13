export async function searchMusicApi(query) {
    // Encode user input before placing it in the query string.
    const response = await fetch(
        `http://localhost:3000/music?music=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Erro na requisição");
    }

    return response.json();
}
