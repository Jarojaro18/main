let lc
function col_size(){
	lc = g(".left_col");
	let rc = g(".right_col");
	let ww = window.innerWidth;
	let wh = window.innerHeight;
	if(wh > ww){
		style(lc, "*", "width", "100%", "min-height", "400px", "background-size", "auto 100%");
		style(rc, "*", "width", "100%", "height", "auto", "min-height", "400px");
	}
	else {
		style(lc, "*", "width", "40%", "background-size", "auto 100%");
		style(rc, "*", "width", "60%");
	}
}
load(col_size);
resize(col_size);




let lisa_image = [];

let rosie_image = [];

let jennie_image = [];

let jisoo = {
	name: "Kim Ji-soo",
	birth: "3 stycznia 1995",
	height: "162cm",
	weight: "45kg",
	zodiac: "Koziorożec",
	nationality: "Korea Południowa",
	position: "lead vocalist, visual",
	obj_arr: ["url(../images/jisoo1.png)", "url(../images/jisoo2.png)", "url(../images/jisoo3.png)", "url(../images/jisoo4.png)", "url(../images/jisoo5.png)", "url(../images/jisoo6.png)"],
	insta_href: "https://www.instagram.com/sooyaaa__/",
	photogallery: ["jisoo/jisoo1.jpg", "jisoo/jisoo2.jpg", "jisoo/jisoo3.jpg", "jisoo/jisoo4.jpg", "jisoo/jisoo5.jpg", "jisoo/jisoo6.jpg"]
};
let lisa = {
	name: "Lalisa Manoban / Pranpriya Manoban",
	birth: "27 marzec 1997",
	height: "167cm",
	weight: "46kg",
	zodiac: "Baran",
	nationality: "Tajlandia",
	position: "main dancer, lead rapper, sub-vocalist",
	obj_arr: ["url(../images/lisa1.png)", "url(../images/lisa2.png)", "url(../images/lisa3.png)", "url(../images/lisa4.png)", "url(../images/lisa5.png)", "url(../images/lisa6.png)"],
	insta_href: "https://www.instagram.com/lalalalisa_m/",
	photogallery: ["lisa/lisa1.jpg", "lisa/lisa2.jpg", "lisa/lisa3.jpg", "lisa/lisa4.jpg", "lisa/lisa5.jpg", "lisa/lisa6.jpg", "lisa/lisa7.jpg"]
};
let rosie = {
	name: "Park Chae Young ",
	birth: "11 luty 1997",
	height: "168cm",
	weight: "45kg",
	zodiac: "Wodnik",
	nationality: "Nowa Zelandia",
	position: "main vocalist, lead dancer",
	obj_arr: ["url(../images/rosie1.png)", "url(../images/rosie2.png)", "url(../images/rosie3.png)", "url(../images/rosie4.png)", "url(../images/rosie5.png)", "url(../images/rosie6.png)"],
	insta_href: "https://www.instagram.com/roses_are_rosie/",
	photogallery: ["rose/rose1.jpg", "rose/rose2.jpg", "rose/rose3.jpg", "rose/rose4.jpg", "rose/rose5.jpg", "rose/rose6.jpg"]
};
let jennie = {
	name: "Jennie Kim",
	birth: "16 styczeń 1996",
	height: "163cm",
	weight: "50kg",
	zodiac: "Koziorożec",
	nationality: "Korea Południowa",
	position: "main rapper, lead vocalist, face of the group",
	obj_arr: ["url(../images/jennie1.png)", "url(../images/jennie2.png)", "url(../images/jennie3.png)", "url(../images/jennie4.png)", "url(../images/jennie5.png)", "url(../images/jennie6.png)"],
	insta_href: "https://www.instagram.com/jennierubyjane/",
	photogallery: ["jennie/jennie1.jpg", "jennie/jennie2.jpg", "jennie/jennie3.jpg", "jennie/jennie4.jpg", "jennie/jennie5.jpg", "jennie/jennie6.jpg"]
};

