function getId(_id){
    return document.getElementById(_id);
}
function getClass(_class){ 
    return document.getElementsByClassName(_class);
}
function getTag(_tag){ 
    return document.getElementsByTagName(_tag);
}
function load(_load){ 
    return window.addEventListener("load", _load);
}
function msmove(_msmove){ 
    return window.addEventListener("mousemove", _msmove);
}
function resize(_resize){ 
    return window.addEventListener("resize", _resize);
}
function scr(_scroll){
    return window.addEventListener("scroll", _scroll);
}
function click(_click){
    return window.addEventListener("click", _click);
}
function rand(_min, _max){
	return Math.floor( Math.random() * ( _max - _min + 1 ) + _min );
}
function create(_el){
	return document.createElement(_el);
}
function addClass(_el, _class){
	return _el.classList.add(_class);
}
function addClassPlus(){
	let num = arguments.length;
	for(let i = 1; i < num; i++){
		arguments[0].classList.add(arguments[i]);
	}
}
function remClass(_el, _class){
	return _el.classList.remove(_class);
}
function cl_Int(_var){
	return clearInterval(_var);
}
let el_c;
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


let element_name;
function style(){
	if(arguments[1] == "*"){
		for(let i = 0; i < arguments[0].length; i++){
			for(let j = 2; j < arguments.length; j+=2){
				arguments[0][i].style[arguments[j]] = arguments[j+1];
			}
		}
	}
	if(arguments[1] !== "*" && arguments[1] !== null && arguments[1] !== "") {
		for(let j = 2; j < arguments.length; j+=2){
			arguments[0][arguments[1]].style[arguments[j]] = arguments[j+1];
		}
	}
	if(arguments[1] === null || arguments[1] === "") {
		for(let j = 2; j < arguments.length; j+=2){
			arguments[0].style[arguments[j]] = arguments[j+1];
		}
	}
}
/*function new_element(type_of_element/tag, miejsce umieszczenia elementu, dodaj id, dodaj klasy z tablicy, css z tablicy, dataset z tablicy)*/
function new_element(type, destination, id, classes, css, dataset){
	let element_type = type;
	let element_destination = destination;
	let element_id = id;
	let element_classes = classes;
	let element_css = css;
	let element_dataset = dataset;
	
	let el = document.createElement(element_type);
	element_destination.append(el);
	if(element_id == null || element_id == ""){
		
	}
	else {
		el.id = element_id;
	}
	
	for(let j = 0; j < element_classes.length; j++){
		el.classList.add(element_classes[j]);
	}
	for(let k = 0; k < element_css.length; k+=2){
		el.style[element_css[k]] = element_css[k+1];
	}
	for(let l = 0; l < element_dataset.length; l+=2){
		el.dataset[element_dataset[l]] = element_dataset[l+1];
	}
}

function setProperty(){
	let num = arguments.length;
	for(let i = 1; i < num; i+=2){
		arguments[0].style.setProperty(arguments[i], arguments[i+1]);
	}	
}