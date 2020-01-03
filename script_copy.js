 /*console.log('Hello World!!!');
************************************
********************************
 var firstName='rajesh';
 console.log(firstName);
 
 var age=26;
 console.log(age);

 var fullAge=true;
 console.log(fullAge);
 
 var job;
 console.log(job);*/
/************************
 * *************************
 * **********************
 */
//type coercion
/*var age =28;
var firstName='John'
console.log(firstName + ' '+ age)

var job,isMarried;
job='Teacher'
isMarried=false;
console.log(firstName +' is '+ age +' yr old '+ job +'is he Married '+  isMarried);
/***************************
 * *************************
 * ***************************
 * /type mutation
job='driver';
age='twenty eight';
alert(firstName +' is '+ age +' yr old '+ job +' is he Married '+  isMarried);

var lastName=prompt('What is his last name');
console.log(firstName +' '+ lastName);*/
/*************************
**********************
**************/
//basic operators
//math operators
/*var ageJohn,ageSnow,job,yearJohn,yearSnow;
now=2018;
ageJohn=28;
ageSnow=33;
job='teacher'
yearJohn= now - ageJohn;
yearSnow= now - ageSnow;
/***************************
 * *************************
 * ************************
 * //logical operator
isjohnOlder= ageJohn>ageSnow;
console.log(yearJohn);
console.log(isjohnOlder);
console.log(now+2);
console.log(now*2);
console.log(now/2);
console.log(typeof now);
console.log(typeof job);
console.log(typeof isjohnOlder);
var x;
console.log(typeof x);*/
/*******************************
 * ***************************
 * ***************************
 * //operator precedence
/*var now = 2018;
var yearJohn=1989;
var fullAge=18;
//multiple operators
var isfullAge = now - yearJohn>=fullAge;
console.log(isfullAge);
console.log(now-yearJohn);
/*************************************
 * ************************************
 * *****************************
 * //Grouping
var ageJohn=now-yearJohn;
var ageMark=35;
var average=(ageJohn+ageMark)/2;
console.log(average);
var x,y;
x=y=(3+5)*4-6;
console.log(x,y);
//more operators
x+=2;
console.log(x);
x/=10;
console.log(x);
x--;
console.log(x);*//************************************
*************************************
********************************************* */
//coding challenge
/*var johnWt,johnHt,markWt,markHt;
johnWt=prompt('what is john weight');
johnHt=prompt("what is john height")
console.log(johnWt,johnHt);
markWt=prompt('what is mark weight');
markHt=prompt("what is mark height");
var BMIJ=johnWt/(johnHt*johnHt);
var BMIM=markWt/(markHt*markHt);
console.log(markWt,markHt);
console.log(BMIJ,BMIM);
ismarkHIGH=BMIM>BMIJ;
console.log('is mark BMI greater than john '+ ismarkHIGH);
*//*********************************************
******************************************
*******************************************
 */
// if else statement
/*var firstName='john'
var civilStatus='single'
if (civilStatus==='married')
{console.log(firstName+' is married');
}
else{
    console.log(firstName+'will hopefully marry soon:)');

}
var isMarried=true;
if (isMarried)
{console.log(firstName+' is married');
}
else{
    console.log(firstName+'will hopefully marry soon:)');
}

johnWt=prompt('what is john weight');
johnHt=prompt("what is john height")
console.log(johnWt,johnHt);
markWt=prompt('what is mark weight');
markHt=prompt("what is mark height");
var BMIJ=johnWt/(johnHt*johnHt);
var BMIM=markWt/(markHt*markHt);
console.log(markWt,markHt);
console.log(BMIJ,BMIM);
if (BMIM>BMIJ){
    console.log('Marks\'s BMI is greater than john\'s')
}
else{
    console.log('john\'s BMI is higher than marks\'s');
}
*/
/*age=prompt('what is his age');
if(age<13)
{console.log('he is a small boy');
}
else if(age>=13&&age<=20)
{console.log('he is a teenager');}
else if(age>=20 && age<=30)
{console.log('he is a young man');
}
else {
    console.log('he is a man');
}
*//**********************************************
*****************************************************
******************************************************
 */
//ternary operator
/*var firstName='John';
var age=22;
age>=18 ? console.log(firstName + ' drinks beer '):console.log(firstName + ' drnks juice ');

var drinks = age>18 ? 'beer': 'juice';
console.log(drinks);
*//************************************************
****************************************************
******************************************************
 */
