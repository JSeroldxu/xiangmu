for(var timer,main=document.getElementById("main_banner"),list=document.getElementById("list_banner"),listLi=list_banner.getElementsByTagName("li"),btn=document.getElementById("btn_ol"),btnLi=btn_ol.getElementsByTagName("li"),num=0,i=0;i<btnLi.length;i++)btnLi[i].index=i,btnLi[i].onclick=function(){for(var t=0;t<btnLi.length;t++)btnLi[t].className="";this.className="active",list.style.left=910*-this.index+"px",num=this.index};function run(){for(var t=0;t<btnLi.length;t++)btnLi[t].className="";num==btnLi.length-1?num=0:num++,btnLi[num].className="active",list.style.left=910*-num+"px"}main.onmouseover=function(){clearInterval(timer)},main.onmouseout=function(){timer=setInterval(run,3e3)},timer=setInterval(run,3e3);var iconfontL=document.getElementById("left_i"),iconfontR=document.getElementById("right_i"),showList=document.getElementById("show_bg"),showLi=showList.getElementsByTagName("li"),foo=1;iconfontL.onclick=function(){console.log(foo),showList.style.left=-136*foo+"px",8==++foo&&(foo=1)},iconfontR.onclick=function(){showList.style.left=-136*foo+"px",8==++foo&&(foo=1)};var time=document.getElementById("time");function runn(){var t=new Date;time.innerHTML=toZero(t.getFullYear())+"."+toZero(t.getMonth()+1)+"."+toZero(t.getDate())+"  "+toZero(t.getHours())+":"+toZero(t.getMinutes())+":"+toZero(t.getSeconds())+" HKT"}function toZero(t){return t<10?"0"+t:t}runn(),setInterval(runn,1e3);var timer_country,country=document.getElementById("country"),country_show=document.getElementById("country_show");function hide(){country_show.style.display="none"}country.onmouseover=function(){country_show.style.display="block",country_show.style.zIndex=999,clearTimeout(timer_country)},country.onmouseout=function(){timer_country=setTimeout(hide,200)},country_show.onmouseover=function(){clearTimeout(timer_country)},country_show.onmouseout=function(){timer_country=setTimeout(hide,200)};var showtime=document.getElementById("showtime"),text1=document.getElementById("text1"),tips=document.getElementById("tips");text1.onblur=function(){var t=this.value.trim(),e=new XMLHttpRequest;e.onreadystatechange=function(){4==e.readyState&&200==e.status&&(tips.innerHTML=e.responseText)},e.open("GET","http://localhost/xm/login.php?username="+t,!0),e.send(null)};time=document.getElementById("time");function run1(){var t=new Date;time.innerHTML=toZero(t.getFullYear())+"."+toZero(t.getMonth()+1)+"."+toZero(t.getDate())+"  "+toZero(t.getHours())+":"+toZero(t.getMinutes())+":"+toZero(t.getSeconds())+" HKT"}function toZero(t){return t<10?"0"+t:t}run1(),setInterval(run1,1e3);