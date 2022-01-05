function digit_size(){
	let ww = window.innerWidth;
	let wh = window.innerHeight;
	let cd = g(".clock_digit");
	let dt = g("#clock_dots");
	if(ww >= wh){
		style(cd, "*", "width", "16vh", "height", "32vh");
		style(dt, "", "height", "32vh");
	}
	else {
		style(cd, "*", "width", "16vw", "height", "32vw");
		style(dt, "", "height", "32vh");
	}
}
load(digit_size);
resize(digit_size);

function clock_time(){
	let line = g(".line");
	let digit = g(".clock_digit");
	
	let si = setInterval(()=>{
		let time = new Date();
	
		let hour = time.getHours();
		let h_string = hour.toString();
		let minutes = time.getMinutes();
		let m_string = minutes.toString();
		
		
		
		
		if(h_string < 10){
			h_string = "0" + h_string;
		}
		if(m_string < 10){
			m_string = "0" + m_string;
		}
	
		let time_string = h_string + m_string;
		
		for(let j = 1; j < digit.length; j++){
			style(line, "*", "display", "none");
		}
		for(let i = 0; i < time_string.length; i++){
			
			let num = time_string.charAt(i);
			if(num == 0){
				let line_num = g(".zero_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
			if(num == 1){
				let line_num = g(".one_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
			if(num == 2){
				let line_num = g(".two_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
			if(num == 3){
				let line_num = g(".three_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
			if(num == 4){
				let line_num = g(".four_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
			if(num == 5){
				let line_num = g(".five_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
			if(num == 6){
				let line_num = g(".six_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
			if(num == 7){
				let line_num = g(".seven_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
			if(num == 8){
				let line_num = g(".eight_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
			if(num == 9){
				let line_num = g(".nine_" + (i + 1));
				style(line_num, "*", "display", "block");
			}
		}
	}, 1000);
	

}
load(clock_time);