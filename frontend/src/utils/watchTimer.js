export default function watchTimer(){
    const timer = document.querySelector('.timer')
    
    const date = new Date()
    const hours = date.toLocaleTimeString()

    timer.innerText = hours
}