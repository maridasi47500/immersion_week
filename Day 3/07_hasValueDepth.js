function hasValueDepth(hash, valeur){

  for (var key in hash) { 
    if (typeof hash[key] !== 'string') {
      var object = hash[key];
      for (var key2 in object) {
 	  hash[key2] = object[key2];
      }
      delete hash[key];
    }
  }

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
