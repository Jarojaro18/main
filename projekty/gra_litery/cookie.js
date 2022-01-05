let arr = [];
let arrStr = [];
function setStorage(){
	arr.sort(function(a,b){return b.score-a.score});
	if(arr.length > 10){
		arr.length = 10;
	}
	for(let i = 0; i < arr.length; i++){
		let obj = arr[i];
		arrStr.push(obj.name, obj.score);
		
	}
	
	localStorage.setItem("scores", arrStr);
	getStorage();
}
function highscore(){
	let hb = g("#highscoreBoard");
	hb.innerHTLM = "";
	for(let i = 0; i < arr.length; i++){
		let el = create("div");
		el.textContent = arr[i].name + " - " + arr[i].score;
		hb.append(el);
	}
}
function getStorage(){
	let x = localStorage.getItem("scores");
	let subStr = x.split(",");
	for(let i = 0; i < subStr.length; i+=2){
		arr[i/2] = {
			name: subStr[i],
			score: subStr[i+1]
		};
	}
	highscore();
}
load(getStorage);

/* 

POBIERZ ZAPISANE DANE PRZY WCZYTYWANIU / POSORTUJ TABLICE / OGRANICZ DŁUGOŚĆ TABLICY DO X ELEMENTÓW
PRZY WYGRANEJ POBIERZ DANE ZAPISZ JE JAKO TABLICE DODAJ WYNIK Z WYGRANEJ

*/


let hsCount = 0;
function highscores(){
	let hbc = g("#highscoreBoardContainer");
	let hb = g("#highscoreBoard");
	let hbtn = g(".highscoreBtn");
	let ex = hbc.getElementsByClassName("fas");
	let bl = g(".blurred");
	hbtn[0].onclick = ()=>{
		style(hbc, "", "display", "flex");
		style(bl, "0", "filter", "blur(20px)");
		hb.innerHTML = "";
		getStorage();
	}
	ex[0].onclick = ()=>{
		style(hbc, "", "display", "none");
		style(bl, "0", "filter", "blur(0px)");
	}
}
load(highscores);