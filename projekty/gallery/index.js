function getFile(input){
	let gallery = g("#gallery");
	gallery.innerHTML = "";
	for(let i = 0; i < input.files.length; i++){
		var reader = new FileReader();
		reader.onload = (e)=>{
			let x = e.target.result;
			let el = new_element("div", gallery, "", ["photo_box"], ["background-image", "url("+x+")", "cursor", "pointer"], []);
		}
		reader.readAsDataURL(input.files[i]);
	}
	setTimeout(()=>{
		photo_index();
	}, input.files.length * 50);
}

let photo_url;
let photo_ix;
let p_g;
function photo_index(){
	let p_box = g(".photo_box");
	let p_max = g("#photo_max");
	p_g = g("#photo_g");
	let l_arrow = g(".l_arrow");
	let r_arrow = g(".r_arrow");
	let close = g(".close");
	for(let i = 0; i < p_box.length; i++){
		p_box[i].dataset.index = i;
		p_box[i].onclick = ()=>{
			photo_url = p_box[i].style.backgroundImage;
			style(p_max, "", "display", "block");
			style(p_g, "", "background-image", photo_url);
			photo_ix = p_box[i].dataset.index;
		}
	}
	l_arrow[0].onclick = ()=>{
		photo_ix -= 1;
		if(photo_ix < 0){
			photo_ix = p_box.length - 1;
		}
		alert(photo_ix);
		let url = p_box[photo_ix].style.backgroundImage;
		style(p_g, "", "background-image", url);
	}
	r_arrow[0].onclick = ()=>{
		photo_ix = parseInt(photo_ix) + 1;
		if(photo_ix > p_box.length - 1){
			photo_ix = 0;
		}
		alert(photo_ix);
		let url = p_box[photo_ix].style.backgroundImage;
		style(p_g, "", "background-image", url);
	}
	close[0].onclick = ()=>{
		photo_ix = null;
		style(p_max, "", "display", "none");
	}
}
let percent;
let filter_array = ["0", "0", "100", "100", "0", "0", "0", "100", ["0", "0", "0", "0", "0", "0"]];
let sh1;
let sh2;
let sh3;
let red;
let green;
let blue;
function add_filter(fl){
	let min = g("#min");
	let max = g("#max");
	let filter_btn = g(".filter_btn");
	let filter_name = fl;
	let filter = g("#filter_level");
	let filter_bcr = filter.getBoundingClientRect();
	let filter_left = filter_bcr.left;
	let filter_right = filter_bcr.right;
	style(filter_btn, "*", "color", "black");
	let el = g("." + filter_name);
	style(el, 0, "color", "green");
	
	if(filter_name == "sepia"){
		min.innerHTML = "0%";
		max.innerHTML = "100%";
		style(filter, "", "background", "linear-gradient(to right, black 0%, black "+filter_array[0]+"%, white "+filter_array[0]+"%, white 100%)");
		filter.innerText = filter_array[0] + "%";
	}
	if(filter_name == "blur"){
		min.innerHTML = "0px";
		max.innerHTML = "20px";
		style(filter, "", "background", "linear-gradient(to right, black 0%, black "+(filter_array[1]*100)/20+"%, white "+(filter_array[1]*100)/20+"%, white 100%)");
		filter.innerText = filter_array[1] + "px";
	}
	if(filter_name == "brightness"){
		min.innerHTML = "0%";
		max.innerHTML = "200%";
		style(filter, "", "background", "linear-gradient(to right, black 0%, black "+filter_array[2]/2+"%, white "+filter_array[2]/2+"%, white 100%)");
		filter.innerText = filter_array[2]/2 + "%";
	}
	if(filter_name == "contrast"){
		min.innerHTML = "0%";
		max.innerHTML = "200%";
		style(filter, "", "background", "linear-gradient(to right, black 0%, black "+filter_array[3]/2+"%, white "+filter_array[3]/2+"%, white 100%)");
		filter.innerText = filter_array[3]/2 + "%";
	}
	if(filter_name == "grayscale"){
		min.innerHTML = "0%";
		max.innerHTML = "100%";
		style(filter, "", "background", "linear-gradient(to right, black 0%, black "+filter_array[4]+"%, white "+filter_array[4]+"%, white 100%)");
		filter.innerText = filter_array[4] + "%";
	}
	if(filter_name == "hue-rotate"){
		min.innerHTML = "0deg";
		max.innerHTML = "360deg";
		style(filter, "", "background", "linear-gradient(to right, black 0%, black "+((filter_array[5]*100)/360).toFixed(0)+"%, white "+((filter_array[5]*100)/360).toFixed(0)+"%, white 100%)");
		filter.innerText = filter_array[5] + "deg";
	}
	if(filter_name == "invert"){
		min.innerHTML = "0%";
		max.innerHTML = "100%";
		style(filter, "", "background", "linear-gradient(to right, black 0%, black "+filter_array[6]+"%, white "+filter_array[6]+"%, white 100%)");
		filter.innerText = filter_array[6] + "%";
	}
	if(filter_name == "saturate"){
		min.innerHTML = "0%";
		max.innerHTML = "200%";
		style(filter, "", "background", "linear-gradient(to right, black 0%, black "+filter_array[7]/2+"%, white "+filter_array[7]/2+"%, white 100%)");
		filter.innerText = filter_array[7] + "%";
	}
	if(filter_name == "drop-shadow"){
		drop_height();
	}
	filter.onclick = (event)=>{
		let x = event.clientX;
		percent = Math.abs(((x - filter_left)/(filter_right - filter_left)) * 100).toFixed(0);
		style(filter, "", "background", "linear-gradient(to right, black 0%, black "+percent+"%, white "+percent+"%, white 100%)");
		
		if(filter_name == "sepia"){
			filter.innerText = percent + "%";
			filter_array[0] = percent;
			style(p_g, "", "filter", "sepia("+filter_array[0]+"%) blur("+filter_array[1]+"px) brightness("+filter_array[2]+"%) contrast("+filter_array[3]+"%) grayscale("+filter_array[4]+"%) hue-rotate("+filter_array[5]+"deg) invert("+filter_array[6]+"%) saturate("+filter_array[7]+"%) drop-shadow("+filter_array[8][0]+"px "+filter_array[8][1]+"px "+filter_array[8][2]+"px rgb("+filter_array[8][3]+","+filter_array[8][4]+","+filter_array[8][5]+"))");
		}
		if(filter_name == "blur"){
			filter_array[1] = ((20*percent)/100).toFixed(0);
			filter.innerText = ((20*percent)/100).toFixed(0) + "px";
			style(p_g, "", "filter", "sepia("+filter_array[0]+"%) blur("+filter_array[1]+"px) brightness("+filter_array[2]+"%) contrast("+filter_array[3]+"%) grayscale("+filter_array[4]+"%) hue-rotate("+filter_array[5]+"deg) invert("+filter_array[6]+"%) saturate("+filter_array[7]+"%) drop-shadow("+filter_array[8][0]+"px "+filter_array[8][1]+"px "+filter_array[8][2]+"px rgb("+filter_array[8][3]+","+filter_array[8][4]+","+filter_array[8][5]+"))");
		}
		if(filter_name == "brightness"){
			filter.innerText = (percent*2) + "%";
			filter_array[2] = percent*2;
			style(p_g, "", "filter", "sepia("+filter_array[0]+"%) blur("+filter_array[1]+"px) brightness("+filter_array[2]+"%) contrast("+filter_array[3]+"%) grayscale("+filter_array[4]+"%) hue-rotate("+filter_array[5]+"deg) invert("+filter_array[6]+"%) saturate("+filter_array[7]+"%) drop-shadow("+filter_array[8][0]+"px "+filter_array[8][1]+"px "+filter_array[8][2]+"px rgb("+filter_array[8][3]+","+filter_array[8][4]+","+filter_array[8][5]+"))");
		}
		if(filter_name == "contrast"){
			filter.innerText = (percent*2) + "%";
			filter_array[3] = percent*2;
			style(p_g, "", "filter", "sepia("+filter_array[0]+"%) blur("+filter_array[1]+"px) brightness("+filter_array[2]+"%) contrast("+filter_array[3]+"%) grayscale("+filter_array[4]+"%) hue-rotate("+filter_array[5]+"deg) invert("+filter_array[6]+"%) saturate("+filter_array[7]+"%) drop-shadow("+filter_array[8][0]+"px "+filter_array[8][1]+"px "+filter_array[8][2]+"px rgb("+filter_array[8][3]+","+filter_array[8][4]+","+filter_array[8][5]+"))");
		}
		if(filter_name == "grayscale"){
			filter.innerText = percent + "%";
			filter_array[4] = percent;
			style(p_g, "", "filter", "sepia("+filter_array[0]+"%) blur("+filter_array[1]+"px) brightness("+filter_array[2]+"%) contrast("+filter_array[3]+"%) grayscale("+filter_array[4]+"%) hue-rotate("+filter_array[5]+"deg) invert("+filter_array[6]+"%) saturate("+filter_array[7]+"%) drop-shadow("+filter_array[8][0]+"px "+filter_array[8][1]+"px "+filter_array[8][2]+"px rgb("+filter_array[8][3]+","+filter_array[8][4]+","+filter_array[8][5]+"))");
		}
		if(filter_name == "hue-rotate"){
			filter.innerText = ((360 * percent)/100).toFixed(0) + "deg";
			filter_array[5] = ((360 * percent)/100).toFixed(0);
			style(p_g, "", "filter", "sepia("+filter_array[0]+"%) blur("+filter_array[1]+"px) brightness("+filter_array[2]+"%) contrast("+filter_array[3]+"%) grayscale("+filter_array[4]+"%) hue-rotate("+filter_array[5]+"deg) invert("+filter_array[6]+"%) saturate("+filter_array[7]+"%) drop-shadow("+filter_array[8][0]+"px "+filter_array[8][1]+"px "+filter_array[8][2]+"px rgb("+filter_array[8][3]+","+filter_array[8][4]+","+filter_array[8][5]+"))");
		}
		if(filter_name == "invert"){
			filter.innerText = percent + "%";
			filter_array[6] = percent;
			style(p_g, "", "filter", "sepia("+filter_array[0]+"%) blur("+filter_array[1]+"px) brightness("+filter_array[2]+"%) contrast("+filter_array[3]+"%) grayscale("+filter_array[4]+"%) hue-rotate("+filter_array[5]+"deg) invert("+filter_array[6]+"%) saturate("+filter_array[7]+"%) drop-shadow("+filter_array[8][0]+"px "+filter_array[8][1]+"px "+filter_array[8][2]+"px rgb("+filter_array[8][3]+","+filter_array[8][4]+","+filter_array[8][5]+"))");
		}
		if(filter_name == "saturate"){
			filter.innerText = percent*2 + "%";
			filter_array[7] = percent*2;
			style(p_g, "", "filter", "sepia("+filter_array[0]+"%) blur("+filter_array[1]+"px) brightness("+filter_array[2]+"%) contrast("+filter_array[3]+"%) grayscale("+filter_array[4]+"%) hue-rotate("+filter_array[5]+"deg) invert("+filter_array[6]+"%) saturate("+filter_array[7]+"%) drop-shadow("+filter_array[8][0]+"px "+filter_array[8][1]+"px "+filter_array[8][2]+"px rgb("+filter_array[8][3]+","+filter_array[8][4]+","+filter_array[8][5]+"))");
		}
	}
	
}
let rgb_c;
function drop_height(){
	let bc = g("#buttons_container");
	rgb_c = g("#rgb_color");
	let bc_bcr = bc.getBoundingClientRect();
	let bc_height = bc_bcr.height;
	let drop = g(".drop_btn");
	style(drop, 0, "display", "flex");
	style(rgb_c, "", "background-color", "black");
	let c_drop = g(".close_drop");
	c_drop[0].onclick = ()=>{
		style(drop, 0, "display", "none");
		add_filter('sepia');
	}
}

