

/**
 * 
 * 1. 数据类型分类
 * 1). 基本数据类型
 *   String: 任意字符串
 *   Number: 任意数字
 *   boolean: true/false
 *   undefined: undefined
 *   null: null
 * 2). 引用数据类型
 *   Object  任意对象
 *   Function 一种特别的对象(可执行)
 *   Array: 一种特别的对象(数值下标，内部数据是有序的)
 * 
 * 2. 判断
 *  typeof: 返回数据类型的字符串表达
 *    可以判断：undefined/数值/字符串/boolean
 *  instanceof: 判断对象的具体类型
 *    可以判断：对象的具体类型
 *  === / ==  (3个等号会做数据转换)
 *    可以判断 undefined/null
 * 
 */

 //1. 基本数据
 var a;
 console.log(a, ); //undefined, 'undefined'
 console.log(a, typeof a, typeof a === 'undefined', a===undefined); //undefined, 'undefined' true, true
 console.log(undefined === 'undefined'); //true

 a = 3;
 console.log(typeof a === 'number'); //true

 a = '1243hg';
 console.log(typeof a === 'string'); //true

 a = true;
 console.log(typeof a === 'boolean'); //true

 a = null;
 console.log(typeof a === 'object', a===null); //true, true, 没有'null'的类型, 用全等判断

 //2. 引用对象
const b1 = {
    b2: [1, 'abc', console.log],
    b3: function(){
        console.log('b3');
        return function(){
            return "Vince God";
        }
    }
}
console.log(b1 instanceof Object, b1 instanceof Array); //true false
console.log(b1.b2 instanceof Array, b1.b2 instanceof Object, typeof b1.b2); //true true object
console.log(b1.b3 instanceof Function, b1.b3 instanceof Object, typeof b1.b3 === 'function'); //true true true
console.log(typeof b1.b2[2] === 'function'); //true
b1.b2[2](4); //4
console.log(b1.b3()()); //b3, Vince God


 var obj = {
     name: 'Tomny',
     age: 12
 };
 function test(){
     var a = 3;
 }

 var arr = [3, 'abc'];
 arr[1];
