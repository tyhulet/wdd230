const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const Temp1 = document.querySelector("#temp-1");
const Icon1 = document.querySelector("#icon1");
const Desc1 = document.querySelector("#fig1");

const Temp2 = document.querySelector("#temp-2");
const Icon2 = document.querySelector("#icon2");
const Desc2 = document.querySelector("#fig2");

const Temp3 = document.querySelector("#temp-3");
const Icon3 = document.querySelector("#icon3");
const Desc3 = document.querySelector("#fig3");


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.04&lon=-111.73&units=imperial&appid=d17732e032e0814a027db79d84ba388e'
const url1 = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.04&lon=-111.73&units=imperial&appid=d17732e032e0814a027db79d84ba388e';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

async function forecastapiFetch() {
    try {
        const response = await fetch(url1);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //Testing only
            displayForecast(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    Temp1.innerHTML = `${data.list[6].main.temp.toFixed(1)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[6].weather[0].icon}.png`;
    let desc1 = data.list[6].weather[0].description;
    Icon1.setAttribute("src", iconsrc);
    Icon1.setAttribute("alt", "weather icon");
    Desc1.textContent = `${desc1}`;

    Temp2.innerHTML = `${data.list[14].main.temp.toFixed(1)}&deg;F`;
    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[14].weather[0].icon}.png`;
    let desc2 = data.list[14].weather[0].description;
    Icon2.setAttribute("src", iconsrc1);
    Icon2.setAttribute("alt", "weather icon");
    Desc2.textContent = `${desc2}`;

    Temp3.innerHTML = `${data.list[22].main.temp.toFixed(1)}&deg;F`;
    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[22].weather[0].icon}.png`;
    let desc3 = data.list[22].weather[0].description;
    Icon3.setAttribute("src", iconsrc2);
    Icon3.setAttribute("alt", "weather icon");
    Desc3.textContent = `${desc3}`;
}





forecastapiFetch();


