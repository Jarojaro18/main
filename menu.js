let menu_button;
let menu_box;
let menu_button_num = 0;
let blurred;
function load_variables(){
	menu_button = g(".menu_button");
	menu_box = g("#menu_box");
	polygons = g(".polygons");
	blurred = g(".blur");
}
load(load_variables);
function show_menu(direction){
	let dr = direction;
	if(dr == "down"){
		style(blurred, 0, "filter", "blur(10px)");
		style(menu_box, "", "display", "flex");
		let menu_si = setInterval(()=>{
			let pol_bcr = polygons[0].getBoundingClientRect();
			let menu_button_bcr = menu_button[menu_button_num].getBoundingClientRect();
			let menu_button_bottom = menu_button_bcr.bottom;
			let polygon_top = pol_bcr.top;
			if(polygon_top >= menu_button_bottom){
				style(menu_button, menu_button_num, "opacity", "1");
				menu_button_num += 1;
			}
			if(menu_button_num >= 3){
				cl_Int(menu_si);
				menu_button_num = 2;
			}
		},10);
	}
	else {
		let menu_si = setInterval(()=>{
			let pol_bcr = polygons[0].getBoundingClientRect();
			let menu_button_bcr = menu_button[menu_button_num].getBoundingClientRect();
			let menu_button_top = menu_button_bcr.top;
			let polygon_bottom = pol_bcr.bottom;
			if(polygon_bottom <= menu_button_top){
				style(menu_button, menu_button_num, "opacity", "0");
				menu_button_num -= 1;
			}
			if(menu_button_num < 0){
				cl_Int(menu_si);
				style(menu_box, "", "display", "none");
				menu_button_num = 0;
				style(blurred, 0, "filter", "blur(0px)");
			}
		},10);
	}
}
