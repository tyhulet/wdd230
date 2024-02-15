let temp = 49;
let wind = 4;

function windchill(temp, wind) {
    const f = 35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16
    if (temp <= 50 && speed > 3) {
        windchill = f.toFixed(1) + "°F";
    }
    else {
        windchill = "NA";
    }

    return windchill;
}

