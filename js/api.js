'use strict';

/* document.querySelector('#consumirAPI') {
    let apiKey = '3283ca388af19294b1044e1f4cb98cf4';
    let idCity = '5095808';
    obtenerDatos(apiKey, idCity);
} */

function lanzadera() {
    let apiKey = '3283ca388af19294b1044e1f4cb98cf4';
    let idCityBogota = '3688685';
    let idCityAntartica = '6255152';

    obtenerDatosTempBanner(apiKey, idCityBogota);
}


function obtenerDatosTempBanner(apiKey, idCity) {

    let url = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${apiKey}&units=metric`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);

    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {

            let datos = JSON.parse(this.responseText);

            let tempMax = Math.round(datos.main.temp);
            let mostrarTemp = document.querySelector('#mostrarTempBanner');
            mostrarTemp.textContent = `${tempMax}`;
            
            let iconDia = datos.weather[0].main;
            /* iconDia = 'Rain'; */
            if (iconDia === 'Clouds') {
                document.getElementById("mostrarImgTempBanner").src="/images/sol-nube1.png"
            }
            if (iconDia === 'Clear') {
                document.getElementById("mostrarImgTempBanner").src="/images/sol.png"
            }
            if (iconDia === 'Rain') {
                document.getElementById("mostrarImgTempBanner").src="/images/lluvia.png"
            }
            let mostrarEdoTiempo = document.querySelector('#mostrarEdoTiempo');
            mostrarEdoTiempo.textContent = `${iconDia}`;

        }
    }
};



function obtenerDatosTempForecast(apiKey, idCity) {

    let url = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${apiKey}&units=metric`;



    const api = new XMLHttpRequest();
    api.open('GET', url, true);

    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {

            let datos = JSON.parse(this.responseText);

            let tempMax = Math.round(datos.main.temp_max);
            let tempMin = Math.round(datos.main.temp_min);
            let iconDia = datos.weather[0].main;
            console.log(iconDia)

            let mostrarTempMax = document.querySelector('#mostrarTempMax');

            mostrarTempMax.textContent = `${tempMax}° / ${tempMin}°`;
        }
    }
};