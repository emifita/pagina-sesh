export default function loadingButton(tag){
    if(tag.classList.contains("loader")){
        tag.classList.remove("loader")
        return
    }
    tag.replaceChildren()
    tag.classList.add('loader')
}

