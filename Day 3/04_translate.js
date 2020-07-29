function translate(dict,sentence){
let translation = "";
let words = sentence.split(' ');
let alldict = Object.keys(dict).concat(Object.values(dict)); 
if (words.every(word=>alldict.includes(word))) {
translation = words.map(function(word){
  return dict[word];
}).join(' '); 
} else {
translation = 'Error: missing value';
};
return translation;
};

//test
console.log(translate({"je": "I", "suis": "am", "pere": "father", "ton": "your"}, "je suis ton pere"));
console.log(translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is cute"));
console.log(translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is fluffy"));
