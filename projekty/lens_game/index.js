let bd;
let lp_bg;
var town_img = ["town1.jpg", "town2.jpg", "town3.jpg", "town4.jpg", "town5.jpg", "town6.jpg", "town7.jpg", "town8.jpg", "town9.jpg", "town10.jpg", "town11.jpg", "town12.jpg", "town13.jpg", "town14.jpg"];
var movie_img = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpeg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg", "movie9.jpg", "movie10.jpg", "movie11.jpg", "movie12.jpg", "movie13.jpg", "movie14.jpg"];
var game_img = ["game1.jpg", "game2.jpg", "game3.jpg", "game4.jpg", "game5.jpg", "game6.jpg", "game7.jpg", "game8.jpg", "game9.jpg", "game10.jpg", "game11.jpg", "game12.jpg", "game13.jpg", "game14.jpg"];
var town = [
	["SEUL", "TOKIO", "HONG KONG"], 
	["BERLIN", "LONDYN", "PARYŻ"], 
	["WIEDEŃ", "BERLIN", "WARSZAWA"], 
	["MOSKWA", "OSLO", "KIJÓW"],
	["WASZYNGTON", "NOWY JORK", "CHICAGO"],
	["AMSTERDAM", "ROTTERDAM", "WENECJA"],
	["TUNIS", "TEL-AWIW", "KAIR"],
	["SANTIAGO", "RIO DE JANEIRO", "MONTEVIDEO"],
	["MANILA", "HONG KONG", "KUALA LUMPUR"],
	["SARAJEWO", "ATENY", "SKOPJE"],
	["DAMASZEK", "TEL-AWIW", "JEROZOLIMA"],
	["BEJRUT", "KUWEJT", "ABU DHABI"],
	["TAIWAN", "HONG KONG", "PEKIN"],
	["KIJÓW", "RYGA", "WARSZAWA"]
];
var movie = [
	["Man of Steel", "Batman", "Spider-Man"], 
	["Avengers", "Tomb Raider", "Borat"], 
	["Mission Impossible", "Undisputed", "Riddick"], 
	["Rocky", "Creed", "Southpaw"],
	["Wanted", "Venom", "Avengers"],
	["Undisputed", "Rocky", "Man of Steel"],
	["Creed", "Riddick", "Fight Club"],
	["The book of Eli", "The Equalizer", "Man on fire"],
	["Ninja", "Undisputed", "Hooligans"],
	["Rambo", "The Expendables", "Get Carter"],
	["Hancock", "Bad Boys", "Men in Black"],
	["Volcano", "The Hunted", "The Fugitive"],
	["Batman", "Spider-Man", "Joker"],
	["Fight Club", "Rocky", "Dredd"]
];
var game = [
	["GTA San Andreas", "GTA 3", "GTA Vice City"], 
	["Assasin's Creed: Valhalla", "Assasin's Creed: Origins", "Assasin's Creed: Brotherhood"], 
	["Batman: Arkham Asylum", "Batman: Arkham City", "Batman: Arkham Origins"], 
	["Bioshock", "Bioshock: Infinite", "Bioshock 2"],
	["Age of Empires", "Age of Empires III", "Age of Empires II"],
	["Battlefield 3", "Battlefield 4", "Battlefield 5"],
	["CoD: Black Ops 3", "CoD: Modern Warfare 3", "CoD: Ghosts"],
	["Counter Strike: Condition Zero", "Counter Strike: Global Offensive", "Counter Strike: Source"],
	["Far Cry 3", "Far Cry 4", "Far Cry 2"],
	["Medal of Honor: Rising Sun", "Medal of Honor: Allied Assault", "Medal of Honor: Warfighter"],
	["Tekken 3", "Tekken Tag Tournament", "Tekken 4"],
	["The Sims 2", "The Sims 3", "The Sims 4"],
	["Resident Evil 4", "Resident Evil 5", "Resident Evil 7"],
	["Need for Speed: ProStreet", "Need for Speed: Shift", "Need for Speed: Most Wanted"]
];
let pts = 0;
let g_lvl = 0;
var town_ans = ["TOKIO", "PARYŻ", "BERLIN", "MOSKWA", "NOWY JORK", "AMSTERDAM", "KAIR", "RIO DE JANEIRO", "KUALA LUMPUR", "ATENY", "JEROZOLIMA", "ABU DHABI", "TAIWAN", "WARSZAWA"];
var movie_ans = ["Batman", "Avengers", "Riddick", "Southpaw", "Wanted", "Man of Steel", "Fight Club", "The Equalizer", "Undisputed", "Rambo", "Bad Boys", "The Hunted", "Joker", "Rocky"];
var game_ans = ["GTA Vice City", "Assasin's Creed: Origins", "Batman: Arkham Asylum", "Bioshock: Infinite", "Age of Empires II", "Battlefield 3", "CoD: Modern Warfare 3", "Counter Strike: Source", "Far Cry 2", "Medal of Honor: Allied Assault", "Tekken 4", "The Sims 4", "Resident Evil 5", "Need for Speed: ProStreet"];

let opt_val;
let ans_val;
let img_val;
function start_game(){
	let main = g("#main_page");
	let game = g("#game");
	let type = g("#type");
	opt_val = type.options[type.selectedIndex].value;
	ans_val = opt_val + "_ans";
	img_val = opt_val + "_img";
	style(main, "", "display", "none");
	style(game, "", "display", "block");

	body_background();
	loupe_position();
}

function body_background(){
	let pt = g("#point");
	lp_bg = g("#loupe_bg");
	let box = g(".box");
	let img_arr = ["wl1.jpg", "wl2.jpg", "wl3.jpg", "wl4.jpg"];
	
	pt.innerText = pts;
	bd = g("body");
	let rnd = rand(0, img_arr.length - 1);
	let rnd2 = rand(0,  window[img_val].length - 1);
	let ans = window[opt_val][rnd2];
	let good_ans = window[ans_val][rnd2];
	style(bd, 0, "background-image", "url(images/bgs/" + img_arr[rnd] + ")", "cursor", "none");
	style(box, "*", "display", "none");
	style(lp_bg, "", "background-image", "url(images/question_bgs/" +  window[img_val][rnd2] + ")");
	let answ = g(".ans");
	for(let i = 0; i < answ.length; i++){
		answ[i].innerText = ans[i];
		answ[i].onclick = ()=>{
			let answer = answ[i].innerText;
			if(answer == good_ans){
				pts += 1;
				g_lvl += 1;
				pt.innerText = pts;
				window[img_val].splice(rnd2, 1);
				window[opt_val].splice(rnd2, 1);
				window[ans_val].splice(rnd2, 1);
				body_background();
				
			}
			else {
				pt.innerText = pts;
				g_lvl += 1;
				window[img_val].splice(rnd2, 1);
				window[opt_val].splice(rnd2, 1);
				window[ans_val].splice(rnd2, 1);
				body_background();
			}
		}
	}
	if(g_lvl >= 10){
		alert("KONIEC GRY - zdobyłeś "+pts+"/10 pkt");
		location.reload();
	}
}

function loupe_position(){
	let lp = g("#loupe");
	bd[0].onmousemove = (event)=>{
		let x_pos = event.clientX;
		let y_pos = event.clientY;
		style(lp, "", "left", x_pos - lp.offsetWidth/2 + "px", "top", y_pos - lp.offsetHeight/2 + "px");
		style(lp_bg, "", "left", -x_pos + lp.offsetWidth/2 + "px", "top", -y_pos + lp.offsetHeight/2 + "px");
	} 
}