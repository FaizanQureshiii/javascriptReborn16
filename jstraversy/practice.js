//console.log(document.getElementById('my-form'));
////console.log(document.getElementsByClassName('item'));
////console.log(document.querySelector('.item'));
////console.log(document.querySelector('.item'));
////console.log(document.querySelectorAll('.item'));
////
////console.log(document.querySelector('li'));
////
////const ul=document.querySelector('.items');
////ul.firstElementChild.textContent='hello';
////ul.lastElementChild.style.backgroundColor='yellow';
//ul.children[1].style.backgroundColor='green';

//const btn=document.querySelector('.btn');
//btn.addEventListener('mouseover',(e)=>{
//    e.preventDefault();
//    console.log(e.target);
//    document.querySelector('#my-form').style.backgroundColor='#ccc';
//    document.querySelector('body').classList.add('bg-dark'); 
//    document.querySelector('.items').lastElementChild.innerHTML='hello try again';
//
//
//});





const form=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');

form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(nameinput.value===''||emailinput.value===''){
        msg.classList.add('error');
        msg.innerHTML='please fill the feilds';

        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`));
        userlist.appendChild(li);
        //clear fields
        nameinput.value='';
        emailinput.value='';
    }

}
