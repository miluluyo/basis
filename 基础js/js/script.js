	//三种弹窗
	function pro(){
		prompt("我是prompt弹窗","我可以显示提示你输入的对话框");
	}
	function ale(){
		alert("我是alert弹窗，我可以显示一个带有提示信息和确定按钮的警示框");
	}
	function con(){
		confirm("我是confirm弹窗，我可以显示一个带有提示信息、确定和取消按钮的对话框");	
	}

	//跑马灯
	var oLi = document.getElementsByClassName("pmd")[0].getElementsByTagName("li");
	var i = 0;
	function fn (ele,prop) {
			for(var i=0;i<oLi.length;i++){
				oLi[i].style.background = "";
			}
			ele.style.background = prop;
		}
		setInterval(function(){
			switch(i){
				case(0):fn(oLi[i],"red");break;
				case(1):fn(oLi[i],"orange");break;
				case(2):fn(oLi[i],"yellow");break;
				case(3):fn(oLi[i],"green");break;
				case(4):fn(oLi[i],"skyblue");break;
				case(5):fn(oLi[i],"blue");break;
				case(6):fn(oLi[i],"purple");break;
			}
			i++;
			if(i==7){
				i=0;
			}
		},500)


//横向菜单
	var divs = document.getElementsByClassName('hxcdtop')[0].getElementsByTagName('div');
		var fens = document.getElementsByClassName('fen');
		var fensDiv;
		// console.log(divs.length);
		for(i = 0;i < divs.length;i++){
     	    divs[i].onmouseover = function(){

       	    	for(j = 0;j < divs.length;j++){
            		if(divs[j] == this){
           	     	   divs[j].className = '';
                 	   fens[j].className = 'fen';
                	}else{
                	    divs[j].className = 'no_select';
                	    fens[j].className = 'fen noshow';
                	    divs[j].style.backgroundColor="";
                	}
           		}

        	}
     	 }

//修改订单
    function addr(){
		var tab = document.getElementById("tab");
		var row_index = tab.rows.length-1;		//新插入行在表格中的位置，不算表格头，所以减一
		var newRow = tab.insertRow(row_index);
		newRow.id = "row"+row_index;

		//为第一列添加插入事件
		var col1 = newRow.insertCell(0);
		col1.innerHTML = "<input id = 'a"+row_index+"' style='width:160px;' type='text'/>";
		//同理，为表格其他三列添加插入事件
		
		var col2 = newRow.insertCell(1);
		col2.innerHTML = "<input id = 'a"+row_index+"' style='width:60px;' type='text'/>";

		var col3 = newRow.insertCell(2);
		col3.innerHTML = "<input id = 'a"+row_index+"' style='width:60px;' type='text'/>";

		var col4 = newRow.insertCell(3);
		col4.innerHTML = "<input name='del'"+row_index+"' type='button' value='删除' onclick =\"delRow('row"+row_index+"')\" />&nbsp;<input id='edit"+row_index+"'type='button' value='确定' onclick=\"upRow('row"+row_index+"')\" />";
	}

	function delRow(rowId){
		var row =document.getElementById(rowId).rowIndex;

		document.getElementById("tab").deleteRow(row);
	}

	function editRow(rowId){
			var row=document.getElementById(rowId).rowIndex;   //修改行所在表格中的位置
			var col=document.getElementById(rowId).cells;
			var texta=col[0].innerHTML;
			col[0].innerHTML="<input name='a"+row+"' style='width:140px;' type='text' value='"+texta+"' />";
			var textb=col[1].innerHTML;
			col[1].innerHTML="<input name='b"+row+"' style='width:30px;' type='text' value='"+textb+"' />";
			var textc=col[2].innerHTML;
			col[2].innerHTML="<input name='c"+row+"' style='width:30px;' type='text' value='"+textc+"' />";
			
			col[3].lastChild.value="确定";
			col[3].lastChild.setAttribute("onclick","upRow('"+rowId+ "')");
		}	

		function upRow(rowId){
			var row=document.getElementById(rowId).rowIndex;   //修改行所在表格中的位置
			var col=document.getElementById(rowId).cells;
			var texta=col[0].firstChild.value;
			var textb=col[1].firstChild.value;
			var textc=col[2].firstChild.value;
			col[0].innerHTML=texta;
			col[1].innerHTML=textb;
			col[2].innerHTML=textc;
			
			col[3].lastChild.value="修改";
			col[3].lastChild.setAttribute("onclick","editRow('"+rowId+ "')");
		}

