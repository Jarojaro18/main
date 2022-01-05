let player;
let s_name;
let minutes;
let tenth_of_seconds;
let seconds;
let s_tl;
let cr_nim;
let cr_tenth_sec;
let cr_sec;

let res;

let m = 0;
let ts = 0;
let s = 0;

let sn;
let sl;
let nm = 0;
let p_a;
let play;
let pause;
let cp;
let playlist;
let ps;
let lyrics_num = 0;
let lyrics_int;
let disc;
function load_let(){
    p_a = g(".player_audio");
	player = g(".player_container");
	cp = g(".close_player");
	s_name = g(".song_name");
	minutes = g(".min");
	tenth_of_seconds = g(".tenth_sec");
	seconds = g(".sec");
	s_tl = g(".song_timeline");
	cr_min = g(".cr_min");
	cr_tenth_sec = g(".cr_tenth_sec");
	cr_sec = g(".cr_sec");
    play = g(".play");
    pause = g(".pause");
	playlist = g(".playlist");
    sl = g(".song_lyrics");
	disc = g(".disc");
	playlist[0].innerHTML = "";
	cr_min[0].innerHTML = m;
	cr_tenth_sec[0].innerHTML = ts;
	cr_sec[0].innerHTML = s;
}
load(load_let);


let song;
function load_disc(){
	for(let i = 0; i < disc.length; i++){
		nm = 0;
		pause_song();
		reset_prop();
	}
}
function load_song(sg){
	
	song = sg;
	styles(player[0], "display", "block");
	//player_position();
	s_name[0].innerHTML = song[nm].song_name;
	minutes[0].innerHTML = song[nm].song_length_min;
	tenth_of_seconds[0].innerHTML = song[nm].song_length_tenth_sec;
	seconds[0].innerHTML = song[nm].song_length_sec;
    p_a[0].src = song[nm].song_url;
	sn = song[nm];
	playlist[0].innerHTML = "";
	for(let i = 0; i < song.length; i++){
		let el = new_element("div", playlist[0], "", ["playlist_song"], [], ["song_index", i]);
		el.innerHTML = (i+1) + ". " + song[i].song_name;
	}
	playlist_click();
	nm_effect();
}
let num = 0;
let pr = 0;
let stl_width;
let si;
let st_move;
let s_length;
function timeline_width(){
	stl_width = s_tl[0].offsetWidth;
}
load(timeline_width);
resize(timeline_width);


function play_song(){
	timeline_width();

	s_length = song[nm].song_length_in_sec;
	st_move = parseFloat((100 / s_length).toFixed(4));
    style(play, 0, "display", "none");
    style(pause, 0, "display", "block");
    p_a[0].play();
	timeline_click();
    lyrics();
	si = setInterval(()=>{
		num += 1;
        if(num == song[nm].song_lyrics[lyrics_num]){
            sl[0].innerHTML = song[nm].song_lyrics[lyrics_num + 1];
            lyrics_num += 2;
        }
		style(s_tl, 0, "background-image", "linear-gradient(to right, rgba(220,220,220, 0.9) 0%, rgba(220,220,220, 0.9) "+(st_move * num)+"%, rgba(220,220,220, 0.3) "+(st_move * num)+"%, rgba(220,220,220, 0.3) 100%)");
		
		s += 1;
		if(s > 9){
			s = 0;
			ts += 1;
		}
		if(ts > 5){
			ts = 0;
			m += 1;
		}
		cr_min[0].innerHTML = m;
		cr_tenth_sec[0].innerHTML = ts;
		cr_sec[0].innerHTML = s;
		
		if(num >= s_length){
			cl_Int(si);
		}
	}, 1000);
    
}
function pause_song(){
	cl_Int(si);
    cl_Int(lyrics_int);
    p_a[0].pause();
    style(pause, 0, "display", "none");
    style(play, 0, "display", "block");
}

