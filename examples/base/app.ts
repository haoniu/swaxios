import swaxios from '../../src/index'

swaxios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: ['bar', 'baz']
    }
})

swaxios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: {
            bar: 'baz'
        }
    }
})

const date = new Date()

swaxios({
    method: 'get',
    url: '/base/get',
    params: {
        date
    }
})

swaxios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: '@:$, '
    }
})

swaxios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: 'bar',
        baz: null
    }
})

swaxios({
    method: 'get',
    url: '/base/get#hash',
    params: {
        foo: 'bar'
    }
})

swaxios({
    method: 'get',
    url: '/base/get?foo=bar',
    params: {
        bar: 'baz'
    }
})