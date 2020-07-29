function groupFamilies(listehash){
	let res = {};
	listehash.forEach(hash=>{
			if (!res[hash['surname']]) {
				res[hash['surname']] = [];
			};
			res[hash['surname']].push(hash['name']);
			
	});
	return res;
};

//test
console.log(groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}])); //{ Obama: [ 'Barack', 'Michelle' ] }
console.log(groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}, {"name": "Donald", "surname": "Trump"}]));
