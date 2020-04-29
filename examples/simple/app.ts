import axios from '../../src/index'

axios({
    method: 'get',
    url: '/simple/get',
    params: {
        foo: ['bar']
    }
})

console.log('run')