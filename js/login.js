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