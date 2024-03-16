const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const forecastTemp1 = document.querySelector('#forecast-temp-1');
const weatherIcon1 = document.querySelector('#weather-icon1');
const captionDesc1 = document.querySelector('#fig2');



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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
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
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

forecastapiFetch();

function displayforeCast(data) {
    forecastTemp1.innerHTML = `${data.list[6].main.temp.tofixed(1)}&deg;F`;
    const inconsrc = `https://openweathermap.org/img/w/${data.list[6].weather[0].icon}.png`;
    let desc1 = data.list[6]
}








