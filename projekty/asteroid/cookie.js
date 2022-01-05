let arr = [];
let arrStr = [];
let score_board;


function setStorage(){
	arr.sort(function(a,b){return b.score-a.score});
	if(arr.length > 10){
		arr.length = 10;
	}
	for(let i = 0; i < arr.length; i++){
		let obj = arr[i];
		arrStr.push(obj.name, obj.score);
		
	}
	
	localStorage.setItem("space_invaders", arrStr);
	getStorage();
}
function highscore(){
	score_board.innerHTLM = "";
	for(let i = 0; i < arr.length; i++){
		let el = create("div");
		el.textContent = arr[i].name + " - " + arr[i].score;
		score_board.append(el);
	}
}
function getStorage(){
	score_board = getId("score_board");
	let x = localStorage.getItem("space_invaders");
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

let hsCount = 0;
function highscores(){
	let hb = g("#highscoreBoard");
	
	let scores = g(".scores");
	let ex = g(".fa-times");

	scores[0].onclick = ()=>{
		style(hb, "", "display", "flex");
		score_board.innerHTML = "";
		getStorage();
	}
	ex[0].onclick = ()=>{
		style(hb, "", "display", "none");
	}
}
load(highscores);

/* 

POBIERZ ZAPISANE DANE PRZY WCZYTYWANIU / POSORTUJ TABLICE / OGRANICZ DŁUGOŚĆ TABLICY DO X ELEMENTÓW
PRZY WYGRANEJ POBIERZ DANE ZAPISZ JE JAKO TABLICE DODAJ WYNIK Z WYGRANEJ

*/


