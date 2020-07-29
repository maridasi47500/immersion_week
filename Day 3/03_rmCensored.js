function rmCensored(hash){
 Object.entries(hash).forEach((k,range,object)=>{
  if (k[0].includes('*')||k[1].includes('*')){
    //console.log(true);
    delete hash[k[0]];
    
  };

});
};

//test
var swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"};
rmCensored(swearWords);
console.log(swearWords);

var veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"};
rmCensored(veggies);
console.log(veggies);
