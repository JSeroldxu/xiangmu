    
// banner 

    var main = document.getElementById('main_banner');
	var list = document.getElementById('list_banner');
	var listLi = list_banner.getElementsByTagName('li');	
	var btn = document.getElementById('btn_ol');
	var btnLi = btn_ol.getElementsByTagName('li');	
	var num = 0;
	var timer;

	for(var i=0;i<btnLi.length;i++){

		btnLi[i].index = i;

		btnLi[i].onclick = function(){
			for(var i=0;i<btnLi.length;i++){
				btnLi[i].className = '';
			}
			this.className = 'active';
			list.style.left = - this.index * 910 + 'px';
			num = this.index;
		};
	}

	main.onmouseover = function(){
		clearInterval(timer);
	};
	main.onmouseout = function(){
		timer = setInterval(run,3000);
	};

	timer = setInterval(run,3000);

	function run(){
		for(var i=0;i<btnLi.length;i++){
			 btnLi[i].className = '';
		}
		if(num == btnLi.length-1){
			num = 0;
		}
		else{
			num++;	
		}
		btnLi[num].className = 'active';
		list.style.left = - num * 910 + 'px';
	}



// show

	var iconfontL = document.getElementById('left_i');
	var iconfontR = document.getElementById('right_i');
	var showList = document.getElementById('show_bg');
	var showLi  = showList.getElementsByTagName('li');
	var foo = 1;
	//console.log(showList)

		iconfontL.onclick = function(){
			
			console.log(foo);
			showList.style.left = -(foo*136)  + 'px';
			foo++;
			if( foo ==8){
				foo = 1;
			}

		};
		iconfontR.onclick = function(){
			showList.style.left = -(foo*136)  + 'px';
			foo++;
			if( foo ==8){
				foo = 1;
			}
		};

//time
	//var time1 = document.getElementById('time1');
	var time = document.getElementById('time');

	runn();
	setInterval(runn,1000);

	function runn(){

		var date = new Date();

		time.innerHTML =  toZero(date.getFullYear() ) +'.'+toZero(date.getMonth() + 1 ) +'.'+ toZero(date.getDate()) +'  '+  toZero(date.getHours()) + ':' + toZero(date.getMinutes()) + ':' + toZero(date.getSeconds())+' HKT';
		//time1.innerHTML =  toZero(date.getFullYear() ) +'.'+toZero(date.getMonth() + 1 ) +'.'+ toZero(date.getDate()) +'  '+  toZero(date.getHours()) + ':' + toZero(date.getMinutes()) + ':' + toZero(date.getSeconds())+' HKT';
}
	function toZero(num){
		if(num<10){
			return '0' + num;
		}
		else{
			return num;
		}
	}


//	
	var country = document.getElementById('country');
	var country_show = document.getElementById('country_show');
	var timer_country;

	country.onmouseover = function(){
		country_show.style.display = 'block';
		country_show.style.zIndex = 999;
		clearTimeout(timer_country); 
	};
	country.onmouseout = function(){
		timer_country = setTimeout(hide,200);
	};
	country_show.onmouseover = function(){
		clearTimeout(timer_country); 
	};
	country_show.onmouseout = function(){
		timer_country = setTimeout(hide,200);
	};

	function hide(){
		country_show.style.display = 'none';	
	}




var showtime = document.getElementById('showtime');

