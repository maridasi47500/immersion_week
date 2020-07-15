function countOccurrences(text){
let occ = {};
let sent = text.split(' '); 
sent.forEach(function(x){
let occs =sent.filter(y=>y.includes(x)).length;
if (!occ[occs]){
occ[occs] = [];

};
if (!occ[occs].includes(x)) {
occ[occs].push(x);
};
});
return occ;
};

//tests
console.log(countOccurrences("hello is it you hello hello")); //{ '1': [ 'is', 'it', 'you' ], '3': [ 'hello' ] }
console.log(countOccurrences("hey mama hey mama"));
