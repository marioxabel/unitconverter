const convertBtn = document.getElementById("convert")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const input = document.getElementById("value")

let value

convertBtn.addEventListener("click", function() {
    value = document.getElementById("value").value

    length.innerText = `${value} meters = ${(value*3.280839).toFixed(3)} feet | ${value} feet = ${(value*0.3048).toFixed(3)} meters`
    volume.innerText = `${value} liters = ${(value*0.264172).toFixed(3)} gallons | ${value} gallons = ${(value/0.264172).toFixed(3)} liters`
    mass.innerText = `${value} kilos = ${(value*2.204623).toFixed(3)} pounds | ${value} pounds = ${(value/2.204623).toFixed(3)} kilos`
})