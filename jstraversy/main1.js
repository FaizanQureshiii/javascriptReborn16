//object constructor
//function person(firstname,lastname,dob){
//    this.firstname=firstname;
//    this.lastname=lastname;
//    this.dob=new Date(dob);
//    //getters
//    this.getfullname=function(){
//        return `${this.firstname} ${this.lastname}`;
//    }
//    person.prototype.getfullname=function(){
//        return `${this.firstname} ${this.lastname}`;
//    }
//    //setters
//    this.setname=function(firstname,lastname){
//        this.firstname=firstname;
//        this.lastname=lastname;
//    }
//
//}

//class

class person{
    constructor(firstname,lastname,dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob=new Date(dob);
    }
    getfullname=function(){
        return `${this.firstname} ${this.lastname}`;
    }
}
const person1 =new person('faizi','qureshi','01-01-2000');
const person2 =new person('fahad','qureshi','09-09-2000');
//console.log(person1.dob.getFullYear());
//console.log(person1.getfullname());
//console.log(person1.getlastname());
console.log(person1.getfullname());
console.log(person1);



//Single element
console. log (document. getElementById( ' my—form' ) ) ;
console. log (document. querySelector( 'hl' ) ) ;
//Multiple element
console. log (document. querySelectorAll( '. item ' ) ) ;
// console. log (document.getElementsByClassName( item' ) ) ;
// console. log (document.getElementsByTagName( 'li' ) )


