let arr = [];
let arrStr = [];
let arrStr2 = [];
let arrStr3 = [];
let arrStr4 = [];

function setStorage(){
	for(let i = 0; i < kill_array.length; i++){
		arrStr.push(kill_array[i]);
	}
	for(let i = 0; i < hp_array.length; i++){
		arrStr2.push(hp_array[i]);
	}
	for(let i = 0; i < heal_array.length; i++){
		arrStr3.push(heal_array[i]);
	}
	for(let i = 0; i < damage_array.length; i++){
		arrStr4.push(damage_array[i]);
	}
	localStorage.setItem("kills", arrStr);
	localStorage.setItem("hp", arrStr2);
	localStorage.setItem("heal", arrStr3);
	localStorage.setItem("damage", arrStr4);
	getStorage();
}
function getStorage(){
	let x1 = localStorage.getItem("kills");
	let subStr1 = x1.split(",");
	
	let x2 = localStorage.getItem("hp");
	let subStr2 = x2.split(",");
	
	let x3 = localStorage.getItem("heal");
	let subStr3 = x3.split(",");
	
	let x4 = localStorage.getItem("damage");
	let subStr4 = x4.split(",");
	
	kill_array.length = 0;
	hp_array.length = 0;
	heal_array.length = 0;
	damage_array.length = 0;
	
	for(let i = 0; i < subStr1.length; i++){
		kill_array.push(subStr1[i]);
	}
	for(let i = 0; i < subStr2.length; i++){
		hp_array.push(subStr2[i]);
	}
	for(let i = 0; i < subStr3.length; i++){
		heal_array.push(subStr3[i]);
	}
	for(let i = 0; i < subStr4.length; i++){
		damage_array.push(subStr4[i]);
	}
}
load(getStorage);


/* 

POBIERZ ZAPISANE DANE PRZY WCZYTYWANIU / POSORTUJ TABLICE / OGRANICZ DŁUGOŚĆ TABLICY DO X ELEMENTÓW
PRZY WYGRANEJ POBIERZ DANE ZAPISZ JE JAKO TABLICE DODAJ WYNIK Z WYGRANEJ

*/