let singer_name;
let singer_birth_date;
let singer_height;
let singer_weight;
let singer_zodiac;
let singer_nationality;
let singer_position;
let singer_instagram;
let photogallery;
let close_gallery;
let photo_max;
let photo_max_container;
let photo_index;
let prev_photo;
let next_photo;

function load_let(){
	singer_name = g("#singer_name");
	singer_birth_date = g("#birth_date");
	singer_height = g("#height");
	singer_weight = g("#weight");
	singer_zodiac = g("#zodiac");
	singer_nationality = g("#nationality");
	singer_position = g("#position");
	singer_instagram = g("#instagram");
	photogallery = g("#photogallery");
	close_gallery = g(".close_gallery");
	photo_max = g(".photo_max");
	photo_max_container = g("#photo_max_container");
	prev_photo = g(".prev_photo");
	next_photo = g(".next_photo");
}
load(load_let);
let s_image;
let n_image;
let obn;
function singer_data(obj_name){
	cl_Int(s_image);
	n_image = 0;
	singer_name.innerHTML = "";
	singer_birth_date.innerHTML = "";
	singer_height.innerHTML = "";
	singer_weight.innerHTML = "";
	singer_zodiac.innerHTML = "";
	singer_nationality.innerHTML = "";
	singer_position.innerHTML = "";
	singer_instagram.innerHTML = "";
	photogallery.innerHTML = "";
	
	obn = obj_name;
	singer_name.innerHTML = obn.name;
	singer_birth_date.innerHTML = "Data urodzenia: <span class='data'>" + obn.birth + "</span>";
	singer_height.innerHTML = "Wzrost: <span class='data'>" + obn.height + "</span>";
	singer_weight.innerHTML = "Waga: <span class='data'>" + obn.weight + "</span>";
	singer_zodiac.innerHTML = "Znak zodiaku: <span class='data'>" + obn.zodiac + "</span>";
	singer_nationality.innerHTML = "Kraj pochodzenia: <span class='data'>" + obn.nationality + "</span>";
	singer_position.innerHTML = "Rola w zespole: <span class='data'>" + obn.position + "</span>";
	singer_instagram.innerHTML = "<a href="+obn.insta_href+"><i class='fab fa-instagram'></i></a>";
	style(lc, "*", "background-image", obn.obj_arr[n_image]);
	s_image = setInterval(()=>{
		n_image += 1;
		if(n_image >= obn.obj_arr.length){
			n_image = 0;
		}
		style(lc, "*", "background-image", obn.obj_arr[n_image]);
	},3000);
	for(let i = 0; i < obn.photogallery.length; i++){
		//let div = create("div");
		//photogallery.append(div);
		//addClass(div, "photo_min");
		//div.dataset.index = i;
		
		let div = new_element("div", photogallery, "", ["photo_min"], [], ["index", i]);
		div.innerHTML = "<img src="+obn.photogallery[i]+"/>";
		div.onclick = ()=>{
			
			photo_index = parseInt(div.dataset.index);
			style(photo_max_container, "", "display", "flex");
			photo_max[0].src = obn.photogallery[photo_index];
		}
		
	}
}

function close_photo_gallery(){
	close_gallery[0].onclick = ()=>{
		style(photo_max_container, "", "display", "none");
		photo_index = 0;
	}
}
load(close_photo_gallery);

function change_photo(){
	prev_photo[0].onclick = ()=>{
		photo_index -= 1;
		if(photo_index < 0){
			photo_index = obn.photogallery.length -1;
		}
		photo_max[0].src = obn.photogallery[photo_index];
	}
	next_photo[0].onclick = ()=>{
		photo_index += 1;
		if(photo_index > obn.photogallery.length -1){
			photo_index = 0;
		}
		photo_max[0].src = obn.photogallery[photo_index];
	}
}
load(change_photo);
