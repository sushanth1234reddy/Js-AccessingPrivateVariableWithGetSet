// call, apply , bind 
//used for borrowing of method from one object to another object

let vamshi={
    a:"html",
    b:function(name,value){
        console.log("vamshi function",name,value);
    }
}

let sush={
    a:"css"
}
//call()
// vamshi.b.call(sush,parametre1,parameter2);

//apply()
// vamshi.b.apply(sush,[parameter1,parameter2]);

//bind(): this whole experssion is assigned to a particular variable.
// let opp = vamshi.b.bind(sush)
// opp(paramter1, parameter2)

let v=vamshi.b.bind(sush);
v("hero","sdd");