//冒泡排序
function bubble(arr){
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length - i - 1; j++){
			if(arr[j] > arr[j + 1]){
				var tmp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}

//选择排序
function choose(arr){
	for(var i = 0; i < arr.length -  1; i++){
		for(var j = i + 1; j < arr.length; j++){
			if(arr[i]>arr[j]){
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}

//获取节点对象
//格式：id：#id，className：.className,tagName:tagName,name:name=name
function $(vArg){
	switch (vArg[0]){
		case "#"://id
			return document.getElementById(vArg.substring(1));
			break;
		case "."://className
			return elementByClassName(document,vArg.substring(1));
			break;
		default:
			var str = vArg.substring(0,5);
			if (str == "name="){//name
				return document.getElementsByName(vArg.substring(5));
			}else{//tagName
				return document.getElementsByTagName(vArg);
			}
			break;
	}
}

//针对className兼容问题优化
function elementByClassName(parent,classStr){
	var nodes = parent.getElementsByTagName("*");//*:通配符，获取所有元素节点
	var result = [];
	for(i = 0; i < nodes.length; i++){
		if(nodes[i].className = classStr){
			result.push(nodes[i]);
		}
	}
	return result;
}

//获取当前样式兼容问题优化
function getStyle(elem,attr){
	return elem.currentStyle ? elem.currentStyle(attr) : getComputedStyle(elem)[attr];
}

//删除空白节点
function removeSpaceNode(parent){
	var nodes = parent.childNodes;//获取父级所有节点
	for(i = nodes.length - 1; i >= 0; i--){
		if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
			parent.removeChild(nodes[i]);
		}
	}
}

//在父级创建一个带文本的元素节点
function createElementWidthText(parent,tagName,text){
	var node = document.createElement(tagName);
	var textStr = document.createTextNode(text);
	node.appendChild(textStr);
	parent.appendChild(node);
}

//在旧节点之后添加新节点
function insertAfter(newNode,oldNode){
	//判断oldNode是否是最后一个
	var parent = oldNode.parentNode;
	if(oldNode == parent.lastChild){
		parent.appendChild(newNode);
	}else{
		parent.insertBefore(newNode,oldNode.nextSibling);
	}
}

//添加二级事件
function addEvent(obj,type,fun){//obj：父级，type：事件类型，fun：方法名称
	if(obj.addEventListener){
		obj.addEventListener(type,fun,false);
	}else{
		obj.attachEvent("on" + type,fun);
	}
}
//删除二级事件
function removeEvent(obj,type,fun){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fun,false);
	}else{
		obj.detachEvent("on" + type,fun);
	}
}

//封装cookie
function setCookie(name,value,day){//增、改
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);
	document.cookie = name + "=" + value + ";expires=" + oDate;
}
function getCookie(name){//查
	var cookieStr = document.cookie;
	var cookieArr = cookieStr.split("; ");
	for(var i = 0; i < cookieArr.length; i++){
		var aPairCookieArr = cookieArr[i].split("=");
		if(aPairCookieArr[0] == name){
			return aPairCookieArr[1];
		}
	}
}
function removeCookie(name){//删
	setCookie(name,1,-1);
}