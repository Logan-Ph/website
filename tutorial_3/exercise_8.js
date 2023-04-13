house = 1000;
player = 100;
console.log(`The house has $${house}`);
console.log(`The player has $${player}`);
console.log("Try your luck to win all the money of the house");
function game(house,player) {
    let continue_game = true;
    let i = 0;
    while (continue_game && player>0 && house >0) {
        console.log(`Round ${++i}:`);
        let die1 = Math.ceil(Math.random() *6);
        let die2 = Math.ceil(Math.random() *6);
        let die3 = Math.ceil(Math.random() *6);
        let dice_sum = die1 + die2 + die3;
        console.log("How much do you want to bet");
        let user_input = prompt("How much do you want to bet");
        while (isNaN(user_input) || user_input === "") {
            user_input = prompt("How much do you want to bet");
          };

        user_input = Number(user_input);
        while (user_input > player) {
            console.log("The money you bet is larger than the money you have. Try again!");
            user_input = prompt("How much do you want to bet");

            while (isNaN(user_input) || user_input === "") {
            user_input = prompt("How much do you want to bet");
            };

            user_input = Number(user_input);
        }

        console.log(`You have bet $${user_input}!`);
        console.log("Do you want to bet big or small? (big/small)");
        bet = prompt("Do you want to bet big or small? (big/small)");

        while (bet !== "big" && bet !== "small") {
            console.log("Wrong input! Try again!")
            bet = prompt("Do you want to bet big or small? (big/small)");
        };

        console.log(`The dices are: ${die1} ${die2} ${die3}`);
        console.log(`The sum of 3 dices is ${die1 + die2 + die3}`);

        if (die1 === die2 === die3){
            console.log("3 dice are equal !");
            player -= user_input;
            house += user_input;
            console.log(`You lost $${user_input}!`);
            console.log(`The house has $${house}`);
            console.log(`You have $${player}`);
        }
        else if (4<=dice_sum<=10 && bet === 'small') {
            console.log(`You won $${user_input}!`);
            player += user_input;
            house -= user_input;
            console.log(`The house has $${house}`);
            console.log(`You have $${player}`);
            
        }else if (11<=dice_sum<=17 && bet === 'big'){
            console.log(`You won $${user_input}!`);
            player += user_input;
            house -= user_input;
            console.log(`The house has $${house}`);
            console.log(`You have $${player}`);
        }else{
            console.log(`You lost $${user_input}!`);
            player -= user_input;
            house += user_input;
            console.log(`The house has $${house}`);
            console.log(`You have $${player}`);
        }

        do {
            continue_game = prompt("Do you still want to continue to play?(true/false)");
        } while (continue_game !== "true" && continue_game !== "false");
          
        continue_game = Boolean(continue_game);

        console.log(continue_game)
        
        if (!(continue_game)){
            break;
        }
    }
    
    if (player <= 0) {
        console.log('You are out of money! Bye!');
    }
    else if (house <= 0) {
        console.log('You won! The house has lost all the money. Congratulations!')
    }
}

game(house,player)
