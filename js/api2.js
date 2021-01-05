'use strict';

document.querySelector('#consumirAPI').addEventListener('click', function () {
    let apiKey = '3283ca388af19294b1044e1f4cb98cf4';
    let idCity = '5095808';
    obtenerDatos(apiKey, idCity);
})

function obtenerDatos(apiKey, idCity) {
    console.log('Hizo click');

    /*     let apiKey = '3283ca388af19294b1044e1f4cb98cf4';
        let idCity= '5095808'; */
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${apiKey}&units=metric`;





    url = 'http://pro.openweathermap.org/data/2.5/forecast/hourly?id=3688685&appid=3283ca388af19294b1044e1f4cb98cf4'



    const api = new XMLHttpRequest();
    api.open('GET', url, true);

    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            console.log();
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let tempMax = datos.main.temp_max;
            let tempMin = datos.main.temp_min;

            let mostrarTempMax = document.querySelector('#mostrarTempMax');
            let mostrarTempMin = document.querySelector('#mostrarTempMin');

            mostrarTempMax.textContent = `Temperatura máxima: ${tempMax}`;
            mostrarTempMin.textContent = `Temperatura mínima: ${tempMin}`;
            console.log(tempMax);
            console.log(tempMin);
        }
    }
};