//******** switch statements
/*var job=prompt('tell me the job u do');
switch(job){
    case 'teacher':console.log('teaches');
    break;
    case 'driver':console.log('drives');
    break;
    default :console.log('stays in home');
}*/
/*switch(true){
    case age<13:console.log('john team is the winner');
    break;
    case age>13 && age<20:console.log('john team is the winner');
    break;
    case age>=20&&age<30:console.log('john team is the winner');
    break;
    default:console.log('john team is the winner');
}*//**************************************************
**********************************************************
*******************************************************************
 */
// truthy and falsy values and equality operator
//falsy values are: 0,null,'',notano.,undefined

/*var height=0;

if(height|| height===0){
    console.log('variable is defined');
}else {
    console.log('variable is not defined');
}/*****************************************************************
******************************************************************************
*********************************************************************************
 *//*
//equality operators
if (height=='23'){
    console.log('the== operator does type coeercion');

}*//*************************************************************************
**********************************************************************************
******************************************************************************** */
//*****coding challenge 2 */
//if(johnAvg!=mikeAvg && johnAvg!=maryAvg){}
/*trial part 
if (highest===johnAvg&& highest!=mikeAvg&&highest!=maryAvg){
    console.log('john team is the winner');

}else if(highest===mikeAvg&& highest!=johnAvg&&highest!=maryAvg){
    console.log('mike team is the winner');
} else if (highest==maryAvg && highest!=mikeAvg&&highest!=johnAvg){
    console.log('mary team is the winner');
}
else if(highest)
    console.log('
}
}else {
    console.log('it is a draw');

}*/
/*************************************************************************************************************************
 * ***************************************************************************************************************************
 * ********************************************************************************************************************************
 *  *//* result 2nd coding
var johnAvg=(92+144+103)/3;
mikeAvg=(116+97+129)/3;
maryAvg=(97+137+108)/3;
console.log(johnAvg,mikeAvg,maryAvg);
var highest=johnAvg>mikeAvg?johnAvg:mikeAvg;
var highest=highest>maryAvg?highest:maryAvg;
switch(true){
    case highest==johnAvg&&highest!=mikeAvg&&highest!=maryAvg:console.log('john team is the winner');
    break;
    case highest==mikeAvg&&highest!=johnAvg&&highest!=maryAvg:console.log('mike team is the winner');
    break;
    case highest==maryAvg&&highest!=mikeAvg&&highest!=johnAvg:console.log('marry team is the winner');
    break;
    case highest==johnAvg&&highest==mikeAvg&&highest!=maryAvg:console.log('john and mike team are the winner');
    break;
    case highest==johnAvg&&highest==maryAvg&&highest!=mikeAvg:console.log('john and mary team are the winner');
    break;
    case highest==mikeAvg&&highest==maryAvg&&highest!=johnAvg:console.log('mary and mike team are the winner');
    break;
    default:console.log('its a draw');

}
*//****************************************************************************************************************************************
********************************************************************************************************************************************
********************************************************************************************************************************************** */
  //functions
  /*function calculateAge(birthyr){
      return 2018-birthyr;
  }  
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn,ageMike,ageJane);
function yearUntilRetirement(year, firstName){
    var age =calculateAge(year);
    var retirement=65-age;
    if (retirement>0){
        console.log(firstName + 'retires in '+ retirement + 'years.');
    
    }else {
        console.log(firstName+ ' is already reitred. ')
    }
}
yearUntilRetirement(1940,'jane');*/
/********************************************************************************************************
 * **********************************************************************************************
 * *********************************************************************************************************
 * 
 */
//function statements and expressions
/********************
 * func stmt-that doesnot produce a immediate value 
 * eg:-if ,else stmt,while loop
 * func expression -that does produce a desired result 
 * eg:- function calling
 */
//function declaration
//function whatDoYouDo(job,firstName){}

//function expression
/*var whatDoyouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + 'drives cab ';
        case 'designer':
            return firstName+'designs';
        default:
            return firstName+ ' remains in home';
   

    }
}
console.log(whatDoyouDo('teacher','john'));*/
/******************************************************************************************************
 * ********************************************************************************************************
 * *********************************************************************************************************
*** * ************arrays
 */
