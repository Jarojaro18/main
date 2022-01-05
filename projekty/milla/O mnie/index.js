let txt1 = `Po uzyskaniu dyplomu inżyniera chemii na Politechnice Śląskiej, szybko zrozumiałam, że moja przyszłość zawodowa nie wiąże się bynajmniej z laboratoryjną aparaturą 
i przypadkowo skierowałam swoje zainteresowania w kierunku branży beauty, gdzie od 2014 roku stale rozwijam swoje umiejętności. Na początku swoje zawodowe aspiracje pokierowałam 
w stronę nauki makijażu, wówczas odbyłam warsztaty z makijażystką gwiazd – Ewą Gil oraz podjęłam współpracę z bielską firmą VCanal, co następnie zaowocowało moim udziałem 
(jako makijażystka) przy produkcji teledysku dla grupy Golec uOrkiestra, pracą przy teledysku zespołu Sold My Soul z finalistą The Voice of Poland – Łukaszem Łyczkowskim, 
a następnie pracą przy programie tanecznym emitowanym w TV POLSAT (Taniec z Gwiazdami). `;

let txt2 = `Po pierwszych makijażowych sukcesach nabrałam wiary w siebie i następnie ukończyłam prestiżową śląską szkołę makijażu Biar Beauty Group-Agnieszka Broda, a także 
kilka szkoleń ze stylizacji rzęs. W międzyczasie, równolegle wraz z praktykowaniem umiejętności makijażowych, zgłębiałam tajniki wykonywania artystycznego tatuażu na ciele. 
Rysować uwielbiałam od dziecka, ale by uzyskać solidną wiedzę na temat profesjonalnego posługiwania się maszynką do tatuażu oraz w celu poznania krok po kroku zasad tworzenia 
trwałych zdobień ciała za pomocą tuszu – podjęłam naukę tatuażu w krakowskiej Akademii Tatuażu Artystycznego PAREDO, pod okiem mistrza tatuażu: Roberta Łypik (2015 rok). 
Następnie postanowiłam spróbować swoich sił w kreowaniu wizerunku kobiet za pomocą sztuki makijażu permanentnego. W drodze zdobywania niezbędnych kwalifikacji, ukończyłam 
pierwszą w Polsce roczną szkołę makijażu permanentnego: Permanent Master School pod kierownictwem Żanety Stanisławskiej (szkoła Broadway Beauty, 2016). Po ukończeniu wspomnianej 
rocznej szkoły makijażu permanentnego, już jako tatuażystka nadal zgłębiałam temat makijażu trwałego uczestnicząc w warsztatach i szkoleniach u najlepszych krajowych praktyków w
tym zawodzie. Zachęcona pochlebnymi opiniami Klientek na temat wykonywanej przeze mnie pracy, zapragnęłam postawić przysłowiową „kropkę nad i” w temacie makijażu permanentnego tj. 
podjęłam studia podyplomowe na Górnośląskiej Wyższej Szkole Handlowej w Katowicach na kierunku specjalistycznym: Trener Linergista (Trener Makijażu Permanentnego), które 
ukończyłam z wyróżnieniem i obroną pracy dyplomowej na 5 z „!”. Od tego momentu zaliczam się do elitarnego grona Trenerów Makijażu Permanentnego. `;


let txt3 = `Jako ekspertka makijażu permanentnego i zawodowa tatuażystka,  postanowiłam odpowiedzialnie podejść do tematu mojej pracy na ludzkiej skórze i w tym celu ukończyłam 
studia magisterskie z kosmetologii estetycznej (GWSH, 2019) . Studia przede wszystkim dostarczyły mi elementarnej wiedzy w zakresie zabiegów i pielęgnacji skóry, a także otworzyły 
przede mną ekscytujący świat kosmetologii, która z kolei stała się dla mnie nie tylko pasją, ale także pracą zawodową. Zafascynowana nowoczesnymi metodami przeciwstarzeniowej 
pielęgnacji oraz odnowy skóry, odbyłam szereg specjalistycznych szkoleń z zakresu kosmetologii estetycznej oraz anty-aging (między innymi cykl szkoleń ze światowej sławy specjalistą
 medycyny estetycznej Dr Rinat Sitanovich), z powodzeniem realizuję się w zabiegach rewitalizacyjnych i upiększających z użyciem kwasu hialuronowego oraz nici liftingujących. 
 Pomimo zdobycia wielu certyfikatów i umiejętności wykonywania przeróżnych zabiegów w kosmetologii, moje serce zdecydowanie mocniej bije do sztuki tatuażu oraz praktykowania 
 kosmetologii estetycznej. Myślę, że na mojej długiej i momentami trudnej drodze rozwoju zawodowego nie powiedziałam jeszcze ostatniego słowa. Dziedzina kosmetologii jest tak 
 prężnie rozwijającą się gałęzią nauki, że by być na bieżąco z nowinkami konieczne jest stałe doszkalanie się, by móc wykonywać swój zawód z pełnym zaangażowaniem oraz w oparciu 
 o najnowsze trendy. `;

let inter1;


function show_text(part_name, text_num){
	cl_Int(inter1);
	let elem = g("." + part_name);
	let part_text = g(".part_text");
	let letter_num = 0;
	style(part_text, "*", "display", "none");
	for(let i = 0; i < part_text.length; i++){
		part_text[i].innerHTML = "";
	}
	style(elem, 0, "display", "flex");
	inter1 = setInterval(()=>{
		elem[0].innerHTML += text_num[letter_num];
		letter_num += 1;
		if(letter_num >= text_num.length){
			cl_Int(inter1);
		}
	},10);
}



function change_background(){
	let background = g("#bg");
	let experience_top = g("#experience").getBoundingClientRect().top;
	let schools_top = g("#schools").getBoundingClientRect().top;
	if(experience_top > 0){
		style(bg, "", "background-image", "url(../images/bg0.jpg)");
	}
	if(experience_top <= 0 && schools_top > 0){
		style(bg, "", "background-image", "url(../images/bg1.jpg)");
	}
	if(schools_top <= 0){
		style(bg, "", "background-image", "url(../images/bg2.jpg)");
	}
}
load(change_background);
scr(change_background);
resize(change_background);

function btn_school(){
	let sc = g(".sc_type_button");
	let sp = g(".schools_part");
	for(let i = 0; i < sc.length; i++){
		sc[i].onclick = ()=>{
			style(sp, "*", "display", "none");
			let dt = sc[i].dataset.btntitle;
			let el = g("." + dt);
			style(el, 0, "display", "flex");
		}
	}
}
load(btn_school);

