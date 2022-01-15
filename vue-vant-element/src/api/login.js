import request from '../utils/api/request'
export function userLogin(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}