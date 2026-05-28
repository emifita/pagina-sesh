//Using the YouTube Data API v3 
export default async function dataYT(music){
    const apiKey = document.getElementById("apiKey").value;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=5&q=${encodeURIComponent(music)}&key=${apiKey}`
    

    try {
            const response = await fetch(url);
            const data = await response.json();

            return data
        } catch (erro) {
            console.error("Erro:", erro);
        }
}