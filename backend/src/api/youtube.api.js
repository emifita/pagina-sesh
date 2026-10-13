// Query the YouTube Data API for up to five music-category video matches.
export default async function dataYT(music){
    const apiKey = process.env.YOUTUBE_API_KEY
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=5&q=${encodeURIComponent(music)}&key=${apiKey}`
    // Encode the phrase so spaces and punctuation remain valid URL query data.

    try {
            const response = await fetch(url);
            const data = await response.json();
            return data
        } catch (erro) {
            // Log provider or network failures for server diagnostics.
            console.error("Erro:", erro);
        }
}
