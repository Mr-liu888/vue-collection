import request from '../utils/api/request'
export function parameterQuery(data) {
    return request({
        url: '/news',
        method: 'post',
        data
    })
}