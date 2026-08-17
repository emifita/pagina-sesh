import clickVideo from "./src/components/clickVideo.js";
import { handleSearch } from "./src/controllers/music.controller.js";
import watchTimer from "./src/utils/watchTimer.js";
import historyList from "./src/components/historyList.js";
import updateClassName from "./src/components/updateClassName.js";

const form = document.querySelector("form");
const input = document.querySelector("#musicInput");
const history = document.querySelector(".history-title")
const historyListTag = document.querySelector(".history-list")

export default function mainApp() {

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        handleSearch(input);
    });

    history.addEventListener("click", (event)=>{
        event.preventDefault()

        historyList()

        updateClassName(historyListTag, "show-history")

    })


    setInterval(watchTimer, 1000);
}










