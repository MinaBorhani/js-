// let links = document.getElementsByTagName("a");

// because smaller than --links.length-- , the last link is not printed
// for (let i = 0; i < links.length; i++) {
    // console.log("this is link number " + i);
    
// }


// *If you want the last link to be printed, you must:
// for (let i = 0; i <= links.length; i++) {
//     console.log("this is link number " + i);
// }

// document.write("All links now looped");

// for (let j = 0; j < links.length; j++) {
//     links[j].className = "link-" + j;
// }


// -- function

// function avrageNum (a,b) {
//     let avg = (a+b)/2;
//     console.log(avg);
//     return avg;
// }
// let resulte= avrageNum(10 , 20);
// console.log("this average is :" + resulte);


// --Object

// let myCar = {
//     MaxSpeed : 150 , 
//     driver: "Mina" , 
//     drive : function (speed , time) {
//         console.log(speed * time);
//     },
//     logDriver : function(){
//         console.log("driver name is " + this.driver);
//     }
// };

// console.log(myCar.MaxSpeed);
// myCar.drive(10 , 5);
// myCar.logDriver()


// --Constructor Functions

// let myCar = function (MaxSpeed ,  driver){
//     this.MaxSpeed = MaxSpeed;
//     this.driver = driver;
//     this.drive = function (speed , time){
//         console.log(speed * time);
//     };
//     this.logDriver = function(){
//         console.log("my driver is " + this.driver);
//     };
// };


// let car1 = new myCar( 30 , "Roze");
// let car2 = new myCar( 10 , "nil nil");
// let car3 = new myCar( 40 , "fafa");
// let car4 = new myCar( 20 , "mahi");


// car1.drive(60 , 60);
// car2.logDriver();
// console.log(car3.MaxSpeed);
// console.log(car4.driver);


// --The Date Object

// let myDate = new Date();
// let myPastDate = new Date(2015, 10, 9, 18 , 34, 56);
// let myFutureDate = new Date(2121, 21, 21, 21 , 21, 21);
// console.log(myDate);
// console.log(myPastDate);
// console.log(myFutureDate);

// ------------------********------------------------
// --new project

// let content= document.getElementById("content");
// let button = document.getElementById("show-more");

// button.onclick = function(){
//     if(content.className == "open"){
//         content.className = "";
//         button.innerHTML = "SHOE MORE";
//     }else{
//         content.className = "open";
//         button.innerHTML = "SHOW LESS";
//     }
// }



// ------------------********------------------------
// --new project Timers

// let myMessage =  document.getElementById("message");

// function showMessage (){
//     myMessage.className = "show";
// }

// setTimeout(showMessage , 3000);


// ------------------********------------------------
// --new project Timers 2

// let colorChenger = document.getElementById("colors_changer");
// let colors = ["red" , "green"  , "pink" , "blue" , "yellow"];
// let counter = 0;

// function changeColor(){

//     if(counter >= colors.length){
//         counter = 0;
//     }
//     colorChenger.style.background = colors[counter];
//     counter++;
// }

// let myTime = setInterval(changeColor , 3000);

// colorChenger.onclick= function colorStop (){
//     clearInterval(myTime);
//     colorChenger.innerHTML = "TimerStoped";
// }



// ------------------********------------------------
// --Accessing Form Elements

//     myform.name.onfocus = function(){
//          myform.name.style.border = "4px solid pink";
//     };

//     myform.name.onblur = function(){
//         myform.name.style.border = "none";
//    };



// ------------------********------------------------
// --VERY Simple Form Validation

let myForms = document.getElementById("my-form");
let message = document.getElementById("message");

        myForms.onsubmit = function(){
            if(myForms.name.value == ""){
                message.innerHTML = "- Plese enter a name -";
                // return false;
            } else{
                message.innerHTML = "";
                // return true
            }
        };