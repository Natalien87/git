// var database = [
//     {
//         username: "andre",
//         password: "supersecret"
//     }
   
// ];

// var newsFeed = [
//     {
//         username: "bobby",
//         timeline: "so tired from alll that learn"
//     },
//     {
//         username: "sally",
//         timeline: "javascript i soo cooll"
//     }
// ];

// var userNamePromt = prompt("what your username?");
// var passwordPromt = prompt("what your password");

// function signIn(user, pass) {
//     if (user === database[0].username 
//         && pass === database[0].password){
//             console.log(newsFeed);
//         }else{
//             alert("sorry, its wrong")
//         }
// };
// signIn(userNamePromt, passwordPromt);


// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("cliccckkkkk")
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


button.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
})
