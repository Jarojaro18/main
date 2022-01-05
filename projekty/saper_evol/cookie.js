let arr10 = [999];
let arr12 = [999];
let arr15 = [999];
let subStr1;
let subStr2;
let subStr3;

let arrs = [arr10, arr12, arr15];
let strs;

let r10;
let r12;
let r15;
let rr;
function aaaa(){
	
	let x1 = localStorage.getItem("saper1");

	let x2 = localStorage.getItem("saper2");
	let x3 = localStorage.getItem("saper3");
	if(x1 == null){
		localStorage.setItem("saper1", arr10);
	}
	if(x2 == null){
		localStorage.setItem("saper2", arr12);
	}
	if(x3 == null){
		localStorage.setItem("saper3", arr15);
	}
	else {
		r10 = g(".r10");
		r12 = g(".r12");
		r15 = g(".r15");
		getStorage();
	}
}
load(aaaa);
function setStorage(){
	arr10.sort(function(a,b){return a-b});
	arr12.sort(function(a,b){return a-b});
	arr15.sort(function(a,b){return a-b});
	if(arr10.length > 5){
		arr10.length = 5;
	}
	if(arr12.length > 5){
		arr12.length = 5;
	}
	if(arr15.length > 5){
		arr15.length = 5;
	}	
	localStorage.setItem("saper1", arr10);
	localStorage.setItem("saper2", arr12);
	localStorage.setItem("saper3", arr15);
	getStorage();
	set_scoreboard();
}
function getStorage(){
	arr10.length = 0;
	arr12.length = 0;
	arr15.length = 0;
	let x1 = localStorage.getItem("saper1");

	let x2 = localStorage.getItem("saper2");
	let x3 = localStorage.getItem("saper3");
	subStr1 = x1.split(",");
	subStr2 = x2.split(",");
	subStr3 = x3.split(",");
	strs = [subStr1, subStr2, subStr3];
	for(let i = 0; i < strs.length; i++){
		let strr = strs[i];
		for(let j = 0; j < strr.length; j++){
			arrs[i].push(strr[j]);
		}
	}
	
}

function show_scoreboard(){
	let score = g(".score");
	let exit = g(".exit");
	let scoreboard = g("#scoreboard");
	score[0].onclick = ()=>{
		style(scoreboard, "", "display", "block");
		setStorage();
	}
	exit[0].onclick = ()=>{
		style(scoreboard, "", "display", "none");
	}
}
load(show_scoreboard);
function set_scoreboard(){
	let lvl = g(".lvl");
	
	r10[0].innerHTML = "";
	r15[0].innerHTML = "";
	r12[0].innerHTML = "";
	for(let i = 0; i < arrs.length; i++){
		let level_r = lvl[i].getElementsByClassName("rr");
		let arra = arrs[i];
		for(let j = 0; j < arra.length; j++){
			level_r[0].innerHTML += arra[j] + " sekund </br>";
		}
	}
}

/* 

POBIERZ ZAPISANE DANE PRZY WCZYTYWANIU / POSORTUJ TABLICE / OGRANICZ DŁUGOŚĆ TABLICY DO X ELEMENTÓW
PRZY WYGRANEJ POBIERZ DANE ZAPISZ JE JAKO TABLICE DODAJ WYNIK Z WYGRANEJ

*/


 function make_cookie(){
	localStorage.setItem("saper1", arr10);
	localStorage.setItem("saper2", arr12);
	localStorage.setItem("saper3", arr15);
}
load(make_cookie);