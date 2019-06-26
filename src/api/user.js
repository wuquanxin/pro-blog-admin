import request from '@u/request'

// 退出登录
export function logout(){
	return request({
		url: '',
    method: 'POST',
    data: data || {}
	})
}
// 登录
export function login(data){
	return request({
		url: '/web/login',
    method: 'POST',
    data: data || {}
	})
}
// 获取信息
export function getUser(data){
	return request({
		url: '/web/getUser',
    method: 'POST',
    data: data || {}
	})
}
// 注销登录
export function loginOut(data) {
	return request({
		url: '/web/loginOut',
		method: 'POST',
		data: data || {}
	})
}