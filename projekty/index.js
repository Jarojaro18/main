let core;
let wall;
let res;
let project_image;
function load_variables(){
    core = g(".core");
    wall = g(".wall");
    res = g("#res");
    project_image = g(".gallery_image");
}
load(load_variables);

function wall_size(){
    let window_height = window.innerHeight;
    let window_width = window.innerWidth;
    if(window_width >= window_height){
        style(wall, "*", "width", "50vh", "height", "50vh");
    }
    else {
        style(wall, "*", "width", "50vw", "height", "50vw");
    }
}
load(wall_size);
resize(wall_size);

let x2;
let y2;
let x;
let y;
let xx;
let yy;
let y_1 = 0;
let x_1 = 0;
function rotate_cube(){
    window.onmousedown = (event)=>{
		window.onmousemove = (event)=>{
			x2 = event.clientX;
			y2 = event.clientY;
			let si = setTimeout(()=>{
				x = event.clientX;
				y = event.clientY;
                
				yy = y2 - y;
				xx = x2 - x;
                
                
				y_1 -= yy;
				x_1 += xx;

			}, 20)
			
			style(core, "0", "transform",  "rotateY("+(x_1/4)+"deg) rotateX("+(y_1/4)+"deg)");

		}
	}
	window.onmouseup = ()=>{
		x = 0;
		window.onmousemove = (event)=>{
			
		}
	}
}
load(rotate_cube);

function image_click(){
    let p_i_c = getId("project_images_container");
	let ex = getClass("exit");
    for(let i = 0; i < project_image.length; i++){
        project_image[i].onclick = ()=>{
            let source = project_image[i].getAttribute("src");
			style(p_i_c, "", "display", "flex");
			p_i_c.getElementsByTagName("img")[0].setAttribute("src", source);
        }
    }
    ex[0].onclick = ()=>{
		style(p_i_c, "", "display", "none");
	}
}
load(image_click);

function change_cube(name){
	let idnt = name;
	let cb_on = g("." + idnt);
	let side_1 = g(".side_1");
	let side_2 = g(".side_2");
	let side_3 = g(".side_3");
	style(side_1, "*", "display", "none");
	style(side_2, "*", "display", "none");
	style(side_3, "*", "display", "none");
	style(cb_on, "*", "display", "block");
}
function cursor_over() {
	let body = g("body");
	let cursor = g("#cursor");
	body[0].onmouseenter = ()=>{
		style(body, 0, "cursor", "auto !important");
	}
}
load(cursor_over);