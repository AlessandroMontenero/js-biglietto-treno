const numKm = parseInt(prompt("Quanti chilometri devi percorrere"));
const age = parseInt(prompt("Quanti anni hai?"));

if (age < 18) {
    const price =  0.21 * numKm;
    const sale = Math.round((price / 100) * 20) / 100;
    const finalPrice = price - sale;
    const outputMsg = `Grazie, il prezzo del biglietto è: ${finalPrice} € <br>
    Lo sconto è: ${sale} €`
document.getElementById("final_price").innerHTML = outputMsg;
}

else if (age > 65) {
    const price = 0.21 * numKm;
    const sale = Math.round((price / 100) * 40) / 100;
    const finalPrice = price - sale;
    const outputMsg = `Grazie, il prezzo del biglietto è: ${finalPrice} € <br>
    Lo sconto è: ${sale} €`
document.getElementById("final_price").innerHTML = outputMsg;
}

else {
    const price = 0.21 * numKm;
    const sale = 0;
    const finalPrice = price - sale;
    const outputMsg = `Grazie, il prezzo del biglietto è: ${finalPrice} € <br>
    Lo sconto è: ${sale} €`
document.getElementById("final_price").innerHTML = outputMsg;
}
