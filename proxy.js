let student = {
    name: '学生',
    age: 23
}
let proxyStudent = new Proxy(student,{
    get: function(target,key,receiver){
        console.log('正在读取属性' + key)
        return Reflect.get(target,key)
    },
    set: function(target,key,value,receiver) {
        console.log('正在设置属性' + key)
        Reflect.set(target,key,value)
    }
})
export {proxyStudent}