let certificate = ["../images/certificate/amazon.jpg", 
"../images/certificate/amazon2.jpg", 
"../images/certificate/ap.jpg", 
"../images/certificate/biar.jpg", 
"../images/certificate/bridal.jpg",
"../images/certificate/camp.jpg",
"../images/certificate/chomycka.jpg",
"../images/certificate/clarena.jpg",
"../images/certificate/clarena1.jpg",
"../images/certificate/college.jpg",
"../images/certificate/cosmobelle.jpg",
"../images/certificate/cosmobelle1.jpg",
"../images/certificate/exclashes.jpg",
"../images/certificate/faceart.jpg",
"../images/certificate/gil.jpg",
"../images/certificate/jo.jpg",
"../images/certificate/jo2.jpg",
"../images/certificate/lingerista1.jpg",
"../images/certificate/lingerista2.jpg",
"../images/certificate/lne.jpg",
"../images/certificate/monimar.jpg",
"../images/certificate/monimar2.jpg",
"../images/certificate/monimar3.jpg",
"../images/certificate/noblelashes.jpg",
"../images/certificate/noblelashes1.jpg",
"../images/certificate/paredo.jpg",
"../images/certificate/pmu.jpg",
"../images/certificate/sitanovich.jpg",
"../images/certificate/tattoo.jpg",
"../images/certificate/trementi.jpg",
"../images/certificate/trementi1.jpg"
];
let dancing = ["../images/dancing/dancing1.jpg", "../images/dancing/dancing2.jpg", "../images/dancing/dancing3.jpg", "../images/dancing/dancing4.jpg", "../images/dancing/dancing5.jpg",  "../images/dancing/dancing6.jpg"];
let golec = ["../images/golec/golec1.jpg", "../images/golec/golec2.jpg", "../images/golec/golec3.jpg", "../images/golec/golec4.jpg"];
let sold = ["../images/soul/soul1.jpg", "../images/soul/soul2.jpg", "../images/soul/soul3.jpg", "../images/soul/soul4.jpg"];
let canoe = ["../images/canoe/canoe1.jpg", "../images/canoe/canoe2.jpg", "../images/canoe/canoe3.jpg", "../images/canoe/canoe4.jpg"];
let voice = ["../images/voice/voice1.jpg", "../images/voice/voice2.jpg"];
let fedro = ["../images/fedro/fedro1.jpg", "../images/fedro/fedro2.jpg", "../images/fedro/fedro3.jpg", "../images/fedro/fedro4.jpg"];

let effectArr = [
					lineEffectL_R,
					lineEffectR_L,
					squareEffectLR,
					squareEffectBT,
					lineEffectL_R_T_Num,
					lineEffectR_L_B_Num,
					lineEffectL_R_TB_Num,
                ];
/*let effectArr = [
					lineEffectL_R_TB_Num,
					lineEffectL_R_TB_Num
                ];*/
let arrName;
let num_of_image = 0;
let imgg2;
let posX;
let posY;
let sInt;
let squareArr = [];
let tiles;
let imgWidth;
let imgHeight;
let imgContainer;
let imgContent;
let imgContRect;
let imgContWidth;
let imgContHeight;
let elemNum = 0;
let elemNum1 = 0;
let scrTop;
let cp;
let st;
let nmm;
function setCertificate(){
	let cc = g("#certificateContainer");
	cc.innerHTML = "";
	nmm = 0;
	for(let i = 0; i < certificate.length; i++){
		let line = certificate[i];
		nmm = i;
		let el = new_element("div", cc, "", ["certificate"], [], []);
		certificateBackground();
	}
}
function ld(){
	setCertificate();
}
load(ld);


function certificateBackground(){
	let ct = g(".certificate");
	style(ct, nmm, "background-image", "url("+certificate[nmm]+")");
	showCertificate();
}

function showCertificate(){
	let ctr = g(".certificate");
	imgContainer = g("#imgContainer");
	for(let i = 0; i < ctr.length; i++){
		ctr[i].onclick = ()=>{
			style(imgContainer, "", "display", "flex");
			num_of_image = i;
			set_image_source();

		}
	}
}
load(showCertificate);
let img_arr;
function showImages(arr){
	img_arr = arr;
	num_of_image = 0;
	style(imgContainer, "", "display", "flex");
	set_image_source(img_arr);
}

