var Toto = require("./es6"),
    toto = new Toto([1,2,3]);

document.getElementById("es6").innerHTML = toto.double();