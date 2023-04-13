let myTeam = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

let user_name = [];

myTeam.forEach(user =>{
    user_name.push(`${user.username}!`);
})

console.log(user_name);

let user_name_1 = myTeam.map(user => `${user.username}?`) ;
console.log(user_name_1);

// let team_red = [];

// for (let i =0; i<myTeam.length; i++){
//     if (myTeam[i].team === 'red'){
//         team_red.push(myTeam[i]);
//     }
// }

// console.log(team_red);

let team_red = myTeam.filter(user => user.team === "red");
console.log(team_red);

let point = myTeam.reduce((a,b)=>{
    return a + b.score;
},0)

console.log(point);