function close_gallery(){
	num_of_image = 0;
	style(imgContainer, "", "display", "none");
}


function set_image_source(ar){
    cl_Int(sInt);
    squareArr = [];
	imgg2 = g(".imgg2");
	let imgSize = g(".imgSize");
    
	if(ar == "" || ar == null){
		arrName = certificate;
		imgSize[0].setAttribute("src", arrName[num_of_image]);
		for(let i = 0; i < imgg2.length; i++){
			imgg2[i].setAttribute("src", arrName[num_of_image]);
		}
	}
	else {
		arrName = ar;
		imgSize[0].setAttribute("src", arrName[num_of_image]);
		for(let i = 0; i < imgg2.length; i++){
			imgg2[i].setAttribute("src", arrName[num_of_image]);
		}
		
	}
    let rndEff = rand(0, effectArr.length-1);
    effectArr[rndEff]();
}


let tileWidth;
let tileHeight;

function setTileSize(tw, th){
	cl_Int(sInt);
    squareArr = [];
	tileWidth = tw;
	tileHeight = th;
	let numOfX = 100/tileWidth;
	tiles = g(".tile");
	
	for(let i = 0; i < tiles.length; i++){
		setProperty(tiles[i], "--tw", tileWidth + "%", "--th", tileHeight + "%");
		let x = i % numOfX;
		let x2 = (numOfX -1 ) - (i % numOfX);
		let y = Math.floor(i/numOfX);
		let y2 = numOfX - Math.floor(i/numOfX);
        posX = x * tileWidth;
        posY = y * tileHeight;
		style(tiles, i, "position", "absolute", "left", posX + "%", "top", posY + "%");
		let posX2 = x * 100;
		let posX22 = x2 * 100;
        let posY2 = y * 100;
		let posY22 = y2 * 100;
        style(imgg2, i, "position", "absolute", "left", -posX2 + "%", "right", -posX22 + "%" , "top", -posY2 + "%", "bottom", -posY22 + "%");
		squareArr.push(i);
	}
}
function lineEffectL_R(){
    setTileSize(100,5);
    for(let i = 0; i < tiles.length; i++){
		squareArr.push(i);
    }
    style(imgg2, "*", "animation", null, "width", "0px");
	sInt = setInterval(()=>{
		let rnd = rand(0, squareArr.length-1);
        let numm = squareArr[rnd];
		setProperty(imgg2[numm], "--imgWidth", g("#imgContent").offsetWidth + "px", "--imgHeight", g("#imgContent").offsetHeight + "px");
        squareArr.splice(rnd, 1);
		style(imgg2, numm, "animation", "lineWidth 0.3s forwards");
		
        if(squareArr.length < 1){
			cl_Int(sInt);
		}
	},50);
}

function lineEffectR_L(){
    setTileSize(100,5);
    for(let i = 0; i < tiles.length; i++){
		squareArr.push(i);
    }
    style(imgg2, "*", "animation", null, "position", "absolute", "width", "0px", "left", null, "right", "0", "direction", "rtl");
	sInt = setInterval(()=>{
		let rnd = rand(0, squareArr.length-1);
        let numm = squareArr[rnd];
		setProperty(imgg2[numm], "--imgWidth", g("#imgContent").offsetWidth + "px", "--imgHeight", g("#imgContent").offsetHeight + "px");
        squareArr.splice(rnd, 1);
		style(imgg2, numm, "animation", "lineWidth 0.3s forwards");
		
        if(squareArr.length < 1){
			cl_Int(sInt);
		}
	},50);
}

function squareEffectLR(){
    setTileSize(25,20);
    for(let i = 0; i < tiles.length; i++){
		squareArr.push(i);
	}
    style(imgg2, "*", "animation", null, "width", "0px");
	sInt = setInterval(()=>{
		let rnd = rand(0, squareArr.length - 1);
		let numm = squareArr[rnd];
		if(numm % 2 == 1){
			style(imgg2, numm, "position", "absolute", "left", null, "direction", "rtl");
		}
		setProperty(imgg2[numm], "--imgWidth", g("#imgContent").offsetWidth + "px", "--imgHeight", g("#imgContent").offsetHeight + "px");
        squareArr.splice(rnd, 1);
		style(imgg2, numm, "animation", "lineWidth 0.3s forwards");
        
		if(squareArr.length < 1){
			cl_Int(sInt);
		}
	},50);
}

