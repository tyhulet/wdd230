function doInputOutput() {
    let temperature = 45;
    let windspeed = 10;
    if (temperature <= 50 && windspeed >= 3) {
        output = windChill(temperature, windspeed);
    } else {
        output = `N/A`
    }
    document.getElementById('windchill').innerHTML = "Wind Chill: ${output}";
}

function windChill(tempF, speed) {
    let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    return f;
}
