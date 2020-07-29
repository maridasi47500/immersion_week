            function matrixGen(ligne, colonne) {
                let res = [];
                for (var maligne= 1;maligne<=ligne;maligne ++) {
                    let list = [];
                    for (var i = maligne; i < maligne+colonne; i++) {
                        list.push(i);
                    }
                    res.push(list);
                }
                return res;
            }
            
            //tests
            console.log(matrixGen(1,5));
            console.log(matrixGen(5,4));
            console.log(matrixGen(3,6));
            console.log(matrixGen(0,0));
