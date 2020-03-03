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