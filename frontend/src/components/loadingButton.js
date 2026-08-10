export default function loadingButton(btn){
    const loader = document.querySelector('#player');
    if(loader.classList.contains("loader")){
        loader.classList.remove("loader")
        return
    }
    loader.classList.add('loader')
}

