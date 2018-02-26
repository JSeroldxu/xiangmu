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