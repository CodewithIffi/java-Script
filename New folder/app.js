// function sum(num1 , num2){
//     console.log( num1 + num2);
    

// }
// sum();


// function showstring(){
//     console.log("hello world");
//     return "Iffi"
// }
// var myfunc =showstring()
// console.log(myfunc);

// function showstring(){
//     console.log("hello Java");
//     return "Iffi"
// }
// var myfunc =showstring()
// console.log(myfunc);


// function percentage(){
//     "marks1 marks2 marks3 marks4"
//     totalmarks
// }




// var paragraph = document.querySelector("#para")
// console.log(paragraph.innerHTML)
// paragraph.innerHTML = 'changed through js'



var head = document.querySelector('.head');
var paragraph = document.querySelector("#para");
console.log(paragraph.innerHTML)

function changeText(){

    if(paragraph.innerHTML === 'changed through js' && head.innerHTML === 'changed through js'){
        paragraph.innerHTML = 'lorem ipsum';
        head.innerHTML = 'hello world';
    }else{
        paragraph.innerHTML = 'changed through js'
        head.innerHTML = 'changed through js'
    }
}

// function changeText(){

//     if(paragraph.innerHTML === 'changed through js' && head.innerHTML === 'changed through js'){
//         paragraph.innerHTML = 'lorem ipsum';
//         head.innerHTML = 'hello world'
//     }else{
//         paragraph.innerHTML = 'changed through js'
//         head.innerHTML = 'changed through js'
//     }
// }






// function greetuser(){
//     console.log('hello world');
//     console.log('hello world');
//     console.log('hello world');
//     console.log('hello world');
//     console.log('hello world');
// }

// greetuser()


// function greetuser(username , lastname ,age){
//     console.log('hello' + username + lastname + age);

// }
// greetuser(' Iffi ' , ' codder' , ' 25')

function sum(num1 , num2){
    console.log('sum of two number ===>' , num1 + num2);
}
sum(19 , 20)





