export default function updateClassName(tag, className){
    if(tag.classList.contains(className)){
        tag.classList.remove(className)
        return
    }
    tag.replaceChildren()
    tag.classList.add(className)
}