//Initialise new array
/*var names = ['john','mark','jane'];
var years= new Array(1990,1978,1967);//another way less used

console.log(names[0]);
console.log(names);
console.log(names.length);
/*************************************************************************************************************
 * **************************************************************************************************************
 * ****************************************************************************************************************
 * 
 *//*
//Mutate array data
names[1]='Ben';
names[names.length]='Mary';
console.log(names);
/*********************************************************************************************************
 * ***********************************************************************************************************
 * ***********************************************************************************************************
 * 
 *//*
//different data types
var john=['john','smith',1990,'teacher',false];

john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.shift();
console.log(john);
john.pop(1990);
console.log(john);
console.log(john.indexOf(1990));

isdesigner=john.indexOf('designer')===-1?'john is not designer':'john is a designer';
console.log(isdesigner) ;*/
/********************************************************************************************************************
 * *********************************************************************************************************************
 * *********************************************************************************************************************
 * coding challenge 3
 */
/*
function tipcalculator(bill){ 
    switch(true){
        case bill<50:tip=bill*0.2;
        return tip ;
    
        case bill>50&&bill<=200:tip=bill*0.15;
        return tip;

        case bill>200:tip=bill*0.1;
        return tip;
    }
}
var tips=[];
var amt=[];
var bill=[124,48,268];
for (i=0;i<bill.length;i++){
tipcalculator(bill[i]);
tips.push(tip);
amt.push(tip+bill[i]);
}


console.log(tips);
console.log(amt);

/******************************************************************************************************************
 * **************************************************************************************************************************
 * *********************************************************************************************************************
 * Objects and Properties
 */

 //object literal
 /*var john = {
     firstName:'John',
     lastName:'Snow',
     birthyear:1990,
     family: ['jane','Mark','Bob','Marley'],
     job: 'teacher',
     isMarried:false
 };
 console.log(john.firstName);
 console.log(john['lastName']);
 var x='birthyear';
 console.log(john[x]);

 john.job='designer';
 john['isMarried']=true;
 console.log(john);


 //new object syntax

var jany = new Object();
jany.firstName='janey';
jany.birthyear=1960;
jany['lastName']='Snowwhite'
console.log(jany);
*//*******************************************************************************************************
***************************************************************************************************************
***************************************************************************************************************
************** */
//Objects and methods
/*var john = {
    firstName:'John',
    lastName:'Snow',
    birthyear:1996,
    family: ['jane','Mark','Bob','Marley'],
    job: 'teacher',
    isMarried:false,
    calcAge:function(){
      this.age= 2019-this.birthyear;
    }
};
john.calcAge();
console.log(john);*/
/****************************************************************************************************************
******************************************************************************************************************
********************************************************************************************************************
 *///coding challenge 4
 /*
 var john={
     fullName:prompt('what is his full name of person 1'),
     mass:prompt('tell me his weight in kg'),
     height:prompt('tell me his height in meters'),  
     calcBMI:function(){
         this.BMI=this.mass/(this.height*this.height);
         return this.BMI;

     } 
 };
 var mark={
     fullName:prompt('what is his full name of person 2'),
     mass:prompt('tell me his weight in kg'),
     height:prompt('tell me his height in meters'),
     calcBMI:function(){
         this.BMI=this.mass/(this.height*this.height);
         return this.BMI;
      
     }
 };


 if(john.calcBMI()!=mark.calcBMI()){

console.log(john.BMI,mark.BMI)
 john.BMI>mark.BMI?console.log(john):console.log(mark);
 }
 else{
     console.log("both the BMI\'s are equal");
 }******************************************************************************************
********************************************************************************************
********************************************************************************************

 /*function calc(mass,ht){
     return mass/(ht*ht);
 }
 var p1={
     name:'john',
     ht:1.80,
     mass:80,
     
 };
 p1.bmi=calc(p1.mass,p1.ht);
 console.log(p1);*/
/**********************************************************************************************************************************************
 * ************************************************************************************************************************************************
 * ***********************************************************************************************************************************************
 * loops and iteration
 */
//for loop
/*var john=['john','smith',1990,'teacher',false];

for (i=0;i<john.length;i++){
    console.log(john[i]);
}

//While loop
var i=0;
while(i<john.length){
    console.log(john[i]);
    i++      
}*/


