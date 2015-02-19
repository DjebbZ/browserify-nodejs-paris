var fs = require('fs');

document.getElementById("code").innerHTML =
    fs.readFileSync(__dirname + "/index.js", "utf8");
