//alert('hello exit');
const namef='faizi';
const money=234;
//const rating=4.5;
//const y=null;
//const x=true;
//const z=undefined;
//let ff;
//console.log(typeof name);
//console.log(typeof money);
//console.log(typeof rating);
//console.log(typeof y);
//console.log(typeof x);
//console.log(typeof z);
//console.log(typeof ff);

//concatination(old way)

//console.log('my name is ' + namef +' and my money is'+ money);
////template strings better way with ${}
//const hello=`my name is ${namef} and my money is ${money}`;
//console.log(hello);

//methods and functions

//const s='everyone';
//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.substring(0,7));
//console.log(s.split(''));


//arrays 
//old way 
const number=new Array(1,2,3,4,5,6,7,8,9,10);
console.log(number);                         
//new way  
const fruits =['oranges','mangoes','apple',10,true];
console.log(fruits[2]);
fruits.push('kiwi');
console.log(fruits); 
fruits.unshift('pineapple');
console.log(fruits);
console.log(fruits.indexOf('mangoes'));

const prsonn = {
        fisrtname:'faizan',
        lastname:'khan',
        age:2,
         address:{
            street:'street no 9',
            house:'no4',
            city:'lahoire'       

    }


}
console.log(prsonn.address.house);
//to pull some thing from this you can destructure

const { fisrtname,age,address:{city}}=prsonn;
console.log(fisrtname,city);


//array of object

const todo= [
{
    id:1,
    note:'go to market',
    done:true
}
,
{
    id:2,
    note:'caca',
    done:false
}
,
{
    id:3,
    note:'hello',
    done:false
},
{
    id:4,
    note:'hello umdd',
    done:true
}





]

//console.log(todo[2].note);
//
////convert to json for to get itready to send to server 
//
//const todojson=JSON.stringify(todo);
//console.log(todojson);
//
//for(let i=0;i<todo.length;i++){
//    console.log('todays todo are'+todo[i].id+todo[i].note+todo[i].done);
//}
//
//
//for(let t of todo){
//    console.log(t.done);
//}



////for.each map filter
//todo.forEach(function(t){
//    console.log(t.note);
//});
// map
//const todoss=todo.map(function(t){
//
//
//    return t.note;
//
//});
//console.log(todoss);



//filter
//const todocomplete=todo.filter(function(t){
//    return t.done===true;
//});
//console.log(todocomplete);










//print those who are complete
//
//const checkdone=todo.filter(function(t){
//    return t.done===true;
//
//}).map(function(t){
//
//    return t.note;
//    });
//
//
//console.log(checkdone);

const addnum=(num1,num2)=>{
    return num1+num2;
}
console.log(addnum(3,7));
 //const addnum=(x,y)=>x+y;
