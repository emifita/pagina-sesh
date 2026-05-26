export default async function dataYT(music){
    const apiKey = `part=snippet&type=video&maxResults=5&q=${encodeURIComponent(music)}&key=${prompt("Digite sua API KEY")}`
    const apiYT = `https://www.googleapis.com/youtube/v3/search?`
    const url = apiYT + apiKey

    try {
            const response = await fetch(url);
            const data = await response.json();

            return data
        } catch (erro) {
            console.error("Erro:", erro);
        }
}