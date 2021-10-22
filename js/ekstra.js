const url = new URL(window.location.href);
document.querySelector(".leje-bil").innerHTML = url.searchParams.get("bil")
document.querySelector(".leje-dage").innerHTML = url.searchParams.get("dage")
document.querySelector(".leje-pris").innerHTML = url.searchParams.get("pris")

const form = document.querySelector("form");
const ialt = document.querySelector(".ialt");

function addVat(pris = 0) {
    return pris * 1.25;
}

form.addEventListener("change", function () {
    let pris = 0;
    for (const ekstra of form.ekstras){
        if (ekstra.checked === true){
            const numericValue = Number(ekstra.value);
            pris += addVat(numericValue);
        }
    }

    ialt.innerText = pris;
})

form.addEventListener("submit", function(event){
    
    let ialt = 0;
    let ekstrasList = [];
    
    for(const ekstra of this.elements.ekstras){
        if(ekstra.checked === true){
            const numericValue = Number(ekstra.value);
            ialt += addVat(numericValue);
            ekstrasList.push(ekstra.parentNode.innerText);
        }
    }
    sessionStorage.setItem("ialt", ialt);
    sessionStorage.setItem("ekstrasList", ekstrasList.join(", "));

    sessionStorage.setItem("bil", url.searchParams.get("bil"));
    sessionStorage.setItem("dage", url.searchParams.get("dage"));
    sessionStorage.setItem("pris", url.searchParams.get("pris"));
})
