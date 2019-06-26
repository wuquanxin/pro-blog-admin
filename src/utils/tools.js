
// 设置-删除token
export function setStorageToekn(token){
	let local = window.localStorage;
	if(token && token.length === 32){
		local['token'] = token;
		return
	}
	// 删除
	local['token'] = '';
}

// 获取token
export function getStorageToekn(){
	let storage = window.localStorage['token'];
	return (storage && storage.length === 32 ) ? storage : false
}

// 储存storage
export function setStorage(keyName, obj){
	window.localStorage[keyName] = JSON.stringify(obj);
}

// 获取storage
export function getStorage(keyName){
	let context = window.localStorage[keyName];
	return  content ? JSON.parse(content) : false
}

// 本地运行判断是正式或者测试的文件显示路径
export function getRunFilePath(){
	let isDev = process.env.NODE_ENV === 'development';
	return isDev ? '/' : (isMain() ? '/main/' : '/test/')
}

// 判断正式-测试
export function isMain(){
	let root = process.env.VUE_APP_ROOT;
	return root ? true : false
}

// 判断是否-本地
export function isDev(){
	return process.env.NODE_ENV === 'development' ? true : false
}
// 设置背景
export function setBodyBg(className){
	document.body.className = className;
}