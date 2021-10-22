const url = new URL(window.location.href);
document.querySelector(".leje-bil").innerHTML = sessionStorage.getItem("bil");
document.querySelector(".leje-dage").innerHTML = sessionStorage.getItem("dage");
document.querySelector(".leje-pris").innerHTML = sessionStorage.getItem("pris");