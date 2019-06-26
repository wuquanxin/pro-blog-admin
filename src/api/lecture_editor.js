import request from '@u/request'

// 查询讲座列表
export function list(data){
	return request({
		url: '/cms_activity/list',
    method: 'POST',
    data: data || {}
	})
}
// 根据id查询讲座
export function get(data){
	return request({
		url: '/cms_activity/get',
    method: 'POST',
    data: data || {}
	})
}
// 修改讲座信息
export function update(data){
	return request({
		url: '/cms_activity/update',
    method: 'POST',
    data: data || {}
	})
}
// 添加讲座信息
export function add(data){
	return request({
		url: '/cms_activity/add',
    method: 'POST',
    data: data || {}
	})
}