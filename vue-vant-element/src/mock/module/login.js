const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const loginData = function (opt) {
    console.log('opt', opt)
    const user = JSON.parse(opt.body).user
    const pass = JSON.parse(opt.body).pass
    if(user === 'ltj001' && pass === '123456') {
        return {
            data: {
                code: '00000',
                message: 'success'
            }
        }
    } else {
        return {
            data: {
                code: '00001',
                message: 'error'
            }
        }
    }

}
Mock.mock('/login', /post/i, loginData);