var screenfull = require("screenfull");

document.getElementById("screenfull").addEventListener("click", function() {
    if (screenfull.enabled) {
        screenfull.toggle();
    }
});