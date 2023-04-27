var figlet = require("figlet");
let arg = process.argv.slice(2);


figlet(arg[0], function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});