console.dir(document);
console.log(document.URL);
console.log(document.title);
document.title='item lister';
var submit=document.querySelector('input[type="submit"]');
submit.value='send';

//traversy the dom 

const list=document.querySelector('#items');
//parent node
console.log(list.parentNode);
list.parentNode.style.backgroundColor='#f4f4f4';
console.log(list.parentNode.parentNode );
//children property for the idss INSIDE THE DIV ITEM LKIST 
console.log(list.children[2]);


//  simple child node property includes white spaces which is pain in ass
// same with the firstchild property

//firstchild
console.log(list.firstElementChild);
list.firstElementChild.textContent='helloeveryone ';

//lastchild
console.log(list.lastElementChild);
list.lastElementChild.textContent='hi last one ';

//to select between list 
console.log(list.children[1]);
list.children[1].style.backgroundColor='green';

//siblings

console.log(list.nextSibling);
console.log(list.nextElementSibling.nextElementSibling);

//previous sibling
console.log(list.previousSibling);
console.log(list.previousElementSibling);

//create element 
 var newdiv=document.createElement('div');
 console.log(newdiv);

 //add class
 newdiv.className='hello';

 //add id
 newdiv.id='d21';
 //add title
 newdiv.setAttribute('tittle','hello div'); 

 //add attribute to div

 var newdivtext=document.createTextNode('hello world');
 newdiv.appendChild(newdivtext);
 console.log(newdiv);

 var constainer=document.querySelector('header .container');
 var h1=document.querySelector('header h1');
 constainer.insertBefore(newdiv , h1);


 //event listener

 var button=document.getElementById('button');
// button.addEventListener('click',runevent);


// function buttonclick(e){
//    console.log('clicked');
//    document.getElementById('header-title').textContent='changedthetitle';
//    //document.getElementById('items').style.backgroundColor='red';
//    //to see the position of thew mouse on secreen on an element 
//    console.log(e.offsetX,e.offsetY);
//
//    // to see if key is pressed with the button or not  or not
//    console.log(e.altKey);
//
//    console.log(e.shiftKey);
//    console.log(e.ctrlKey);
// }
//


//types of events 

// button.addEventListener('click',runevent);
//button.addEventListener('dblclick',runevent);
button.addEventListener('mousedown',runevent);


 function runevent(e){
    console.log('Event Type '+ e.type);

    console.log(e.target.value);

 }



 //mouse event 

 var box=document.getElementById('box');
 //box.addEventListener('mouseenter',runevent);
 //box.addEventListener('mouseleave',runevent);
 //box.addEventListener('mouseover',runevent);
 //box.addEventListener('mouseout',runevent);
//
 //box.addEventListener('mousemove',runevent);
 //output.innerHtml='x coordinate: '+e.offsetX+' y coordinate: '+e.offsetY;


//in order to count or capture what we are entering in text form we use`


 var inputitem=document.querySelector('input[type="text"]');
 var form=document.querySelector('form');

 form.addEventListener('keydown',runevent);



 