import swaxios from '../../src/index'

swaxios({
    method: 'get',
    url: '/simple/get',
    params: {
        foo: ['bar']
    }
})

console.log('run')