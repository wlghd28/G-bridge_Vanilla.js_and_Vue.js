// let, var의 scope
/*
var name = "global var";

function home(){
    var homevar = "homevar";
    for(var i=0; i<100;i++){

    }
    console.log(i);
}

home();
*/
//원래는 var, es6 let 추가
//var => global, let => local variable
//scope!!
var name = "global var";

function home(){
    var homevar = "homevar";
    for(var i=0; i<100;i++){

    }
    console.log(i);
}

home();