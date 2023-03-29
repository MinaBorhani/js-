let links = document.getElementsByTagName("a");

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

let myCar = {
    MaxSpeed : 150 , 
    driver: "Mina" , 
    drive : function (speed , time) {
        console.log(speed * time);
    },
    logDriver : function(){
        console.log("driver name is " + this.driver);
    }
};

console.log(myCar.MaxSpeed);
myCar.drive(10 , 5);
myCar.logDriver()