// JavaScript Document
var hamburgerKnop = document.querySelector("#hamburgerknop");
var menuZelf = document.querySelector(".hamburgermenu");
var fetucciniKnop = document.querySelector(".fetuccini");

function menuUitKlappen() {
	menuZelf.classList.toggle("toonMenu");
	hamburgerKnop.classList.toggle("kruisMenu");
	

}

hamburgerKnop.addEventListener("click", menuUitKlappen);



var plusKnop = document.querySelector(".plusButton");
var fetucciniKnop = document.querySelector(".fetuccini");
var hamburgerKnop = document.querySelector("#hamburgerknop");

function optieLatenZien() {
	fetucciniKnop.classList.toggle("toonOptie");
	plusKnop.classList.toggle("minMenu");



}

plusKnop.addEventListener("click", optieLatenZien);