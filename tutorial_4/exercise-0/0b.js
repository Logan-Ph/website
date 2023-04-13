let items = [
    { type: 'hat', points: 10 },
    { type: 'shoes', points: 20 },
    { type: 'hat', points: 5 },
    { type: 'scarf', points: 15 },
    { type: 'shoes', points: 10 }
];

var dict = [];

for (var i = 0; i< items.length ;i++ ){

    if (!dict[items[i].type]){
        dict[items[i].type] = 0;
    }
    
    dict[items[i].type]+= items[i].points;
}

console.log(dict);