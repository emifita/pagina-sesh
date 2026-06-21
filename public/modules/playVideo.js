// Create a iframe on HTML page through videoID
export default function playVideo(videoId) {
    const player = document.getElementById("player");
    player.innerHTML = ''

    const iframeElement = document.createElement('iframe')
    iframeElement.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    iframeElement.classList.add('video-content')

    player.appendChild(iframeElement)

    /* player.innerHTML = `
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        frameborder="0"
        allow="autoplay"
        allowfullscreen>
        </iframe>
    ` */
}