'use strict';

function lanzadera() {
    let apiKey = '3283ca388af19294b1044e1f4cb98cf4';
    let idCityBogota = '3688685';
    let idCityAntartica = '6255152';
    let idCityBarranquilla = '3689147';
    let idCityLyon = '2996944';
    let idCityParis = '6455259';
    obtenerDatosTempBannerBogota(apiKey, idCityBogota);
    obtenerDatosTempBannerLyon(apiKey, idCityLyon);
    obtenerDatosTempBannerParis(apiKey, idCityParis);
}


function obtenerDatosTempBannerBogota(apiKey, idCity) {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${apiKey}&units=metric`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            let icon = datos.weather[0].icon;
            let temp = Math.round(datos.main.temp);
            let mostrarTemp = document.querySelector('#mostrarTempBanner');
            mostrarTemp.textContent = `${temp}`;
            document.getElementById("mostrarImgTempBanner").src=`http://openweathermap.org/img/wn/${icon}@2x.png`
            let iconDia = datos.weather[0].main;

            let mostrarEdoTiempo = document.querySelector('#mostrarEdoTiempo');
            mostrarEdoTiempo.textContent = `${iconDia}`;

        }
    }
};

function obtenerDatosTempBannerLyon(apiKey, idCity) {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${apiKey}&units=metric`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            let temp = Math.round(datos.main.temp);
            let hume = datos.main.humidity;
            let velo = datos.wind.speed;
            let icon = datos.weather[0].icon;
            document.getElementById("mostrarImgLyon").src=`http://openweathermap.org/img/wn/${icon}@2x.png`
            let mostrarTemp = document.querySelector('#mostrarEdoTiempoLyon');
            mostrarTemp.textContent = `${temp}`;
            let mostrarHume = document.querySelector('#mostrarHumLyon');
            mostrarHume.textContent = `Humidity ${hume}%`;
            let mostrarVelo = document.querySelector('#mostrarVelocidadLyon');
            mostrarVelo.textContent = `${velo}km/h`;
        }
    }
};

function obtenerDatosTempBannerParis(apiKey, idCity) {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${apiKey}&units=metric`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            let temp = Math.round(datos.main.temp);
            let hume = datos.main.humidity;
            let velo = datos.wind.speed;
            let icon = datos.weather[0].icon;
            document.getElementById("mostrarImgParis").src=`http://openweathermap.org/img/wn/${icon}@2x.png`
            let mostrarTemp = document.querySelector('#mostrarEdoTiempoParis');
            mostrarTemp.textContent = `${temp}`;
            let mostrarHume = document.querySelector('#mostrarHumParis');
            mostrarHume.textContent = `Humidity ${hume}%`;
            let mostrarVelo = document.querySelector('#mostrarVelocidadParis');
            mostrarVelo.textContent = `${velo}km/h`;
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