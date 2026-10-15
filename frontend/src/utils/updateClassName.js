export default function updateClassName(tag, className){
    // Toggle the state class; entering it also clears any previous player content.
    if(tag.classList.contains(className)){
        tag.classList.remove(className)
        return
    }
    tag.replaceChildren()
    tag.classList.add(className)
}

