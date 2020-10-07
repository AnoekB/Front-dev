// JavaScript Document
var hamburgerKnop = document.querySelector("#hamburgerknop");
var menuZelf = document.querySelector(".hamburgermenu");

function menuUitKlappen() {
	menuZelf.classList.toggle("toonMenu");
}

hamburgerKnop.addEventListener("click", menuUitKlappen);