const url = new URL(window.location.href);
document.querySelector(".leje-bil").innerHTML = sessionStorage.getItem("bil");
document.querySelector(".leje-dage").innerHTML = sessionStorage.getItem("dage");
document.querySelector(".leje-pris").innerHTML = sessionStorage.getItem("pris");
document.querySelector(".ekstra-udstyr").innerHTML = sessionStorage.getItem("ekstrasList");
document.querySelector(".ekstra-pris").innerHTML = sessionStorage.getItem("ialt");


// document.querySelector(".fornavn").innerHTML = url.searchParams.get("fornavn")
// document.querySelector(".efternavn").innerHTML = url.searchParams.get("efternavn")
// document.querySelector(".vejnavn").innerHTML = url.searchParams.get("vejnavn")
// document.querySelector(".husnummer").innerHTML = url.searchParams.get("husnummer")
// document.querySelector(".postnummer").innerHTML = url.searchParams.get("postnummer")
// document.querySelector(".by").innerHTML = url.searchParams.get("by")
// document.querySelector(".alder").innerHTML = url.searchParams.get("alder")

const form = document.querySelector("form");
const ialt = sessionStorage.getItem("ialt");
const pris = sessionStorage.getItem("pris");

const totalSum = Number(ialt) + Number(pris)

document.querySelector(".ialt").innerHTML = totalSum;


form.addEventListener("submit", function(event){
    
    let fornavn = document.querySelector(".fornavn");
    let efternavn = document.querySelector(".efternavn");
    let vejnavn = document.querySelector(".vejnavn");
    let husnummer = document.querySelector(".husnummer");
    let postnummer = document.querySelector(".postnummer");
    let by = document.querySelector(".by");

    sessionStorage.setItem("fornavn", fornavn.value);
    sessionStorage.setItem("efternavn", efternavn.value);
    sessionStorage.setItem("vejnavn", vejnavn.value);
    sessionStorage.setItem("husnummer", husnummer.value);
    sessionStorage.setItem("postnummer", postnummer.value);
    sessionStorage.setItem("by", by.value);
})
