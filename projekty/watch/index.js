let el_n;
let el_;
let el_c = "";

function g(name){
	let n = name.toString();
	if(n.charAt(0) == "#"){
		el_c = getId(n.substring(1));
	}
	if(n.charAt(0) == "."){
		el_c = getClass(n.substring(1));
	}
	if(n.charAt(0) !== "." && n.charAt(0) !== "#"){
		el_c = getTag(n);
	}
	return el_c;
}



/*function change_elem(){
	let sqr = g("#sqr");
	style(sqr, "", "background-color", "red");
	let si = setInterval(()=>{
		let ws = sqr.offsetWidth;
		style(sqr, "", "width", (ws + 20) + "px");
	},500);
	let sqr2 = g("#sqr2");
	style(sqr2, "", "background-color", "green");
	let si2 = setInterval(()=>{
		let ws2 = sqr2.offsetWidth;
		let ls = sqr2.offsetLeft;
		style(sqr2, "", "width", (ws2 + 10) + "px", "left", (ls - 10) + "px");
	},500);
}
load(change_elem);*/

function clock_size(){
	let ww = window.innerWidth;
	let wh = window.innerHeight;
	let cf = g("#clock_face");
	if(ww >= wh){
		style(cf, "", "width", "60vh", "height", "60vh", "top", "calc(50% - 30vh)", "left", "calc(50% - 30vh)");
	}
	else {
		style(cf, "", "width", "80vw", "height", "80vw", "top", "calc(50% - 40vw)", "left", "calc(50% - 40vw)");
	}
}
load(clock_size);
resize(clock_size);
let line_deg = 0;
let left_num = 90;
let right_num = -270;
function rotate_digit(){
	let line = g(".line");
	let left_clock_num = g(".hour_left");
	let right_clock_num = g(".hour_right");
	for(let i = 0; i < line.length; i++){
		style(line, i, "transform_origin", "50% 50%", "transform", "rotateZ("+line_deg+"deg)");
		line_deg += 180/line.length;
		style(left_clock_num, i, "transform_origin", "50% 50%", "transform", "rotateZ("+left_num+"deg)");
		left_num -= 180/line.length;
		style(right_clock_num, i, "transform_origin", "50% 50%", "transform", "rotateZ("+right_num+"deg)");
		right_num += -180/line.length;
	}
}
load(rotate_digit);


function clock_time(){
	let time = new Date();
	
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	
	let lof = g("#line_of_seconds");
	let lom = g("#line_of_minutes");
	let loh = g("#line_of_hours");
	let start_deg_sec = (360/60) * seconds;
	let start_deg_min = (360/60) * minutes + start_deg_sec/60;
	let start_deg_hr = (360/12) * (hours%12) + start_deg_min/12 + start_deg_sec/720;

	style(lof, "", "transform", "rotateZ("+start_deg_sec+"deg)");
	setProperty(lof, "--start", "rotateZ("+start_deg_sec+"deg)", "--end", "rotateZ("+(start_deg_sec + 360)+"deg)");
	style(lom, "", "transform", "rotateZ("+start_deg_min+"deg)");
	setProperty(lom, "--start", "rotateZ("+start_deg_min+"deg)", "--end", "rotateZ("+(start_deg_min + 360)+"deg)");
	style(loh, "", "transform", "rotateZ("+start_deg_hr+"deg)");
	setProperty(loh, "--start", "rotateZ("+start_deg_hr+"deg)", "--end", "rotateZ("+(start_deg_hr + 360)+"deg)");
}
load(clock_time);