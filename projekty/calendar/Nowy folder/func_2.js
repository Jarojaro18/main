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
function remClassPlus(){
	let num = arguments[1];
	let el = arguments[0];
	for(let i = 0; i < el.length; i++){
		el[i].classList.remove(num);
	}	
}

function cl_Int(_var){
	return clearInterval(_var);
}
function styles(){
	let num = arguments.length;
	for(let i = 1; i < num; i+=2){
		arguments[0].style[arguments[i]] = arguments[i+1];
	}	
}
function stylesClass(){
	let num = arguments.length;
	let cl = arguments[0];
	for(let i = 0; i < cl.length; i++){
		for(let j = 1; j < num; j+=2){
			cl[i].style[arguments[j]] = arguments[j+1];
		}
	}	
}