let percent = 0;
let bg;
function lighting_bolt(){
	let l_b = g(".lighting_bolt");
	let si = setInterval(()=>{
		style(l_b, "*", "background", "linear-gradient(to bottom, yellow "+percent+"%, rgba(255,255,255, 0) "+(percent+10)+"%, rgba(255,255,255, 0) 100%)");
		percent += 1;
		if(percent >= 100){
			percent = 0;
			cl_Int(si);
			lighting_bolt();
		}
	},10);
}


function bolt_container(){
	bg = g(".bg");
	for(let i = 0; i < 6; i++){
		let rand_left = rand(10, 90);
		let rand_width = rand(20, 100);
		let bc = new_element("div", bg[0], "", ["bolt_container"], ["left", rand_left + "%", "width", rand_width + "px", "height", (rand_width * 4) + "px"], []);
	}
	let bc = g(".bolt_container");
	for(let k = 0; k < bc.length; k++){
		let bl1 = new_element("div", bc[k], "", ["lighting_bolt", "bolt_1"], [], []);
		let bl2 = new_element("div", bc[k], "", ["lighting_bolt", "bolt_2"], [], []);
		let bl3 = new_element("div", bc[k], "", ["lighting_bolt", "bolt_3"], [], []);
	}
	lighting_bolt();
}
load(bolt_container);

function bolts(){
	let bc = g(".bolt_container");
	for(let k = 0; k < bc.length; k++){
		let bl1 = new_element("div", bc[k], "", ["lighting_bolt", "bolt_1"], [], []);
		let bl2 = new_element("div", bc[k], "", ["lighting_bolt", "bolt_2"], [], []);
		let bl3 = new_element("div", bc[k], "", ["lighting_bolt", "bolt_3"], [], []);
	}
}

function raindrop(){
	for(let i = 0; i < 30; i++){
		let drop = new_element("div", bg[0], "", ["drop"], [], []);
	}
	drop_animation();
}
load(raindrop);

function drop_animation(){
	let drop = g(".drop");
	for(let i = 0; i < drop.length; i++){
		let rand_time = rand(100, 3000);
		let rand_left = rand(300, window.innerWidth);
		let left_end = rand_left - 280;
		setTimeout(()=>{
			setProperty(drop[i], "--rain_left", rand_left + "px", "--rain_left_end", left_end + "px");
			style(drop, i, "left", rand_left + "px", "animation", "raindrop 2s infinite");
		}, rand_time);
	}
}
