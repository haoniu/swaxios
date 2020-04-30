import swaxios from '../../src/index'

// swaxios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         a: 1,
//         b: 2
//     }
// })

// const arr = new Int32Array([21, 31])

// swaxios({
//     method: 'post',
//     url: '/base/buffer',
//     data: arr
// })

swaxios({
    method: 'post',
    url: '/base/post',
    data: {
        a: 1,
        b: 2
    }
}).then((res) => {
    console.log(res)
})

swaxios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    data: {
        a: 3,
        b: 4
    }
}).then((res) => {
    console.log(res)
})