function squareEffectBT(){
    setTileSize(25,20);
    for(let i = 0; i < tiles.length; i++){
		squareArr.push(i);
	}
    style(imgg2, "*", "animation", null, "height", "0px");
	sInt = setInterval(()=>{
		let rnd = rand(0, squareArr.length - 1);
		let numm = squareArr[rnd];
		if(numm % 2 == 1){
			style(imgg2, numm, "position", "absolute", "left", null, "top", null, "direction", "rtl");
		}
        else {
            style(imgg2, numm, "position", "absolute", "left", null, "top", null, "direction", "ltr");
        }
		setProperty(imgg2[numm], "--imgWidth", g("#imgContent").offsetWidth + "px", "--imgHeight", g("#imgContent").offsetHeight + "px");
        squareArr.splice(rnd, 1);
		style(imgg2, numm, "animation", "lineHeight .5s forwards");
        
		if(squareArr.length < 1){
			cl_Int(sInt);
		}
	},50);
}

function lineEffectL_R_T_Num(){
    setTileSize(100,5);
	elemNum = 0;
    style(imgg2, "*", "animation", null, "height", "0px");
	sInt = setInterval(()=>{
		setProperty(imgg2[elemNum], "--imgWidth", g("#imgContent").offsetWidth + "px", "--imgHeight", g("#imgContent").offsetHeight + "px");
		style(imgg2, elemNum, "animation", "lineWidth 0.3s forwards");
		elemNum += 1;
        
		if(elemNum > tiles.length-1){
			cl_Int(sInt);
		}
	},50);
}

function lineEffectR_L_B_Num(){
    setTileSize(100,5);
	elemNum = tiles.length - 1;
    style(imgg2, "*", "animation", null, "position", "absolute", "width", "0px", "left", null, "right", "0", "direction", "rtl");
	sInt = setInterval(()=>{
		setProperty(imgg2[elemNum], "--imgWidth", g("#imgContent").offsetWidth + "px", );
		style(imgg2, elemNum, "animation", "lineWidth 0.3s forwards");
		elemNum -= 1;
        
		if(elemNum < 0){
			cl_Int(sInt);
		}
	},50);
}

function lineEffectL_R_TB_Num(){
    setTileSize(100,5);
	elemNum = 0;
	elemNum1 = tiles.length - 1;
    style(imgg2, "*", "animation", null, "width", "0px");
	sInt = setInterval(()=>{	
		setProperty(imgg2[elemNum], "--imgWidth", g("#imgContent").offsetWidth + "px", "--imgHeight", g("#imgContent").offsetHeight + "px");
		setProperty(imgg2[elemNum1], "--imgWidth", g("#imgContent").offsetWidth + "px", "--imgHeight", g("#imgContent").offsetHeight + "px");
		style(imgg2, elemNum, "animation", null, "width", "0px", "animation", "lineWidth 0.3s forwards");
		style(imgg2, elemNum1,"animation", null, "width", "0px", "left", null, "right", "0", "direction", "rtl", "animation", "lineWidth 0.3s forwards");
		elemNum += 1;
        elemNum1 -= 1;
		if(elemNum >= 10){
			cl_Int(sInt);
		}
	},50);
}

function loadFunctions(){
	set_image_source();
}

function next_photo(){
    num_of_image += 1;
    if(num_of_image >= arrName.length){
        num_of_image = 0;
    }
    set_image_source(arrName);
}
function prev_photo(){
    num_of_image -= 1;
    if(num_of_image < 0){
        num_of_image = arrName.length - 1;
    }
    set_image_source(arrName);
}

function res_array(name){
    arrName = name;
    num_of_image = 0;
    set_image_source(arrName);
}

function resize_photo(){
    for(let i = 0; i < tiles.length; i++){
		setProperty(imgg2[i], "--imgWidth", g("#imgContent").offsetWidth + "px", "--imgHeight", g("#imgContent").offsetHeight + "px");
    }
}

resize(resize_photo);