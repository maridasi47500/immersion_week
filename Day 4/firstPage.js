window.onload = function(){
document.title = "My first (dynamic) webpage";
let h2=document.getElementsByTagName('h2');
h2[0].addEventListener("click",function(){
alert("The Beatles (January 13, 1969)")
},false);
h2[1].addEventListener("click",function(){
alert("Carly Rae Jepsen (March 1, 2012)");
},false);
};
