let tempF = document.getElementById("temp").innerHTML;
let wind = document.getElementById("speed").innerHTML;

if (tempF <= 50 && wind >= 3) {
    let windChill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(wind, 0.16) + 0.4275 * tempF * Math.pow(wind, 0.16);
    document.getElementById("windchill").innerHTML = windChill.toFixed(0);
} else {
    document.getElementById("windchill").innerHTML = `N/A`;
}