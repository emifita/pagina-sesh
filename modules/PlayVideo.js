export default function PlayVideo(videoId) {
    const player = document.getElementById("player");

    player.innerHTML = `
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        frameborder="0"
        allow="autoplay"
        allowfullscreen>
        </iframe>
    `
}