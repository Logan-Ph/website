const fs = require('fs');

fs.mkdirSync('src');
fs.mkdirSync("src/myapp");
fs.mkdirSync("src/test");

fs.writeFileSync("src/myapp/_init_.py", "hi");
fs.writeFileSync("src/myapp/utils.py", "hi");
fs.writeFileSync("src/test/_init_.py" , "hi");
fs.writeFileSync("src/test/test_division.py", "hi");