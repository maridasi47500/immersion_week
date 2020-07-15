function hasValueDepth(hash, valeur){
let newhash, k = hash;
while (Object.values(k).length > 0){
  //
  newhash = Object.entries(hash);
  
  newhash.forEach((z)=>{
    //console.log(z[1],typeof z[1] !=='string');
    if (typeof z[1] !=='string'){
      Object.entries(z[1]).forEach((b)=>{
        if (!hash[b[0]]){
        hash[b[0]] = b[1];
        
        
        };
      
      });
      console.log(hash);
      //delete hash[z[0]];
    };
    delete k[z[0]];
  
  });


};
//console.log(Object.values(hash));
if (Object.values(hash).includes(valeur)){
return true;
}else {
return false;
};
};
var obj = {
    "hello": "world",
    "goDeeper": {
        1961: "Barack Obama",
        1964: "Michelle Obama",
        1935: "Elvis Presley",
        1984: {
            "author": "George Orwell",
            "genre": "dystopia",
        }
    }
};
console.log(hasValueDepth(obj, "hello"));
console.log(hasValueDepth(obj, "Elvis Presley"));
console.log(hasValueDepth(obj, "author"));
console.log(hasValueDepth(obj, "dystopia"));
