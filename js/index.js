let links = document.getElementsByTagName("a");

// because smaller than --links.length-- , the last link is not printed
for (let i = 0; i < links.length; i++) {
    console.log("this is link number " + i);
    
}


// *If you want the last link to be printed, you must:
// for (let i = 0; i <= links.length; i++) {
//     console.log("this is link number " + i);
// }

document.write("All links now looped");