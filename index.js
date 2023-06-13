const inputEl = document.getElementById('input')
const buttonEl = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')
buttonEl.addEventListener('click', Convert)

function Convert() {
   lengthConverter()
   volumeConverter()
   massConverter()
}

function lengthConverter() {
   let value = input.value;
   let toMeters = value * 3.281;
   let toFeet = value/3.281;
   lengthEl.textContent = `${value} meters = ${toMeters.toFixed(2)} feet | ${value} feet = ${toFeet.toFixed(2)} meters`;
}

function volumeConverter() {
   let value = input.value;
   let toLitres = value * 0.264;
   let toGallon = value/0.264;
   volumeEl.textContent = `${value} liters = ${toLitres.toFixed(2)} gallons | ${value} gallons = ${toGallon.toFixed(2)} litres `
}

function massConverter() {
   let value = input.value;
   let toPounds = value * 2.204
   let toKilo = value/2.204
   massEl.textContent = `${value} kilos = ${toPounds.toFixed(2)} pounds | ${value} pounds = ${toKilo.toFixed(2)} kilos`

}
