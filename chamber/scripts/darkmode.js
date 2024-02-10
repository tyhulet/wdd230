const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("Darkmode")) {
        header.style.background = "#000000";
        header.style.color = "#fff";
        footer.style.background = "#32AE99";
        footer.style.color = "#000000";
        main.style.background = "#000000";

        modeButton.textContent = "LightMode";
    } else {
        header.style.background = "#32AE99";
        header.style.color = "#000000";
        main.style.background = "lightgray";
        main.style.color = "#000000";

        modeButton.textContent = "Darkmode";
    }
});
