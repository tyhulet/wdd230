document.addEventListener("DOMContentLoaded", function () {
    const lastvisit = localStorage.getItem("lastVisit");
    if (lastvisit) {
        const currentdate = Date.now();
        const timediff = currentdate - parseInt(lastvisit);
        const daysdiff = Math.floor(timediff / (1000 * 60 * 60 * 24));

        const message = document.getElementById("visit");
        if (daysdiff === 0) {
            message.textContent = "Back so soon! Awesome!"
        } else {
            message.textContent = "You last visted ${daysdiff} days ago."
        }
    } else {
        localStorage.setItem("lastvisit", Date.now());
        document.getElementById("visit").textContent = "Welcome! Let us know if you have any questions."

    }
});