//continue and break stmt
/*for (i=0;i<john.length;i++){
    if (typeof john[i]!=='string')continue;
    console.log(john[i]);
}


for (i=0;i<john.length;i++){
    if (typeof john[i]!=='string')break;
    console.log(john[i]);
}

for (i=john.length-1;i>=0;i--){
    console.log(john[i]);
}
/***************************************************************************************************************************
 * ****************************************************************************************************************************
 * ******************************************************************************************************************************
 * 
 *//*
var tipc={
    bill:[124,100,268,180,42],
    tip:[],
    amt:[],
    cactip:function(){
        
        for(i=0;i<this.bill.length;i++){
            if (this.bill[i]<50) {
                p=0.2;
                }   
                else if(this.bill[i]>50&&this.bill[i]<200){
                p=0.15;
                }
                else if(this.bill[i]>200){
                    p=0.1;
                }
                this.tip[i]=p*this.bill[i];
                this.amt[i]=p*this.bill[i]+this.bill[i];
                
            
           
        }
    }
};
*/
/***************************************************************************************************************************************************
***************************************************************************************************************************************************
***************************************************************************************************************************************************/
/*var marktipc={
    bill:[77,75,110,45],
    tip:[],
    amt:[],
    cactip:function(){
        
        for(i=0;i<this.bill.length;i++){
            if (this.bill[i]<100) {
                p=0.2;
                }   
                else if(this.bill[i]>100&&this.bill[i]<300){
                p=0.1;
                }
                else if(this.bill[i]>300){
                    p=0.25;
                }
                this.tip[i]=p*this.bill[i];
                this.amt[i]=p*this.bill[i]+this.bill[i];
                
            
           
        }
    }
};

function avg(tip){
    var x=0;
    for(j=0;j<tip.length;j++){
        x+=tip[j];
        
    }
    
    return (x/tip.length);
}

tipc.cactip();
marktipc.cactip();
console.log(tipc,marktipc);
tipc.averge1=avg(tipc.tip);
marktipc.averge2=avg(marktipc.tip);
    
if(tipc.averge1!=marktipc.averge2)
tipc.averge1>marktipc.averge2?console.log('family 1 paid higher and paid= '+ tipc.averge1):console.log('family2 paid higher and paid '+ marktipc.averge2);

else{
    console.log('the tip average is same');
}
*/
/*******************************************************************************************************************************************************************************************************************
 * **********************************************************************************************************************************************************************************************************************
 * ***************************************************************************************************************************************************************************************************************************
 *Java Script Versions:
1996:livescript name changed to javascript to attract java developers.javascript and java 
are two totally different language.
1997:ES1(ECMA Script 1)
2009:ES5
2015:ES6
2016/2017/2018/2019:ES7/8/9/10
ES6/7/8:features can be used by transpilling and polyfilling(converting to ES5)  
 ************************************************************************************************************************************************************************************************************************************
 ****************************************************************************************************************************************************************************************************************************************
 ******************************************************************************************************************************************************************************************************************************************/
