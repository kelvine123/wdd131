/* ===== Footer Dates ===== */
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;

/* ===== Static Weather Values ===== */
const temperature = 18; // °C
const windSpeed = 10; // km/h

document.querySelector("#temp").textContent = temperature;
document.querySelector("#wind").textContent = windSpeed;

/* ===== Wind Chill Calculation ===== */
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + " °C";
}

document.querySelector("#windchill").textContent = windChill;