function hvb(){
	let horizontal_input = g("#horizontal");
	let vertical_input = g("#vertical");
	let blur_input = g("#blur");
	sh1 = horizontal_input.value;
	sh2 = vertical_input.value;
	sh3 = blur_input.value;
	filter_array[8][0] = sh1;
	filter_array[8][1] = sh2;
	filter_array[8][2] = sh3;
	drop_shadow();
}
function rgb(){
	let red_input = g("#red");
	let green_input = g("#green");
	let blue_input = g("#blue");
	red = red_input.value;
	green = green_input.value;
	blue = blue_input.value;
	style(rgb_c, "", "background-color", "rgb("+red+", "+green+", "+blue+")");
	filter_array[8][3] = red;
	filter_array[8][4] = green;
	filter_array[8][5] = blue;
	drop_shadow();
}
function drop_shadow(){
	style(p_g, "", "filter", "sepia("+filter_array[0]+"%) blur("+filter_array[1]+"px) brightness("+filter_array[2]+"%) contrast("+filter_array[3]+"%) grayscale("+filter_array[4]+"%) hue-rotate("+filter_array[5]+"deg) invert("+filter_array[6]+"%) saturate("+filter_array[7]+"%) drop-shadow("+filter_array[8][0]+"px "+filter_array[8][1]+"px "+filter_array[8][2]+"px rgb("+filter_array[8][3]+","+filter_array[8][4]+","+filter_array[8][5]+"))");
}