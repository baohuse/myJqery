//获取一个json对象的长度
function myLength(data){
	var n=0;
	for (var i in data) {
		n++;
	}
	return n;
}
//将对象转为数组
function oTransforma(obj){
	var arr=[];
	for (var key in obj) {
		arr.push(obj[key])
	}
	return arr;
}
