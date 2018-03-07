//封装addClass && removeClass
//对所有对象添加方法

Object.prototype.myAddClass=function(str){
	var addArr=str.split(" ");
	var arr=this.className.split(" ");
	for (var i=0;i<addArr.length;i++) {
		arr.push(addArr[i]); //把每一项添加到哪里面
	}
	//去掉重复的
	disArr(arr);
	this.className=arr.join(" ");
}

//删除方法
Object.prototype.myRemoveClass=function(str){
	var removeArr=str.split(" ");
	var arr=this.className.split(" "); 
	for (var i= 0; i<removeArr.length-1; i++ ) {
		for (var j=arr.length-1; j>=0; j--) {
			if (removeArr[i]===arr[j]) {
				arr.splice(i,1);
			}
		}
	}
	this.className= arr.join(" ") ;
}

//数组去重  1 2 3 4 5 
function disArr(arr){
	for (var i=arr.length-1; i>0 ;i--) {
		for (var j=i-1;j>=0; j--) {
			if (arr[i]==arr[j]) {
				arr.splice(j,1);
			}
		}
	}
}

/**
 * 随机颜色
 */

function randomColor(){
	var color="rgba("+ Math.round(Math.random()*255) +"," + Math.round(Math.random()*255) 
	+ "," + Math.round(Math.random()*255)+ ",1)";
	return color;
}
	/*
		一、封装函数（20分）
请封装一个名字为$的函数，用于获取元素，主要能够实现以下功能：
根据id获取元素，如：$(“#container”) 用于获取id名为container的DOM元素。
根据类名获取元素，如：$(“.active”) 用于获取所有class名为active的DOM元素
根据标签名获取元素，如：$(“div”) 用于获取所有标签名为div的DOM元素
根据name属性获取元素，如：$(“name=hobby”) 用于获取所有name属性等于hobby的DOM元素
		*/
		

function $(str){
	var newStr=str.substring(0,5);
	if (newStr=="name=") {
		return document.getElementsByName(str.substring(5,str.length));
	}else{
		if (str[0]=="#") {
			return document.getElementById(str.substring(1,str.length));
		}else if (str[0]=".") {
			return document.getElementsByClassName(str.substring(1,str.length));
		}else{
			return document.getElementsByTagName(str);
		}
		
		
	}
}

/**
 * 对象的拖拽
 */
