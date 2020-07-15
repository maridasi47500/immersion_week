function sortWords(list) {
let res = { odd: [], even: [] };
list.forEach(t=>{
l = t.length;
if (l != 0) {
  if (parseInt(l/2) === (l/2)) {
    res['even'].push(t);
  } else {
    res['odd'].push(t);
  };
};
});

return res;
};

//test
console.log(sortWords([]));
console.log(sortWords(["work", "hard", "mommy"]));
console.log(sortWords(["oh!", "ah!", "hi", "my"]));
