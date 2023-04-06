function numberofRabbit(n){
    let a = 1;
    let b = 1;
    for (let i = 0; i<n-2; i++) {
        [a,b] = [b,a+b];
    }
    console.log(b);
}

n = prompt("Enter the number")
numberofRabbit(n)