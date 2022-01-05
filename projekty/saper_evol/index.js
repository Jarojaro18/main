let gameboard;
let gameboard_container;
let dimension;
let field;
function gameboard_size(){
	gameboard = g("#gameboard");
	gameboard_container = g("#gameboard_container");
	let window_width = window.innerWidth;
	let window_height = window.innerHeight;
	if(window_width >= window_height){
		style(gameboard, "", "width", "80vh", "height", "80vh");
	}
	else {
		style(gameboard, "", "width", "80vw", "height", "80vw");
	}
}
load(gameboard_size);
resize(gameboard_size);




let x_pos = 0;
let y_pos = 0;
let time_array;
function set_level(size, arr){
	dimension = size;
	time_array = arr;
	style(gameboard_container, "", "display", "flex");
	for(let i = 0; i < (dimension * dimension); i++){
		let el = new_element("div", gameboard, "", ["field"], ["width", ((1/dimension)*100) + "%", "height", ((1/dimension)*100) + "%", "font-size", ((1/dimension)*25) + "vw"], ["x", x_pos, "y", y_pos, "bomb_num", 0, "position", x_pos+(y_pos*dimension)]);
		x_pos += 1;
		if(x_pos >= dimension){
			y_pos += 1;
			x_pos = 0;
		}
	}
	set_bombs();
}

function set_bombs(){
	field = g(".field");
	for(let i = 0; i < Math.abs((dimension*dimension)*0.1); i++){
		let random_field = rand(0, (field.length - 1));
		if((field[random_field].dataset.bomb == "yes") == true){
			i -= 1;
		}
		else {
			field[random_field].dataset.bomb = "yes";
			addClass(field[random_field], "bomb");
		}
	}
	get_near_bombs_num();
}
let bomb_num;
function get_near_bombs_num(){
	for(let i = 0; i < field.length; i++){
		//let field_x = parseInt(field[i].dataset.x);
		//let field_y = parseInt(field[i].dataset.y);
		for(let j = 0; j < field.length; j++){
			if(((parseInt(field[i].dataset.x) - parseInt(field[j].dataset.x) == (-1)) && parseInt(field[i].dataset.y) - parseInt(field[j].dataset.y) == (-1)) && (field[j].dataset.bomb == "yes") == true){
				let f = parseInt(field[i].dataset.bomb_num);
				f += 1;
				field[i].dataset.bomb_num = f;
			}
			else if(((parseInt(field[i].dataset.x) - parseInt(field[j].dataset.x) == (0)) && parseInt(field[i].dataset.y) - parseInt(field[j].dataset.y) == (-1)) && (field[j].dataset.bomb == "yes") == true){
				let f = parseInt(field[i].dataset.bomb_num);
				f += 1;
				field[i].dataset.bomb_num = f;
			}
			else if(((parseInt(field[i].dataset.x) - parseInt(field[j].dataset.x) == (1)) && parseInt(field[i].dataset.y) - parseInt(field[j].dataset.y) == (-1)) && (field[j].dataset.bomb == "yes") == true){
				let f = parseInt(field[i].dataset.bomb_num);
				f += 1;
				field[i].dataset.bomb_num = f;
			}
			else if(((parseInt(field[i].dataset.x) - parseInt(field[j].dataset.x) == (-1)) && parseInt(field[i].dataset.y) - parseInt(field[j].dataset.y) == (0)) && (field[j].dataset.bomb == "yes") == true){
				let f = parseInt(field[i].dataset.bomb_num);
				f += 1;
				field[i].dataset.bomb_num = f;
			}
			else if(((parseInt(field[i].dataset.x) - parseInt(field[j].dataset.x) == (-1)) && parseInt(field[i].dataset.y) - parseInt(field[j].dataset.y) == (1)) && (field[j].dataset.bomb == "yes") == true){
				let f = parseInt(field[i].dataset.bomb_num);
				f += 1;
				field[i].dataset.bomb_num = f;
			}
			else if(((parseInt(field[i].dataset.x) - parseInt(field[j].dataset.x) == (0)) && parseInt(field[i].dataset.y) - parseInt(field[j].dataset.y) == (1)) && (field[j].dataset.bomb == "yes") == true){
				let f = parseInt(field[i].dataset.bomb_num);
				f += 1;
				field[i].dataset.bomb_num = f;
			}
			else if(((parseInt(field[i].dataset.x) - parseInt(field[j].dataset.x) == (1)) && parseInt(field[i].dataset.y) - parseInt(field[j].dataset.y) == (1)) && (field[j].dataset.bomb == "yes") == true){
				let f = parseInt(field[i].dataset.bomb_num);
				f += 1;
				field[i].dataset.bomb_num = f;
			}
			else if(((parseInt(field[i].dataset.x) - parseInt(field[j].dataset.x) == (1)) && parseInt(field[i].dataset.y) - parseInt(field[j].dataset.y) == (0)) && (field[j].dataset.bomb == "yes") == true){
				let f = parseInt(field[i].dataset.bomb_num);
				f += 1;
				field[i].dataset.bomb_num = f;
			}
		}
		bomb_num = 0;
	}
	bomb_nums();
}
function bomb_nums(){
	game_time();
	for(let i = 0; i < field.length; i++){
		field[i].onclick = ()=>{
			if(field[i].dataset.bomb !== "yes"){
				if(field[i].dataset.bomb_num == 0){
					field[i].innerText = "";
					field[i].classList.add("empty_field");
					show_fields();
					winning_game();
				}
				else {
					field[i].innerText = field[i].dataset.bomb_num;
					field[i].classList.add("full_field");
					winning_game();
				}
			}
			else {
				field[i].innerHTML = "<i class='fas fa-bomb'></i>";
				alert("BOOM - przegrałeś");
				location.reload();
			}
		}
	}
}




