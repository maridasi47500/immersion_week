window.onload = function(){
['blue','red','green','black','yellow'].forEach(function(colorname){
document.getElementById(colorname).addEventListener('mouseover',function(){
document.getElementById('square').style.backgroundColor = colorname;
});
});
};
