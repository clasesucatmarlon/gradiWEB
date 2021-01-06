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
    obtenerDatosTempForecast1(apiKey, idCityBogota);
    obtenerDatosTempForecast2(apiKey, idCityBogota);
    obtenerDatosTempForecast3(apiKey, idCityBogota);
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
            document.getElementById("mostrarImgTempBanner").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
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
            document.getElementById("mostrarImgLyon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
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
            document.getElementById("mostrarImgParis").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
            let mostrarTemp = document.querySelector('#mostrarEdoTiempoParis');
            mostrarTemp.textContent = `${temp}`;
            let mostrarHume = document.querySelector('#mostrarHumParis');
            mostrarHume.textContent = `Humidity ${hume}%`;
            let mostrarVelo = document.querySelector('#mostrarVelocidadParis');
            mostrarVelo.textContent = `${velo}km/h`;
        }
    }
};



function obtenerDatosTempForecast1(apiKey, idCity) {
    let url = `http://api.openweathermap.org/data/2.5/forecast?id=${idCity}&appid=${apiKey}&units=metric`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {

            let datos = JSON.parse(this.responseText);
            let tempMaxDia1 = Math.round(datos.list[2].main.temp_max);
            let tempMinDia1 = Math.round(datos.list[2].main.temp_max);
            let icon = datos.list[2].weather[0].icon;
            let state = datos.list[2].weather[0].description;
            document.getElementById("imgForecastDia1").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
            const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ];
            let fecha = datos.list[2].dt_txt
            console.log(fecha)
            const numeroDia = new Date(fecha).getDay();
            const nombreDia = days[numeroDia];
            console.log(nombreDia)
            let mostrarDia1 = document.querySelector('#dayForecastDay11');
            mostrarDia1.textContent = `${nombreDia}`;
            let mostrarDia2 = document.querySelector('#dayForecastDay12');
            mostrarDia2.textContent = `${state}`;
            let mostrarTempMaxMin = document.querySelector('#tempForecastDay1');
            mostrarTempMaxMin.textContent = `${tempMaxDia1}° / ${tempMinDia1}°`;
        }
    }
};

function obtenerDatosTempForecast2(apiKey, idCity) {
    let url = `http://api.openweathermap.org/data/2.5/forecast?id=${idCity}&appid=${apiKey}&units=metric`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {

            let datos = JSON.parse(this.responseText);
            let tempMaxDia2 = Math.round(datos.list[2].main.temp_max);
            let tempMinDia2 = Math.round(datos.list[2].main.temp_max);
            let icon = datos.list[10].weather[0].icon;
            let state = datos.list[10].weather[0].description;
            document.getElementById("imgForecastDia2").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
            const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ];
            let fecha = datos.list[10].dt_txt
            console.log(fecha)
            const numeroDia = new Date(fecha).getDay();
            const nombreDia = days[numeroDia];
            console.log(nombreDia)
            let mostrarDia1 = document.querySelector('#dayForecastDay21');
            mostrarDia1.textContent = `${nombreDia}`;
            let mostrarDia2 = document.querySelector('#dayForecastDay22');
            mostrarDia2.textContent = `${state}`;
            let mostrarTempMaxMin = document.querySelector('#tempForecastDay2');
            mostrarTempMaxMin.textContent = `${tempMaxDia2}° / ${tempMinDia2}°`;
        }
    }
};

function obtenerDatosTempForecast3(apiKey, idCity) {
    let url = `http://api.openweathermap.org/data/2.5/forecast?id=${idCity}&appid=${apiKey}&units=metric`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {

            let datos = JSON.parse(this.responseText);
            let tempMaxDia3 = Math.round(datos.list[2].main.temp_max);
            let tempMinDia3 = Math.round(datos.list[2].main.temp_max);
            let icon = datos.list[18].weather[0].icon;
            let state = datos.list[18].weather[0].description;
            document.getElementById("imgForecastDia3").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
            const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ];
            let fecha = datos.list[18].dt_txt
            console.log(fecha)
            const numeroDia = new Date(fecha).getDay();
            const nombreDia = days[numeroDia];
            console.log(nombreDia)
            let mostrarDia1 = document.querySelector('#dayForecastDay31');
            mostrarDia1.textContent = `${nombreDia}`;
            let mostrarDia2 = document.querySelector('#dayForecastDay32');
            mostrarDia2.textContent = `${state}`;
            let mostrarTempMaxMin = document.querySelector('#tempForecastDay3');
            mostrarTempMaxMin.textContent = `${tempMaxDia3}° / ${tempMinDia3}°`;
        }
    }
};