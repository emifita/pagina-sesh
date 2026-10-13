import { handleSearch } from "./src/controllers/music.controller.js";
import watchTimer from "./src/utils/watchTimer.js";
import historyList from "./src/components/historyList.js";
import updateClassName from "./src/components/updateClassName.js";

const form = document.querySelector("form");
const input = document.querySelector("#musicInput");
const history = document.querySelector(".history-title")
const historyListTag = document.querySelector(".history-list")
const homeIntro = document.querySelector(".home-intro")
const homeIntroButton = document.querySelector(".home-intro__button")

export default function mainApp() {

    // Dismiss the welcome screen after its exit animation finishes.
    homeIntroButton.addEventListener("click", () => {
        homeIntro.classList.add("home-intro--leaving")
        document.body.classList.remove("intro-active")
        homeIntro.addEventListener("transitionend", () => homeIntro.remove(), { once: true })
    })

    // Keep form submission in the page so search results can update the player in place.
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        handleSearch(input);
    });

    // Load the latest saved searches whenever the history heading is opened.
    history.addEventListener("click", (event)=>{
        event.preventDefault()

        historyList()

        updateClassName(historyListTag, "show-history")

    })


    // Refresh the visible clock once per second.
    setInterval(watchTimer, 1000);
}










