const url = new URL('https://anscoding.github.io/solbiler/');
document.querySelector(".leje-bil").innerHTML = sessionStorage.getItem("bil");
document.querySelector(".leje-dage").innerHTML = sessionStorage.getItem("dage");
document.querySelector(".leje-pris").innerHTML = sessionStorage.getItem("pris");
document.querySelector(".ekstra-udstyr").innerHTML = sessionStorage.getItem("ekstrasList");
document.querySelector(".ekstra-pris").innerHTML = sessionStorage.getItem("ialt");

let ialt = sessionStorage.getItem("ialt");
let pris = sessionStorage.getItem("pris");

const totalSum = Number(ialt) + Number(pris)

document.querySelector(".ialt").innerHTML = totalSum;