// function square(x){
// // if it's an even number return num**2
// // else return the number num**3
// if( x%2===0){
// return x**2
// }
// return x**3
// }
// console.log(square(2))
// console.log(square(3))
// first class citizen -> function

function func(){
console.log("I am func 1")
}
function func2(fn){
    // call it -> perform the task in it
    console.log("I am func 2")
    fn()

}
func2(func)

function func3(){

    return function (){
        console.log("I have been returned from func 3")
    }
}
// func3()()
// let returnedFunc=func3()
// returnedFunc()


// 5->1
// 5->2
// 5->3
function mult(x){

let z= function(y){
    return x*y
}
return z
}
//  closures-> (x),(y)


// let mult5=mult(5)
console.log(mult(7)(5))
// console.log(mult5(4))
// console.log(mult5(7))

// callback Function -suitable example

//  we are very sure beyond resoanable doubt that we will perform task 1,
//  and then  are aware of how to implement it.
// ------- task 2 -------
// variable task-> operationz, operation x, .....
// custom map function

let Student=["Catherine", "Azhar","Jerome","Steve", "Cynthia","Paul"] //iterating over-task
// we are not aware- task2
function iterator(array, task,task2){
// uppercase, lowercase
let finalarray=[]
    for( let arr of array){
        finalarray.push(task(arr))
        // task2(arr)
    }
    return finalarray
}
function uppercase(param){
    return param.toUpperCase()
}
function LowerCase(str){
    return str.toLowerCase()
}

console.log(iterator(Student,uppercase))
console.log(iterator(Student,LowerCase))

// -------------------------------------------------------------------------------------
// SCOPE-> where a variable is accessible
// Global, function, block
let num=5
console.log("Global",num)
// console.log(title) const, let, var
function printName(name){
    console.log("Function",num)
console.log(title)
    if(name!=''){
        console.log("Block",num)
        var title='Mr.'
console.log(title,name)
    }else{
//  console.log(title)
        console.log("No Name Provided")
    }
}
printName('stve')
// Scope chain->
//   the areas, places where javascrit compiler looks for variables
// the innerfunc/block-> func/block-> func/block->...-> global scope
// lexical scoping



// for( let i=0; i<=Student.length-1; i++){
//     console.log(Student[i]) 
// }
// for(let arr of Student.reverse()){
//     console.log(arr)
// }
























