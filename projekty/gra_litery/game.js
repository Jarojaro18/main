let categoryArr = ["AKTOR", "PAŃSTWO", "SPORT", "FILM", "PRZYSŁOWIE", "ŚWIATOWA MARKA", "PIOSENKA", "SPORTOWIEC"];
let quoteArr = ["JEAN CLAUDE VAN DAMME", "ZIMBABWE", "CURLING", "WANTED", "GDZIE KUCHAREK SZEŚĆ, TAM NIE MA CO JEŚĆ", "BURGER KING", "ALEJA GWIAZD",
 "ADAM MAŁYSZ"];
let sb;
let points = 2000;
let str;
let charCount = 0;
let lvlCount = 1;
let nick;

function show_gameboard(){
	let gb = g("#gameboard");
	style(gb, "", "display", "block");
	setName();
}
function setName(){
	nick = prompt("Please enter your name");
	if(nick == null){
		setName();
	}
	if(nick.length > 10){
		alert("Za długa nazwa!");
		setName();
	}
	if(nick.length <= 3){
		alert("Za krótka nazwa!");
		setName();
	}
}

function sliceStr(){
	let rnd = rand(0, quoteArr.length-1);
	let category = categoryArr[rnd];
	let ct = g("#categoryTitle");
	ct.innerText = category;
	str = quoteArr[rnd];
	let subStr = str.split(" ");
	sb = subStr;
	let cont = g("#quoteContainer");
	cont.innerHTML = "";
	for(let i = 0; i < subStr.length; i++){	
		let dv = new_element("div", cont, "", ["subQuote"], [], []);
	}
	let lc = g("#levelCount");
	lc.innerText = lvlCount;
	
	cards();
}
load(sliceStr);
function scores(){
	sb = g(".score");
	sb[0].innerText = points;
	
}
load(scores);
function cards(){
	let sq = g(".subQuote");
	for(let i = 0; i < sb.length; i++){
		let word = sb[i];
		for(let j = 0; j < word.length; j++){
			
			let el = new_element("div", sq[i], "", ["card"], [], []);
			
			let el1 = new_element("div", el, "", ["card_front", "cardProp", "flexCC"], [], []);
			
			let el2 = new_element("div", el, "", ["card_back", "cardProp", "flexCC"], [], []);
			el2.innerHTML = sb[i][j];
		}
	}
	
	flipIt();
	spChar();
	resetLetterBtn();
	scores();
}

function flipIt(){
	let lb = g(".letterBtn");
	for(let i = 0; i < lb.length; i++){
		lb[i].onclick = ()=>{
			let chr = lb[i].textContent;
			let chr2;
			let chr3;
			if(chr =="O"){
				chr2 = "Ó";
			}
			if(chr == "A"){
				chr2 = "Ą";
			}
			if(chr == "C"){
				chr2 = "Ć";
			}
			if(chr == "E"){
				chr2 = "Ę";
			}
			if(chr == "L"){
				chr2 = "Ł";
			}
			if(chr == "N"){
				chr2 = "Ń";
			}
			if(chr == "S"){
				chr2 = "Ś";
			}
			if(chr == "Z"){
				chr2 = "Ż";
				chr3 = "Ź";
			}
			let cards = g(".card_back");
			for(let j = 0; j < cards.length; j++){
				if(cards[j].textContent == chr || cards[j].textContent == chr2 || cards[j].textContent == chr3){
					styles(cards[j].parentNode, "transform", "rotateY(-180deg)");
				}
			}
			if(lb[i].classList.contains("vowel")== true){
				points -= 500;
				sb[0].innerText = points;
				if(points <= 0){
					alert("GAME OVER");
					document.location.href = 'mainpage.html';
				}
			}
			else if(lb[i].classList.contains("consonant")== true){
				points -= 150;
				sb[0].innerText = points;
				if(points <= 0){
					alert("GAME OVER");
					document.location.href = 'mainpage.html';
				}
			}
			style(lb, i, "background-color", "rgba(0, 0, 0, 0.3)", "color", "white");
			
		}
	}
}
function spChar(){
	let cb = g(".card_back");
	for(let i = 0; i < cb.length; i++){
		if(cb[i].innerHTML == ","){
			styles(cb[i].parentNode, "transform", "rotateY(-180deg)");
		}
	}
}

function resetLetterBtn(){
	let lb = getClass("letterBtn");
	for(let i = 0; i < lb.length; i++){
		style(lb, i,  "background-color", "white", "color", "black");
	}
}
function answer(){
	let ans = g("#answerBtn");
	let ansTxt = g("#answer");
	
	ans.onclick = ()=>{
		let at = (ansTxt.value).toUpperCase();
		if(at == str){
			points += 2500;
			sb[0].innerText = points;
			alert("Zgadza się!!!");
			ansTxt.value = "";
			lvlCount += 1;
			
			sliceStr();
			cards();
			charCount = 0;
			if(lvlCount >= 6){
				arr.push({name: nick, score: points});
				alert("WYGRAŁEŚ - zdobyłeś " + points + " punktów");
				setStorage();
				location.reload();
			}
		}
		else {
			points -= 100;
			sb[0].innerText = points;
			ansTxt.value = "";
			alert("Hasło nieprawidłowe!!!");
			charCount = 0;
			if(points <= 0){
				alert("GAME OVER");
				location.reload();
			}
		}
	}
}
load(answer);

function help(){
    let info = g(".info");
    let hp = g("#help");
    let ex = g(".exit");
    info[0].onclick = ()=>{
        style(hp, "", "display", "flex");
    }
    ex[0].onclick = ()=>{
        style(hp, "", "display", "none");
    }
}
load(help);

