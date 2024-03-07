const baseURL = "https://tyhulet.github.io/wdd230/";
const linksURL = "https://tyhulet.github.io/wdd230/data/links.json";

const lists = document.querySelector("#links")

async function getlinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

getlinks();


const displayLinks = (lessons) => {
    lessons.forEach((weeks) => {
        const list = document.createElement('li');
        list.textContent = `Week ${weeks.lesson}: `;

        weeks.links.forEach(week => {
            const anchorTag = document.createElement('a');
            anchorTag.href = `${week.url}`;
            anchorTag.textContent = `${week.title} `;
            list.appendChild(anchorTag);
        });
        lists.appendChild(list);

    });
}