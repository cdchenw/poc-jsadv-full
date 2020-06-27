
/**
 * 1. undefined 和 null 的区别
 *    undefined 代表了定义了 未赋值
 *    null定义了并且赋值了，只是值为null
 * 2. 什么时候给变量赋值为null呢
 *    初始赋值，表明将要赋值为对象
 *    结束前，将对象变为垃圾对象，并被回收
 * 3. 严格区别变量类型和数据类型
 *    1) 数据的类型
 *       基本类型
 *       对象类型
 *    2) 变量类型（变量内存值的类型）
 *        基本类型: 保存的就是基本类型的数据
 *        引用类型： 保存的是地址值
 */

//实例：实例对象
//类型：类型对象
 function Person(name, age){ //构造函数 类型
    this.name = name;
    this.age = age;
 }

 var p = new Person(); //根据类型创建的实例对象(简称实例)

 Person('jack', 12); //一般不会这么做，语法是对的

 //1. undefined 和null的区别
var a;
console.log(a);//undefined
a=null;
console.log(a);//null

var b = null;//初始为null,表明将要赋值为对象
b = ['atguigu', 12]; //确定对象就赋值
b = null; //让b指向的对象成为垃圾对象(回收)

var c = function(){

}
console.log(c);



/**
 * 附1： 面试题
 * 
 * 1. 为什么type of null 返回object, 
 *    当初始赋值为null, 表示将要赋值为对象 , 另外 当把一个已赋值对象设置为null，表示释放和回收该对象
 * 2. undefined和null的区别
 *    undefined 代表了定义了 未赋值, null定义了并且赋值了，只是值为null
 */
