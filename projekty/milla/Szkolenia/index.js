let lin_num = 0;
let img_text_num = 0;
let txt1;
let images = ["../images/training/training1.jpg", "../images/training/training2.jpg", "../images/training/training3.jpg", "../images/training/training4.jpg", "../images/training/training5.jpg", "../images/training/training6.jpg"];
let text_arr = ["Zdobądź nowe umiejętności", "Przekwalifikuj się zawodowo", "Rozpocznij nową ścieżkę kariery", "Odkryj w sobie nowe pasje", "Poszerz swoją wiedzę", ""];
function linear(){
	txt1 = g(".imgTxt1");
	txt1[0].innerHTML = text_arr[img_text_num];
	let ic = g(".imageContainer");
	let lin_interval = setInterval(()=>{
		style(ic, 0, "background-image", "linear-gradient(to right, rgba(255,255,255,1) "+lin_num+"%, rgba(255,255,255,0) "+(lin_num+30)+"%, rgba(255,255,255,0) "+(lin_num+70)+"%, rgba(255,255,255,1) "+(lin_num+100)+"%),  url("+images[img_text_num]+")");
		lin_num += 1;
		if(lin_num >= 100){
			cl_Int(lin_interval);
			img_text_num += 1;
			if(img_text_num >= images.length-1){
				img_text_num = 0;
			}
			linear2();
		}
	},10);
}
function linear2(){
	txt1[0].innerHTML = text_arr[img_text_num];
	let rnd_img = rand(0, images.length - 1);
	let ic = g(".imageContainer");
	let lin_interval = setInterval(()=>{
		style(ic, 0, "background-image", "linear-gradient(to right, rgba(255,255,255,1) "+lin_num+"%, rgba(255,255,255,0) "+(lin_num+30)+"%, rgba(255,255,255,0) "+(lin_num+70)+"%, rgba(255,255,255,1) "+(lin_num+100)+"%),  url("+images[img_text_num]+")");
		lin_num -= 1;
		if(lin_num < -100){
			cl_Int(lin_interval);
			img_text_num += 1;
			if(img_text_num >= images.length-1){
				img_text_num = 0;
			}
			linear();
		}
	},10);
}
load(linear);

function showCourse(cls){
	let cc = g(".course_content");
	let cl = cls;
	let gc = g("." + cl);
	if(cl == "all"){
		style(cc, "*", "display", "inline-block");
	}
	else {
		style(cc, "*", "display", "none");
		style(gc, "*", "display", "inline-block");
	}
}