//无缝滚动
		var main = document.getElementById("main");
		var demo1 = document.getElementById("demo1");
		var demo2 = document.getElementById("demo2");
		demo2.innerHTML = demo1.innerHTML;//拷贝demo1内容到demo2
		var time1 = null;//定时器对象
		var time2 = null;
		function move(n){
			if (n==1) {//代码左滚
				main.scrollLeft+=10;
				//临界点是demo1的宽度
				if (main.scrollLeft == main.clientWidth) {//当滚动demo1的宽度时让滚动位置回到初始位置0
					main.scrollLeft = 0;
				}
				//当滚动demo1的宽度时图片的倍数时，停止定时器，2秒后再次启动
				if (main.scrollLeft%100==0) {
					stop();
					time2 = setTimeout(startLeft,1000);//两秒后调用move函数一次
				}
			}else{
				main.scrollLeft-=10;
				//临界点是demo1的宽度
				if (main.scrollLeft == 0) {//当滚动demo1的宽度时让滚动位置回到初始位置1000
					main.scrollLeft = main.clientWidth;
				}
				//当滚动demo1的宽度时图片的倍数时，停止定时器，2秒后再次启动
				if (main.scrollLeft%100==0) {
					stop();
					time2 = setTimeout(startRight,2000);//两秒后调用move函数一次
				}
			}
		}

		function stop(){
			clearTimeout(time2);//注意清除定时器
			clearInterval(time1);//停止定时器
		}
		function startLeft(){
			time1 = setInterval("move(1)",100);//左侧定时调用move函数
		}
		function startRight(){
			time1 = setInterval("move(0)",100);//右侧定时调用move函数
		}
		function Left(){
			stop();
			startLeft();
		}
		function Right(){
			stop();
			startRight();
		}
		main.onmouseover = stop;//鼠标移入停止
		main.onmouseout = startLeft;//鼠标移开停止
		time1 = setInterval("move(1)",100);//定时调用move函数


		//console报错：Unexpected end of input是由于书写不规范{}以及单双引号''""

//碰壁反弹
		function $(id){
			return document.getElementById(id);
		}
		var main1 = $("main1");
		var ball = $("ball");
		//ball的初始位置为
		var left = 0;
		var top1 = 0;
		//
		var dicX = 1;//左右移动方向，右移1，左移-1
		var dicY = 1;//上下移动方向，下移1，上移-1
		setInterval(function (){
			if (left <= 0) {
				dicX = 1;
			}
			if (left >= main1.clientWidth - ball.clientWidth) {
				dicX =-1;
			}
			left += dicX;//持续修改left距离
			if (top1 <= 0) {
				dicY = 1;
			}
			if (top1 >= main1.clientHeight - ball.clientHeight) {
				dicY =-1;
			}
			top1 += dicY;//持续修改top1距离
			ball.style.left = left + "px";
			ball.style.top = top1 + "px";
		},10);

//JS拖拽效果
		var box2 = document.getElementById("box2");
		var main2 = document.getElementById("main2");
		box2.onmousedown = function (event){
			var event = event || window.event;//浏览器兼容

			//鼠标最初点按位置
			var mousex = event.clientX;
			var mousey = event.clientY;

			//获取div距离外部组件的间距 left
			var box2_left = box2.offsetLeft;
			var box2_top = box2.offsetTop;

			document.onmousemove = function (event){
				var event = event || window.event;//浏览器兼容

				var mousexnow = event.clientX;
				var mouseynow = event.clientY;

				//组件初始距离左侧间距box2_left + (鼠标结束时位置 - 鼠标开始时水平位置)
				var left2 = box2_left + (mousexnow - mousex);
				var top2 = box2_top + (mouseynow - mousey);

				if (left2<=0) {
					left2 = 0;
				}
				if (top2<=0) {
					top2 = 0;
				}
				if (left2 >= main2.clientWidth - box2.clientWidth) {
					left2 = main2.clientWidth - box2.clientWidth;
				}
				if (top2>=main2.clientHeight - box2.clientHeight) {
					top2=main2.clientHeight - box2.clientHeight;
				}
				
				//改变left与top值
				box2.style.left = left2 + "px";
				box2.style.top = top2 + "px";
			}
			document.onmouseup = function(){
				document.onmousemove = null;
			}
		}

