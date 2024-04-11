const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("DarkMode 🌕")) {
        header.style.background = "#000000";
        header.style.color = "#fff";
        footer.style.background = "#000000";
        footer.style.color = "#fff";
        main.style.background = "#000000";

        modeButton.textContent = "LightMode 🌞";
    } else {
        header.style.background = "#6FB5C3";
        header.style.color = "#000000";
        main.style.background = "#77CFF8";
        main.style.color = "#000000";

        modeButton.textContent = "DarkMode 🌕";
    }
});
