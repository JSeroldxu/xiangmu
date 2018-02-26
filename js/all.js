	// var div1 = document.getElementById('div1');
	// var div1_span = div1.getElementsByTagName('span')[0];
	// var div2 = document.getElementById('div2');
	// var div2_img = div2.getElementsByTagName('img')[0];

	// div1.onmouseover = function(ev){
	// 	div1_span.style.display = 'block';
	// 	div2.style.display = 'block';
	// 	//div1_span.offsetLeft = ev.pageX + div1_span.offsetWidth/2;
	// 	//div1_span.offsetTop = ev.pageX + div1_span.offsetHeight/2;
	// };
	// div1.onmouseout = function(){
	// 	div1_span.style.display = 'none';
	// 	div2.style.display = 'none';
	// };
	// div1.onmousemove = function(ev){
	// 	var L = ev.pageX - div1_span.offsetWidth*3.5;
	// 	var T = ev.pageY - div1_span.offsetHeight*2;

	// 	if(L<0){
	// 		L = 0;
	// 	}
	// 	else if(L>div1.offsetWidth - div1_span.offsetWidth){
	// 		L = div1.offsetWidth - div1_span.offsetWidth;
	// 	}

	// 	if(T<0){
	// 		T = 0;
	// 	}
	// 	else if(T>div1.offsetHeight - div1_span.offsetHeight){
	// 		T = div1.offsetHeight - div1_span.offsetHeight;
	// 	}

	// 	div1_span.style.left = L + 'px';
	// 	div1_span.style.top = T + 'px';

	// 	var scaleX = L / (div1.offsetWidth - div1_span.offsetWidth);
	// 	var scaleY = T / (div1.offsetHeight - div1_span.offsetHeight);

	// 	div2_img.style.left = - scaleX * (div2_img.offsetWidth - div2.offsetWidth) + 'px';
	// 	div2_img.style.top = - scaleY * (div2_img.offsetHeight - div2.offsetHeight) + 'px';

	// };	
    
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


	var text1 = document.getElementById('text1');
	var tips = document.getElementById('tips');

	text1.onblur = function(){

		var val = this.value.trim();

		//1. 创建内置的xhr对象，所有的AJAX操作都是在xhr对象下完成的
		var xhr = new XMLHttpRequest();
		//2. 监听AJAX整个通信过程，最终接收到后台返回的结果response
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				//xhr.responseText : 拿到后台response过来的结果数据
				//console.log( xhr.responseText );
				tips.innerHTML = xhr.responseText;
			}
		};
		//3. 请求AJAX通信，去链接后台的操作
		//三个参数：请求方式、请求地址、是否异步:异步true,同步false
		xhr.open('GET','http://localhost/xm/login.php?username='+val,true);

		//4. 发送数据到后台，request操作
		//get请求的时候，数据在网址的问号后面，所以send方法不用去操作了
		xhr.send(null);
	};
	//var time1 = document.getElementById('time1');
	var time = document.getElementById('time');

	run1();
	setInterval(run1,1000);

	function run1(){

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