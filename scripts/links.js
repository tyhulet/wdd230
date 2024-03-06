const baseURL = "https://tyhulet.github.io/wdd230/";
const linksURl = "https://tyhulet.github.io/wdd230/data/links.json";

async function getlinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getlinks();
