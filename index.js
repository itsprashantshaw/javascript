//my first javascript code;
console.log('Hello World');
//Declare a varible;
let nam ='Prashant';
console.log(nam);
//variable cannot be a reserved key word;
//it cannot start with numbers like(1name)
//it cannot contains any hyphene,space
//it is case sensitive
//declaring multiple varibles
//type-1
let firstnam='Prashant',lastnam='Shaw';
console.log(firstnam,lastnam)
//type-2;
let fstnam='Prashant';
let lstnam='Shaw';
console.log(fstnam,lstnam)
//define constant;
const interestm ='Prashant';
//interestm='shaw';
console.log('interestm');
//1.premitive data types
let na='string';//string literals
let num=2;//number literals
let isapproved=true;//boolean literals
let fname=undefined;//undefined literals
let selectcolor=null;//null literals
//dynamic typing:- In this method we can change variales data type in run time.
//2.reference data type:- Object,Array,Funtions.
//Object:- To access multiple variables using a object varible which store those variables reference.
let person={nam:'Prashant',
            age:30};
//to access or modify those object variables there are two methods
//dot notation
person.nam='Bimal';
console.log(person)
//Bracket Notation
person['nam']='Ram';
console.log(person.nam)