//放大镜
		
		var fdjbox = $("fdjbox");//外框
		var leftImg = $("leftImg");//小图
		var lv = $("lv");//滤镜
		var fdjright = $("fdjright");//右侧
		var rightImg = $("rightImg");//大图
		var jsfdj = $("jsfdj");
		
		fdjbox.onmousemove = function(event){
			var event = event || window.event;//浏览器兼容
			var fdjleft = event.clientX;
			var fdjtop = event.clientY;
			//显示隐藏的滤镜和右侧div
			lv.style.display = "block";
			fdjright.style.display = "block";

			//滤镜跟随鼠标移动
		var fdjleft = event.clientX - fdjbox.offsetLeft - lv.clientWidth/2;
					//因为滚动条对它的鼠标Y值有影响，所以需要加上位于对象最顶端和窗口中可见内容的最顶端之间的距离
					//由于DTD的原因：document.body.scrollTop 要改成 document.documentElement.scrollTop,否则显示document.body.scrollTop=0
					//如果页面直接用开头的话，使用document.body.scrollTop是没问题的。
		var fdjtop = document.documentElement.scrollTop + event.clientY - fdjbox.offsetTop - lv.clientHeight/2;

		if (fdjleft<=0) {
			fdjleft = 0;
		}
		if (fdjtop<=0) {
			fdjtop = 0;
		}
		if (fdjleft>=fdjbox.clientWidth - lv.clientWidth) {
			fdjleft=fdjbox.clientWidth - lv.clientWidth;
		}
		if (fdjtop>=fdjbox.clientHeight - lv.clientHeight) {
			fdjtop=fdjbox.clientHeight - lv.clientHeight;
		}

			//将两个值赋给滤镜距离左端和上面的距离
			lv.style.left = fdjleft + "px";
			lv.style.top = fdjtop + "px";

			//放大镜效果
			var num = rightImg.offsetWidth/leftImg.offsetWidth;
			fdjright.scrollLeft = lv.offsetLeft * num;
			fdjright.scrollTop = lv.offsetTop * num;
		}
		fdjbox.onmouseout = function(){
			lv.style.display = "none";
			fdjright.style.display = "none";
		}
		






//可以生成一个444~553的随机数
	function sui(){
		var random = Math.floor(Math.random()*110 + 444);
		alert(random);
	}

	//数组倒序
	function huan(){
		var a = [1,5,3,7];
		alert("我是a数组："+a);
		var b = a.reverse();
		alert("我转换成了b数组："+b);
	}

	//设置当前时间
	function Dtime(){
		var time = new Date("2000/12/12,22:10:10");
		alert(time);
	}

	//数组顺序排序
	function shun(){
		var a = [1,5,3,7];	
		a.sort();
		alert(a);
	}

	//省市级联
	var prov = document.getElementById("province");
	var city =document.getElementById("city");
	var citys = new Array();
	citys['河北']=['石家庄','保定','唐山','辛集','元氏',];
	citys['河南']=['郑州','开封','洛阳'];
	citys['山东']=['聊城','济南','青岛','德州'];
	for (var idx in citys) {
		prov.add(new Option(idx,idx));
	}
	function selectCity(){
		var pv = prov.value;//省份下拉框选中的值
		city.options.length=0;//清空上一次的选项框内容
		for (var idx in citys) {
			if (idx==pv) {
				var cs = citys[idx];//获取到省份对应的城市数组
				for (var i = 0; i < cs.length;i++) {
					city.add(new Option(cs[i],cs[i]));
				}
			}
		}
	}







	// document.body.scrollTop 要改成 document.documentElement.scrollTop,否则显示document.body.scrollTop=0
	//广告图层
	var adv = document.getElementById("adv");
	window.onscroll=function(){
		adv.style.top=(20+parseInt(document.documentElement.scrollTop))+'px';
	} 
