var globalVar       = require("./globalVar"),
    quaranteDeux    = require("./modulePattern"),
    dumbAmd         = require("./dumb-amd");

document.getElementById("global").innerHTML = globalVar;

document.getElementById("module").innerHTML = quaranteDeux;

dumbAmd.setX("Je suis un module AMD");

document.getElementById("amd").innerHTML = dumbAmd.getX();