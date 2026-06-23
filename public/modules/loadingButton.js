export default function loadingButton(btn){
    const loader = document.querySelector('#player');
    loader.classList.add('loader');

    setTimeout(() => {
        loader.classList.remove('loader');
    }, 3000);

}

