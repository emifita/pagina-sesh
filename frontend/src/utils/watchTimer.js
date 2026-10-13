export default function watchTimer(){
    // Use the browser's locale formatting so the clock follows the user's local time settings.
    const timer = document.querySelector('.timer')
    
    const date = new Date()
    const hours = date.toLocaleTimeString()

    timer.innerText = hours
}