function timeline(){
	let left_pos_s_t = s_tl[0].offsetLeft;
	let right_po_s_t = s_tl[0].offsetLeft + s_tl.offsetWidth;
}
load(timeline);
function reset_prop(){
	cl_Int(si);
    cl_Int(lyrics_int);
	style(s_tl, 0, "background-image", "linear-gradient(to right, rgba(220,220,220, 0.9) 0%, rgba(220,220,220, 0.3) 0%, rgba(220,220,220, 03) 100%)");
	m = 0;
	ts = 0;
	s = 0;
	pr = 0;
	cr_min[0].innerHTML = m;
	cr_tenth_sec[0].innerHTML = ts;
	cr_sec[0].innerHTML = s;
    p_a[0].currentTime = 0;
    num = 0;
    lyrics_num = 0;
    sl[0].innerHTML = "";
}
function next_song(){
    pause_song();
	nm += 1;
	if(nm > song.length - 1){
		nm = 0;
	}
	reset_prop();
	load_song(song);
	nm_effect();
	playlist[0].scrollBy(0, 28);
}
function prev_song(){
    pause_song();
	nm -= 1;
	if(nm < 0){
		nm = song.length - 1;
	}
	reset_prop();
	
	load_song(song);
	nm_effect();
	playlist[0].scrollBy(0, -28);
}

function song_minus_ten(){
	ts -= 1;
	
	if(ts < 0){
		ts = 5;
		m -= 1;
		if(m < 0){
			m = 0;
			ts = 0;
			s = 0;
		}
	}
	
	
	num -= 10;
    
	if(num < 0){
		num = 0;
	}
	cr_min[0].innerHTML = m;
	cr_tenth_sec[0].innerHTML = ts;
	cr_sec[0].innerHTML = s;
    p_a[0].currentTime =  num;
}
function song_plus_ten(){
	ts += 1;
	if(ts >= 6){
		ts = 0;
		m += 1;
	}
	num += 10;
	if(num > s_length){
		num = s_length;
	}

	cr_min[0].innerHTML = m;
	cr_tenth_sec[0].innerHTML = ts;
	cr_sec[0].innerHTML = s;
    p_a.currentTime =  num;
}


function timeline_click(){
	s_tl[0].onclick = (event)=>{
		let x_pos = event.clientX;
		let s_tl_bcr = s_tl[0].getBoundingClientRect();
		let s_tl_left = s_tl_bcr.left;
		
		let prcnt = (((x_pos - s_tl_left)/s_tl[0].offsetWidth)*100).toFixed(2);

		style(s_tl, 0, "background-image", "linear-gradient(to right, rgba(220,220,220, 0.3) 0%, rgba(220,220,220, 0.9) "+prcnt+"%, rgba(220,220,220, 0.3) "+prcnt+"%, rgba(220,220,220, 0.3) 100%)");
		
		num = parseFloat(((s_length * prcnt)/100).toFixed(0));
		p_a[0].currentTime = num;
		
		m = parseInt(Math.floor(num / 60).toFixed(0));
		ts = parseInt(Math.floor((num - (m * 60))/10).toFixed(0));
		s = parseInt(num % 10);
		
		cr_min[0].innerHTML = m;
		cr_tenth_sec[0].innerHTML = ts;
		cr_sec[0].innerHTML = s;
	}
}
function close_player(){
	cp[0].onclick = ()=>{
		pause_song();
		m = 0;
		ts = 0;
		s = 0;
		reset_prop();
		nm = 0;
		style(player, 0, "display", "none");
		style(disc, "*", "user-select", "auto");
	}
}
load(close_player);

function playlist_click(){
	ps = g(".playlist_song");
	for(let i = 0; i < ps.length; i++){
		ps[i].onclick = ()=>{
			
			pause_song();
			reset_prop();
			nm = parseInt(ps[i].dataset.song_index);
			load_song(song);
			nm_effect();
		}
	}
}

function nm_effect(){
	style(ps, "*", "color", "white", "text-shadow", "0px 0px 0px yellow");
	style(ps, nm, "color", "rgb(240, 98, 145)", "text-shadow", "0px 0px 5px yellow");
}
function s_lyr(){
    for(let i = 0; i < song[nm].song_lyrics.length; i+=2){
        if(num >= song[nm].song_lyrics[i]){
            lyrics_num = parseInt(i);
            sl[0].innerHTML = song[nm].song_lyrics[lyrics_num + 1];
        }
    }
}
function lyrics(){
    lyrics_int = setInterval(()=>{
        s_lyr();
        /*if(num == song[nm].song_lyrics[lyrics_num]){
            sl[0].innerHTML = song[nm].song_lyrics[lyrics_num + 1];
            lyrics_num += 2;
        }*/
        
    },1000);
}