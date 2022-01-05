let red = 0;
let green = 0;
let blue = 0;
let cll;
let cv;
let nm;

let rgb_num;

let cmyk_num;
let black;
let cyan;
let magenta;
let yellow;

let hsl_num;
let r1;
let g1;
let b1;
 
let luminace;
let saturation;
let hue;

let rgb_min;
let rgb_max;
let delta;
let res;

let hex_num;

function rgb_to_cmyk(){
	
	black = 1 - (Math.max(red, green, blue)/255);
	
	cyan = (1 - (red/255) - black)/(1 - black);
	magenta = (1 - green/255 - black) / (1 - black);
	yellow = (1 - blue/255 - black) / (1 - black);
	if(Number.isNaN(cyan) == true){
		cyan = 0;
	}
	if(Number.isNaN(magenta) == true){
		magenta = 0;
	}
	if(Number.isNaN(yellow) == true){
		yellow = 0;
	}
}

function rgb_to_hsl(){
	r1 = (red/255).toFixed(2);
	g1 = (green/255).toFixed(2);
	b1 = (blue/255).toFixed(2);
	
	if(Number.isNaN(r1) == true){
		r1 = 0;
	}
	if(Number.isNaN(g1) == true){
		g1 = 0;
	}
	if(Number.isNaN(b1) == true){
		b1 = 0;
	}
	
	rgb_min = Math.min(r1,g1,b1);
	rgb_max = Math.max(r1,g1,b1);
	
	delta = rgb_max - rgb_min;
	
	luminace = (rgb_max + rgb_min)/2;
	
	if(delta == 0){
		hue = 0;
		saturation = 0;
	}
	if(delta !== 0){
		if(rgb_max == r1){
			hue = 60 * (((g1 - b1)/delta) % 6);
		}
		if(rgb_max == g1){
			hue = 60 * (((b1 - r1)/delta) + 2);
		}
		if(rgb_max == b1){
			hue = 60 * (((r1 - g1)/delta) + 4);
		}
		saturation = delta/(1 - Math.abs(2*luminace - 1));
	}
}
let hex;
let hex_arr = [];
function rgb_to_hex(){
	hex_num[0].innerHTML = "";
	hex_arr = [];
	let arr = [red, green, blue];
	for(let i = 0; i < arr.length; i++){
		let hx1 = arr[i] % 16;
		let hx2 = (arr[i] - hx1)/16;
		hex_arr.push(hx2);
		hex_arr.push(hx1);
	}
	hex_string();
}

function hex_string(){
	hex_num[0].innerText += "#";
	for(let i = 0; i < hex_arr.length; i++){
		let hx = hex_arr[i];
		if(hx == 10){
			hx = "A";
		}
		if(hx == 11){
			hx = "B";
		}
		if(hx == 12){
			hx = "C";
		}
		if(hx == 13){
			hx = "D";
		}
		if(hx == 14){
			hx = "E";
		}
		if(hx == 15){
			hx = "F";
		}
		if(hx < 10) {
			hx = hex_arr[i];
		}
		
		hex_num[0].innerText += hx;
	}
	
}

function rgb(){
	res = g("#res");
	cll = g(".color_level_line");
	cv = g("#color_viewer");
	rgb_num = g(".rgb_num");
	cmyk_num = g(".cmyk_num");
	hsl_num = g(".hsl_num");
	hex_num = g(".hex_num");
	
	rgb_num[0].innerText = red + ", " + green + ", " + blue;
	rgb_to_cmyk();
	cmyk_num[0].innerText = (cyan*100).toFixed(0) + "%, " + (magenta*100).toFixed(0) + "%, " + (yellow*100).toFixed(0) + "%, " + (black*100).toFixed(0) + "%";
	rgb_to_hsl();
	hsl_num[0].innerText = hue + "deg, " + saturation + "%, " + luminace + "%";
	hex_num[0].innerText = "#000000";
	style(cv, "", "background-color", "rgb("+red+","+green+","+blue+")");
	for(let i = 0; i < cll.length; i++){
		cll[i].onclick = (event)=>{
			let cll_color = cll[i].dataset.color;
			let x_pos = event.clientX;
			let cll_bcr = cll[i].getBoundingClientRect();
			let cll_left = cll_bcr.left;
			let cll_right = cll_bcr.right;
			let prc = (((x_pos - cll_left) / (cll_right - cll_left))*100).toFixed(2);
			style(cll, i, "background-image", "linear-gradient(to right, "+cll_color+" 0%, "+cll_color+" "+prc+"%, white "+prc+"%, white 100%)");
			nm = getClass(cll_color+"_level_num");
			nm[0].innerText = Math.round(((255*prc)/100).toFixed(2));
			cvb();
			color_type_num();
		}
		cll[i].onmousedown = (event)=>{
			cll[i].onmousemove = (event)=>{
				let cll_color = cll[i].dataset.color;
				let x_pos = event.clientX;
				let cll_bcr = cll[i].getBoundingClientRect();
				let cll_left = cll_bcr.left;
				let cll_right = cll_bcr.right;
				let prc = Math.round((((x_pos - cll_left) / (cll_right - cll_left))*100).toFixed(2));
				style(cll, i, "background-image", "linear-gradient(to right, "+cll_color+" 0%, "+cll_color+" "+prc+"%, white "+prc+"%, white 100%)");
				nm = g("." + cll_color+"_level_num");
				nm[0].innerText = Math.round(((255*prc)/100).toFixed(2));
				
				cvb();
				color_type_num();
			}
		}
		cll[i].onmouseup = ()=>{
			cll[i].onmousemove = ()=>{
				null;
			}
		}
		cll[i].onmouseout = ()=>{
			cll[i].onmousemove = ()=>{
				null;
			}
		}
	}
}
load(rgb);

function cvb(){
	
	let c1 = g(".red_level_num");
	let c2 = g(".green_level_num");
	let c3 = g(".blue_level_num");
	red = c1[0].innerText;
	green = c2[0].innerText;
	blue = c3[0].innerText;

	style(cv, "", "background-color", "rgb("+red+","+green+","+blue+")");
}


function color_type_num(){
	rgb_num[0].innerText = red + ", " + green + ", " + blue;
	rgb_to_cmyk();
	cmyk_num[0].innerText = (cyan*100).toFixed(0) + "%, " + (magenta*100).toFixed(0) + "%, " + (yellow*100).toFixed(0) + "%, " + (black*100).toFixed(0) + "%";
	rgb_to_hsl();
	hsl_num[0].innerText = Math.round(hue) + "deg, " + Math.round(saturation*100) + "%, " + (luminace * 100).toFixed(1) + "%";
	rgb_to_hex();
}