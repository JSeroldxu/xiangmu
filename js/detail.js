	var div1 = document.getElementById('div1');
	var div1_span = div1.getElementsByTagName('span')[0];
	var div2 = document.getElementById('div2');
	var div2_img = div2.getElementsByTagName('img')[0];

	div1.onmouseover = function(ev){
		div1_span.style.display = 'block';
		div2.style.display = 'block';
		//div1_span.offsetLeft = ev.pageX + div1_span.offsetWidth/2;
		//div1_span.offsetTop = ev.pageX + div1_span.offsetHeight/2;
	};
	div1.onmouseout = function(){
		div1_span.style.display = 'none';
		div2.style.display = 'none';
	};
	div1.onmousemove = function(ev){
		var L = ev.pageX - div1_span.offsetWidth*3.5;
		var T = ev.pageY - div1_span.offsetHeight*2;

		if(L<0){
			L = 0;
		}
		else if(L>div1.offsetWidth - div1_span.offsetWidth){
			L = div1.offsetWidth - div1_span.offsetWidth;
		}

		if(T<0){
			T = 0;
		}
		else if(T>div1.offsetHeight - div1_span.offsetHeight){
			T = div1.offsetHeight - div1_span.offsetHeight;
		}

		div1_span.style.left = L + 'px';
		div1_span.style.top = T + 'px';

		var scaleX = L / (div1.offsetWidth - div1_span.offsetWidth);
		var scaleY = T / (div1.offsetHeight - div1_span.offsetHeight);

		div2_img.style.left = - scaleX * (div2_img.offsetWidth - div2.offsetWidth) + 'px';
		div2_img.style.top = - scaleY * (div2_img.offsetHeight - div2.offsetHeight) + 'px';

	};	