let e_f;

function show_fields(){
	e_f = g(".empty_field");
	for(let i = 0; i < e_f.length; i++){
		for(let j = 0; j < field.length; j++){
			if(((parseInt(e_f[i].dataset.x) - parseInt(field[j].dataset.x) == (0)) && parseInt(e_f[i].dataset.y) - parseInt(field[j].dataset.y) == (-1)) && field[j].dataset.bomb !== "yes"){
				if(field[j].dataset.bomb_num == 0){
					field[j].classList.add("empty_field");
					field[j].innerText = "";
					winning_game();
				}
				else {
					field[j].innerText = field[j].dataset.bomb_num;
					field[j].classList.add("full_field");
					winning_game();
				}
			}
			else if(((parseInt(e_f[i].dataset.x) - parseInt(field[j].dataset.x) == (-1)) && parseInt(e_f[i].dataset.y) - parseInt(field[j].dataset.y) == (0)) && field[j].dataset.bomb !== "yes"){
				if(field[j].dataset.bomb_num == 0){
					field[j].classList.add("empty_field");
					field[j].innerText = "";
					winning_game();
				}
				else {
					field[j].innerText = field[j].dataset.bomb_num;
					field[j].classList.add("full_field");
					winning_game();
				}
			}

			else if(((parseInt(e_f[i].dataset.x) - parseInt(field[j].dataset.x) == (0)) && parseInt(e_f[i].dataset.y) - parseInt(field[j].dataset.y) == (1)) && field[j].dataset.bomb !== "yes"){
				if(field[j].dataset.bomb_num == 0){
					field[j].classList.add("empty_field");
					field[j].innerText = "";
					winning_game();
				}
				else {
					field[j].innerText = field[j].dataset.bomb_num;
					field[j].classList.add("full_field");
					winning_game();
				}
			}

			else if(((parseInt(e_f[i].dataset.x) - parseInt(field[j].dataset.x) == (1)) && parseInt(e_f[i].dataset.y) - parseInt(field[j].dataset.y) == (0)) && field[j].dataset.bomb !== "yes"){
				if(field[j].dataset.bomb_num == 0){
					field[j].classList.add("empty_field");
					field[j].innerText = "";
					winning_game();
				}
				else {
					field[j].innerText = field[j].dataset.bomb_num;
					field[j].classList.add("full_field");
					winning_game();
				}
			}
			else if(((parseInt(e_f[i].dataset.x) - parseInt(field[j].dataset.x) == (-1)) && parseInt(e_f[i].dataset.y) - parseInt(field[j].dataset.y) == (-1)) && field[j].dataset.bomb !== "yes" && field[j].dataset.bomb_num != 0){
				field[j].innerText = field[j].dataset.bomb_num;
				field[j].classList.add("full_field");
				winning_game();
			}
			else if(((parseInt(e_f[i].dataset.x) - parseInt(field[j].dataset.x) == (-1)) && parseInt(e_f[i].dataset.y) - parseInt(field[j].dataset.y) == (1)) && field[j].dataset.bomb !== "yes" && field[j].dataset.bomb_num != 0){
				field[j].innerText = field[j].dataset.bomb_num;
				field[j].classList.add("full_field");
				winning_game();
			}
			else if(((parseInt(e_f[i].dataset.x) - parseInt(field[j].dataset.x) == (1)) && parseInt(e_f[i].dataset.y) - parseInt(field[j].dataset.y) == (-1)) && field[j].dataset.bomb !== "yes" && field[j].dataset.bomb_num != 0){
				field[j].innerText = field[j].dataset.bomb_num;
				field[j].classList.add("full_field");
				winning_game();
			}
			else if(((parseInt(e_f[i].dataset.x) - parseInt(field[j].dataset.x) == (1)) && parseInt(e_f[i].dataset.y) - parseInt(field[j].dataset.y) == (1)) && field[j].dataset.bomb !== "yes" && field[j].dataset.bomb_num != 0){
				field[j].innerText = field[j].dataset.bomb_num;
				field[j].classList.add("full_field");
				winning_game();
			}
		}
	}
}
let si;
let time_in_sec = 0;
function game_time(){
	si = setInterval(()=>{
		time_in_sec += 1;
	}, 1000);
}

function winning_game(){
	let full_field = g(".full_field");
	let bomb_fields = g(".bomb");
	let sum_of_field = e_f.length + full_field.length;
	if(sum_of_field >= ((dimension*dimension) - bomb_fields.length)){
		alert("WYGRAŁEŚ");
		time_array.push(time_in_sec);
		setStorage();
		cl_Int(si);
		location.reload();
	}
}

function clear_e_f(){
	for(let i = 0; i < e_f.length; i++){
		if(e_f[i].innerText !== ""){
			e_f[i].innerText = "";
		}
	}
}
function reset_show(){
	setInterval(()=>{
		show_fields();
		clear_e_f();
	},50);
}
load(reset_show);

