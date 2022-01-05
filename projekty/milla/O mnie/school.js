let schl = [
			'<div><i class="fas fa-graduation-cap"></i> <i>Politechnika Śląska – <b>Inżynieria chemiczna i procesowa</b></i> (studia w j.angielskim), studia dzienne ukończone tytułem inżyniera chemii (2012)</div>',
			'<div><i class="fas fa-graduation-cap"></i> <i>Wyższa Szkoła Nauk Społecznych w Lublinie – <b>Dietetyka i Planowanie Żywienia</b></i>, studia podyplomowe (2014)</div>',
			'<div><i class="fas fa-graduation-cap"></i> <i>Górnośląska Wyższa Szkoła Handlowa w Katowicach – <b>Trener Linergista</b></i>, studia podyplomowe  nadające uprawnienia trenerskie w branży PMU (2019)</div>',
			'<div><i class="fas fa-graduation-cap"></i> <i>Górnośląska Wyższa Szkoła Handlowa w Katowicach – <b>Kosmetologia Estetyczna</b></i>, studia magisterskie ukończone tytułem magistra kosmetologii (2019)</div>'
			];
let schl2 = [
			'<div><i class="fas fa-paint-brush"></i> <i>Szkoła Makijażu I, II st. – <b>Biar Beauty Group Agnieszka Broda</b></i>, Katowice (2014)</div>',
			'<div><i class="fas fa-paint-brush"></i> <i>Szkoła Tatuażu Artystycznego – <b>Paredo</b></i>, podstawowy kurs zawodowy z tatuażu, Kraków (2015)</div>',
			'<div><i class="fas fa-paint-brush"></i> <i>Szkoła roczna Makijażu Permanentnego – <b>Permanent Master School – Broadway Beauty</b></i>, Katowice (2016)</div>',
			'<div><i class="fas fa-paint-brush"></i> <i>Szkoła Tatuażu Artystycznego – <b>Ponton Tattoo School</b></i>, kurs dla zaawansowanych, Swarzędź (2019)</div>'
			];
let schl3 = [
			'<div class="certificate" data-sr="../images/certificate/amazon.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/amazon2.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/ap.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/biar.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/bridal.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/camp.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/chomycka.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/clarena.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/clarena1.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/college.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/cosmobelle.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/cosmobelle1.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/exclashes.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/faceart.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/gil.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/jo.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/jo2.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/lingerista1.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/lingerista2.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/lne.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/monimar.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/monimar2.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/monimar3.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/noblelashes.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/noblelashes1.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/paredo.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/pmu.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/sitanovich.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/tattoo.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/trementi.jpg"></div>',
			'<div class="certificate" data-sr="../images/certificate/trementi1.jpg"></div>',
			];
let nm = 0;
let sint;
function showSchool(arr){
	cl_Int(sint);
	let sc = g(".schools");
	let ar = arr;
	nm = 0;
	if(ar == "" || ar == null){
		ar = schl;
	}
	else {
		ar = arr;
	}
	if(ar == schl3){
		style(sc, 0, "display", "flex");
	}
	else if(ar != schl3){
		style(sc, 0, "display", "block");
	} 
	let school = g(".schools");
	school[0].innerHTML = "";

	sint = setInterval(()=>{
		let line = ar[nm];
		school[0].innerHTML += line;
		if(ar == schl3){
			certificateBackground();
		}
		nm += 1;
		if(nm >= ar.length){
			cl_Int(sint);
		}
	},1200/ar.length);
	
}
function ld(){
	showSchool();
}
load(ld);

