// //normal function statement
// function sayHI(){
//     console.log('hi');
// }

// sayHI();

function callFunction(fun){
    fun();
}

//function expression
var sayBye = function(){
  console.log('bye');  
};

callFunction(sayBye);

