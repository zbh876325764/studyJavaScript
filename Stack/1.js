function fun1() {
    console.log('这是第一个方法')
}
function fun2() {
    fun1()
    console.log('这是第二个方法')
}
function fun3() {
    fun2()
    console.log('这是第三个方法')
}
function fun4() {
    fun3()
    console.log('这是第四个方法')
}
fun4()