function hasValue(hash, value){
return Object.values(hash).includes(value);
}

//test
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "bonjour"));
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "hello"));
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "tasty"));


