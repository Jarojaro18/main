let el_n;
let el_;
let polygons = [];
let polygon_marks = []
{

let polygon_maker;
let pol_width_value;
let pol_height_value;
let window_width;
let window_height;
let polygon;
let polygon_mark;
let active_polygon;
let num_of_polygon = 0;
let layers;
let layer;
function set_size(){
	let pol_width = g("#pol_width");
	let pol_height = g("#pol_height");
	let line = g(".line");
	polygon_maker = g("#polygon_maker");
	
	pol_width_value = pol_width.value;
	pol_height_value = pol_height.value;
	
	window_width = window.innerWidth;
	window_height = window.innerHeight;
	
	if(isNaN(pol_width_value) == true || isNaN(pol_height_value) == true || pol_width_value > window_width || pol_height_value > window_height){
		alert("Nieprawidłowa wartość!");
		pol_width.value = "";
		pol_height.value = "";
		style(polygon_maker, "", "width", "200px", "height", "200px", "clip-path", null);
	}
	else {
		style(polygon_maker, "", "width", pol_width_value + "px", "height", pol_height_value + "px");
		if(line.length === 0){
			make_lines();
			cursor_percentage();
		}
		else {
			change_line_dimension();
		}
	}
}

function make_lines(){
	for(let i = 0; i <= 100; i++){
		let el = new_element("div", polygon_maker, null, ["line", "horizontal_line"], ["position", "absolute", "left", i + "%", "width", "1px", "height", pol_height_value + "px", "background-color", "rgba(100,100,100, 0.4)", "z-index", "90"], []);
		let el2 = new_element("div", polygon_maker, null, ["line", "vertical_line"], ["position", "absolute", "top", i + "%", "height", "1px", "width", pol_width_value + "px", "background-color", "rgba(100,100,100, 0.4)", "z-index", "90"], []);
	}
}
function change_line_dimension(){
	let horizontal_line = g(".horizontal_line");
	let vertical_line = g(".vertical_line");

	style(horizontal_line, "*", "height", pol_height_value + "px");
	style(vertical_line, "*", "width", pol_width_value + "px");
}
let clip_path_string;
let clip_path;

function cursor_percentage(){
	let percentage = g(".percentage");
	polygon = g(".polygon");
	clip_path = g("#clip_path");
	layers = g(".layers");
	layer = g(".layer");
	active_polygon = polygon[num_of_polygon];
	polygon_maker.onmousemove = (event)=>{
		let x = event.clientX;
		let y = event.clientY;
		let left_percentage = Math.round((((x - polygon_maker.offsetLeft)/polygon_maker.offsetWidth)*100).toFixed(2));
		let top_percentage = Math.round((((y - polygon_maker.offsetTop)/polygon_maker.offsetHeight)*100).toFixed(2));
		percentage[0].innerHTML = "Lewo: " + left_percentage + "%, Góra: " + top_percentage + "%";
		polygon_maker.onclick = ()=>{
			polygon_mark = g(".polygon_mark");
			style(polygon_mark, "*", "background-color", "red");
			let polygon_mark_class = "polygon_mark_" + num_of_polygon;
			let el = new_element("div", polygon_maker, null, ["polygon_mark", polygon_mark_class ], ["left", "calc("+left_percentage+"% - 3px)", "top", "calc("+top_percentage+"% - 3px)"], ["left", left_percentage + "%", "top", top_percentage + "%"]);
			path();
		}
	}

	one_step_back();
}
let polygons_class;
function one_step_back(){
	window.onkeydown = (event)=>{
		if(event.keyCode == 17){
			window.onkeydown = (event)=>{
				if(event.keyCode == 90){
					let pol_class = ".polygon_mark_" + num_of_polygon;
					let remove_polygon = g(pol_class);
					remove_polygon[remove_polygon.length - 1].remove();
					path();
				}
			}
		}
	}
}

function path(){
	polygons_class = g(".polygon_mark_" + num_of_polygon);
	clip_path_string = polygons_class[0].dataset.left + " " + polygons_class[0].dataset.top;
	for(let i = 1; i < polygons_class.length; i++){
		clip_path_string += (", " + polygons_class[i].dataset.left + " " + polygons_class[i].dataset.top);
	}
	style(polygon, num_of_polygon, "clip-path", "polygon("+clip_path_string+")");
	polygons_paths();
}

function add_layer(){
	polygons_paths();
	let r = rand(0,255);
	let g = rand(0,255);
	let b = rand(0,255);
	let el = new_element("div", polygon_maker, null, ["polygon"], ["background-color", "rgba("+r+", "+ g +", "+ b+", 0.3)", "z-index", (num_of_polygon + 1)], []);
	num_of_polygon += 1;
	let el2 = new_element("div", layers[0], null, ["layer"], [], []);
	layer[num_of_polygon].innerHTML = "Warstwa_" + num_of_polygon;
	
	clip_path_string = "";
	show_marks();
	
}
function remove_layer(){
	let layer_length = layer.length;
	if(layer_length <= 1){}
	else {
		layer[layer_length - 1].remove();
		polygon[layer_length - 1].remove();
		polygons.splice(num_of_polygon, 1);
		let polygon_layer = ".polygon_mark_" + num_of_polygon;
		num_of_polygon -= 1;
		polygons_paths();
		show_marks();
		let polygon_marks = g(polygon_layer);
		for(let i = polygon_marks.length; i = 1; i--){
			polygon_marks[i - 1].remove();
		}
	}
	
}
function polygons_paths(){
	clip_path.innerHTML = "";
	for(let i = num_of_polygon; i >= 0; i--){
		
		let polygon_layer = ".polygon_mark_" + i;
		let polygon_marks = g(polygon_layer);
		clip_path.innerHTML += "clip-path: polygon(" + polygon_marks[0].dataset.left + " " + polygon_marks[0].dataset.top;
		for(let j = 1; j < polygon_marks.length; j++){
			clip_path.innerHTML += (", " + polygon_marks[j].dataset.left + " " + polygon_marks[j].dataset.top);
		}
		clip_path.innerHTML += ")</br>";
	}
}
function show_marks(){
	let polygon_layer = ".polygon_mark_" + num_of_polygon;
	let polygon_marks = g(polygon_layer);
	let all_polygon_marks = g(".polygon_mark");
	style(all_polygon_marks, "*", "display", "none");
	style(polygon_marks, "*", "display", "block");
}
}
