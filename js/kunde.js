const url = new URL(window.location.href);
document.querySelector(".leje-bil").innerHTML = sessionStorage.getItem("bil");
document.querySelector(".leje-dage").innerHTML = sessionStorage.getItem("dage");
document.querySelector(".leje-pris").innerHTML = sessionStorage.getItem("pris");
document.querySelector(".ekstra-udstyr").innerHTML = sessionStorage.getItem("ekstrasList");
document.querySelector(".ekstra-pris").innerHTML = sessionStorage.getItem("ialt");

const form = document.querySelector("form");
const ialt = sessionStorage.getItem("ialt");
const pris = sessionStorage.getItem("pris");

const totalSum = Number(ialt) + Number(pris)

document.querySelector(".ialt").innerHTML = totalSum;


form.addEventListener("submit", function(event){
    
    // let fornavn = document.querySelector(".fornavn");
    // let efternavn = document.querySelector(".efternavn");
    // let vejnavn = document.querySelector(".vejnavn");
    // let husnummer = document.querySelector(".husnummer");
    // let postnummer = document.querySelector(".postnummer");
    // let by = document.querySelector(".by");

    // sessionStorage.setItem("fornavn", fornavn.value);
    // sessionStorage.setItem("efternavn", efternavn.value);
    // sessionStorage.setItem("vejnavn", vejnavn.value);
    // sessionStorage.setItem("husnummer", husnummer.value);
    // sessionStorage.setItem("postnummer", postnummer.value);
    // sessionStorage.setItem("by", by.value);


    sessionStorage.setItem("fornavn", url.searchParams.get("fornavn"));
    sessionStorage.setItem("efternavn", url.searchParams.get("efternavn"));
    sessionStorage.setItem("vejnavn", url.searchParams.get("vejnavn"));
    sessionStorage.setItem("husnummer", url.searchParams.get("husnummer"));
    sessionStorage.setItem("postnummer", url.searchParams.get("postnummer"));
    sessionStorage.setItem("by", url.searchParams.get("by"));
})
