import swaxios, { SwAxiosError } from '../../src/index'

swaxios({
    method: 'get',
    url: '/error/get1'
}).then((res) => {
    console.log(res)
}).catch((e: SwAxiosError) => {
    console.log(e.message)
    console.log(e.code)
})

swaxios({
    method: 'get',
    url: '/error/get'
}).then((res) => {
    console.log(res)
}).catch((e: SwAxiosError) => {
    console.log(e.message)
    console.log(e.code)
})

setTimeout(() => {
    swaxios({
        method: 'get',
        url: '/error/get'
    }).then((res) => {
        console.log(res)
    }).catch((e: SwAxiosError) => {
        console.log(e.message)
        console.log(e.code)
    })
}, 5000)

swaxios({
    method: 'get',
    url: '/error/timeout',
    timeout: 2000
}).then((res) => {
    console.log(res)
}).catch((e: SwAxiosError) => {
    console.log(e.message)
})