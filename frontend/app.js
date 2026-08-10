import { handleSearch } from "./src/controllers/music.controller.js";
import watchTimer from "./src/utils/watchTimer.js";

const form = document.querySelector("form");
const input = document.querySelector("#musicInput");

export default function mainApp() {

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        handleSearch(input);
    });

    setInterval(watchTimer, 1000);
}