/* What Happens to our Code?
            |---------------------------------------------------------------------------------------|
            |                                  JAVASCRIPT ENGINE                                    |
            |                                                                                       |
            |              ABSTRACT                                                                 |
            |               MACHINE                                      MACHINE                    |
            |                TREE                                         CODE                      |
OUR CODE--->|  PARSER------------------> CONVERSION TO MACHINE CODE --------------->CODE RUNS       |
            |                                                                                       |
            |                                                                                       |
            |                                                                                       |
            |                                                                                       |
            |                                                                                       |
            |_______________________________________________________________________________________|

********************************************************************************************************************************************************************************************************************************************
************************************************************************************************************************************************************************************************************************************************
*************************************************************************************************************************************************************************************************************************************************
EXECUTION CONTEXT
ALL JAVASCRIPT CODE NEEDS TO RUN IN AN EXECUTION CONTEXT
EXECUTION CONTEXT CAN BE THOUGHT AS AN OBJECT FOR UNDERSTANDING
*EXECUTION CONTEXT IS LIKE A BOX OR CONTAINER WHICH STORES VARIABLES AND IN WHICH A PIECE OF CODE IS EVALUATED AND EXECUTED.


GLOBAL EXECUTION CONTEXT :*CODE THAT IS NOT INSIDE ANY FUNCTON,
                          *ASSCIATED WITH GLOBAL OBJECT
                          *IN THE BROWSER,THAT'S THE WINDOW OBJECT
                          *LASTNAME===WINDOW.LASTNAME//BOTH ARE SAME


*PROPERIES ARE VARIABLES ATTACHED TO OBJECTS*
***************************************************************************************************************************************************************************************************************************************************
*********************************************************************************************************************************************************************************************************************
**************************

EXECUTION CONTEXT OBJECT
1.VARIABLE OBJECT:FUNCTION ARGUMENTS IN A VARIABLE DECLARATION,FUNCTION DECLARATION
2.SCOPE CHAIN:CONTAINS CURRENT VARIABLE OBJECTS,VARIABLE OBJECTS OF ALL ITS PARENTS
3."This"VARIABLE:

WHEN A FUNCTION IS CALLED ,A NEW EXECUTION CONTEXT IS PUT ON TOP OF THE EXECUTION STACK,
AND THIS HAPPENS IN TWO PHASES:
1.CREATION PHASE:
        A) CREATION OF THE VARIABLE OBJECT(VO)
        B) CREATION OF THE SCOPE CHAIN
        C) DETERMINE VALUE OF THE "This" variable
2.EXECUTION PHASE:
        THE CODE OF THE FUNCTION THAT GENEREATED THE CURRENT EXECUTION CONTEXT IS 
        RAN LINE BY LINE, AND ALL THE VARIABLES ARE DEFINED.IF IT'S A GLOBAL CONTEXT THEN GLOBAL CODE 
        THAT IS EXECUTED.



THE VARIABLE OBJECT
1. THE ARGUMENT OBJECT IS CREATED, CONTAINING ALL THE ARGUMENTS THAT WERE PASSED 
   INTO THE FUNCTION.
2. CODE IS SCANNED FOR FUNCTION DECLARATION:FOR EACH FUNCTION, A PROPERTY IS CREATED----|
    IN THE VARIABLE OBJECT,POINTING TO THE FUNCTION.                                    |--- HOISTING
3. CODE IS SCANNED FOR VARIABLE DECLARATIONS: FOR EACH VARIABLE, A PROPERTY IS          |
    CREATED IN THE VARIABLE OBJECT AND SET TO UNDEFINED                          -------|


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    HOISTING
    */
   /*calculateAge(1996);
   function calculateAge(year){
       console.log(2019-year);
   }
  // retirement(1956);   finction expression does not work for hoisting
   var retirement=function(year){
       console.log(65-(2019-year));
   }
//variables
console.log(age);
var age=23;*/
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////
the 'this ' variable*/

/*console.log(this);
 
calculateAge(1985);
function calculateAge(year){
    console.log(2018-year);
    console.log(this);
}

var john = {
    name:'john',
    yearOfBirth: 1996,
    calculateAge:function(){
        console.log(this);
        console.log(2016-this.yearOfBirth);

       /* function innerfunction() {
            console.log(this);

        }
        innerfunction();*/

  /*  }

}
john.calculateAge();

var mike ={
    name:'Mike',
    yearOfBirth: 1997,

}

mike.calculateAge=john.calculateAge ; // method borrowing
mike.calculateAge();
*/
/*the DOCUMENT OBJECT MODEL(DOM)

THE DOM IS A STRUCTURED REPRESENTATION  OF AN HTML DOCUMENT THAT CAN BE USED TO CONNECT WEBPAGES TO SCRIPTS
OR A PROGRAMMING LANGUAGE SUCH AS JAVASCRIPT.
THE DOM IS A OBJECT ORIENTED REPRESENTATION SO FOR EACH OF HTML BOXES,THERE IS AN OBJECT IN THE DOM  THAT WE CAN ACESS 
AND INETRACT WITH RIGHT FROM OUR JAVASCRIPT CODE.
  
           ------------------->   
JAVASCRIPT                        DOM
           <-------------------
JAVASCRIPT METHODS ARE ALLOW US TO INTERACT AND MANIPULATE WHICH MEANS CHANGE , THE DOM AND THEREFORE
THE WEBPAGE  AND SINCE METHODS ARE MENTIONED THAT MEANS FUNCTIONS ATTACHED TO OBJECT AND THE OBJECT IS THE DOCUMENT OBJECT.
SO THIS IS THE OBJECT THAT GIVES US ACCESS TO THE DOM.

HTML WEBPAGE CONTENT IS STORED IN THE DOM,WHICH CAN THEN BE ACCESSED AND MANIPULATED BY A JAVASCRIPT.
*/






















