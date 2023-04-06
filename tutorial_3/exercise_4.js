e = prompt();
hours = Math.floor(e/3600);
remain = e%3600;
minutes = Math.floor(remain /60);
second = remain - minutes*60;
console.log(`${hours} : ${minutes} : ${second}`)