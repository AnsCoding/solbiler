// var biler = [
//     {
//         navn: "Mazda 3",
//         imgSrc: "../img/mazda3.png",
//         kategori: "Mellemklasse",
//         personer: 5,
//         kufferter: 2,
//         dagligTillaeg: 0
//     },
//     {
//         navn: "Mini Cooper S",
//         imgSrc: "../img/MiniCooperS.png",
//         kategori: "Mini",
//         personer: 4,
//         kufferter: 1,
//         dagligTillaeg: 60
//     },
//     {
//         navn: "VW Multivan",
//         imgSrc: "../img/volkswagenmultivan.png",
//         kategori: "Minivan",
//         personer: 8,
//         kufferter: 4,
//         dagligTillaeg: 105
//     }
// ];

var datoFraFelt = document.querySelector("#dato-fra");
var datoTilFelt = document.querySelector("#dato-til");
var bilListe = document.querySelector(".resultat");
var bilTemplate = document.querySelector("#bil-template");
var bookBtn = document.querySelector(".book-knap");

var dagsDato = new Date().toISOString().split("T")[0];

datoFraFelt.value = dagsDato;
datoTilFelt.value = dagsDato;

function beregnAntalLejedage(){
    var datoFra = new Date(datoFraFelt.value);
    var datoTil = new Date(datoTilFelt.value);
    var forskelImillisekunder = datoTil.getTime() - datoFra.getTime();
    var millisekunderIenDag = 1000 * 60 * 60 * 24;
    var lejePeriodeIdage = Math.round(forskelImillisekunder / millisekunderIenDag) + 1;

    return lejePeriodeIdage;
}

function beregnLejePris(dagligTillaeg = 0, lejePeriodeIdage) {
    var basisLejePris = 495;
    var dagligLejePris = 100;
    var momsSats = 0.25;

    var resultatEkslMoms = basisLejePris + lejePeriodeIdage * (dagligLejePris + dagligTillaeg);
    var resultatInklMoms = resultatEkslMoms * (1 + momsSats);

    return resultatInklMoms;
}

function formatPris(number) {
    if (Number.isNaN(number)){
        return "Ukendt pris";
    }else{
        return number.toLocaleString("da-DK", {
            style: "currency",
            currency: "DKK"
        });
    }
}

function visBil(bilObject, lejePeriodeIdage){
    var bilNode = bilTemplate.content.cloneNode(true);

    var lejePris = beregnLejePris(bilObject.dagligTillaeg, lejePeriodeIdage);

    bilNode.querySelector("img").src = bilObject.imgSrc;
    bilNode.querySelector("img").alt = `Billede af ${bilObject.navn}`;
    bilNode.querySelector("h3").innerText = bilObject.navn;
    bilNode.querySelector(".kategori").innerText = bilObject.kategori;
    bilNode.querySelector(".personer").innerText = bilObject.personer;
    bilNode.querySelector(".kufferter").innerText = bilObject.kufferter;
    bilNode.querySelector(".pris").innerText = formatPris(lejePris);

    bilListe.appendChild(bilNode);
}

function handleSearch(event){
    event.preventDefault();

    bilListe.innerHTML = "";

    var requiredPersoner = document.querySelector("#person-input").value;
    var requiredKufferter = document.querySelector("#kuffert-input").value;
    var lejePeriodeIdage = beregnAntalLejedage();

    fetch("https://api.jsonbin.io/b/613b8df19548541c29af8f1b", {
        headers: {
            "X-Master-Key": "$2b$10$9ngEA6a1/PkxH5ofHtgbRerJGv7AkJ.fXwkoCOz46tta17dRwlU4G",
            "X-Bin-Meta": false,
        },
    })
    .then(function(response) {
        return response.json();
    })
    .then(function (biler) {      
        for (var bil of biler){
            if(
                bil.personer >= Number(requiredPersoner) &&
                bil.kufferter >= Number(requiredKufferter)
            ){
                visBil(bil, lejePeriodeIdage);
            }
        }
    })
    .catch(function (error){
        bilListe.innerHTML = `<p class="error-message">Noget gik galt: "${error.message}"</p>`;
    });
}


bookBtn.addEventListener("click", handleSearch);