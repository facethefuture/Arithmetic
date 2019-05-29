function framework () {
    console.log('commonJS')
}
// 用module.export导出变量会报错
// module.exports = {
//     framework
// }
export {framework}