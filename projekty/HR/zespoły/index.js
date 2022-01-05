
let letter;
let year;
let opt;
let sign;
let years;
let band_sign;
let band_title;
function bandBackground(){
	let band = g(".bandSign");
    for(let i = 0; i < band.length; i++){
    	let src = band[i].dataset.background;
		style(band, i, "background-image", "url("+src+")");
    }
}
load(bandBackground);

function findSongByName(){
	band_title = g(".bandTitle");
	band_sign = g(".bandSign");
	sign = g(".sign");
	years = g(".years");
	band_title[0].onkeyup = ()=>{
		//stylesClass(sign, "color", "black");
		style(sign, "*", "color", "black");
		//stylesClass(years, "color", "black");
		style(years, "*", "color", "black");
		//stylesClass(band_sign, "display", "none");
		style(band_sign, "*", "color", "black");
		let name = band_title[0].value;
		for(let i = 0; i < band_sign.length; i++){
			let bandName = band_sign[i].dataset.title;
			if(bandName.toLowerCase().includes(name.toLowerCase()) == true){
				style(band_sign, i, "display", "inline-block");
			}
		}
	}
}
load(findSongByName);

function findSongByButton(){
	opt = g(".bandOpt");
	for(let i = 0; i < opt.length; i++){
		opt[i].onclick = ()=>{
			band_title[0].value = null;
			if(opt[i].classList.contains("sign") == true){
				if(opt[i].style.color == "green"){
					style(sign, "*", "color", "black");
					letter = null;
					findSong();
				}
				else {
					style(sign, "*", "color", "black");
					style(opt, i, "color", "green");
					letter = opt[i].innerText;
					findSong();
				}
			}
			if(opt[i].classList.contains("years") == true){
				if(opt[i].style.color == "green"){
					style(years, "*", "color", "black");
					year = null;
					findSong();
				}
				else {
					style(years, "*", "color", "black");
					style(opt, i, "color", "green");
					year = opt[i].innerText;
					findSong();
				}
			}
		}
	}
}
load(findSongByButton);
function findSong(){
	style(band_sign, "*", "display", "none")
	for(let i = 0; i < band_sign.length; i++){
		if((band_sign[i].dataset.letter == letter && year == null) || (band_sign[i].dataset.years.includes(year) == true && letter == null) || (band_sign[i].dataset.years.includes(year) == true && band_sign[i].dataset.letter == letter)){
			style(band_sign, i, "display", "inline-block");
		}
	}
}
function showAllBands(){
	let all = g(".all");
	all[0].onclick = ()=>{
		band_title[0].value = null;
		style(opt, "*", "color", "black");
		letter = year = null;
		style(band_sign, "*", "display", "inline-block");
	}
}
load(showAllBands);