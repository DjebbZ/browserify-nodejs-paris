var url = require("url");

document.getElementById("url").innerHTML = url.format({
    protocol: "http",
    host: "www.nodejsparis.fr",
    pathname: "talks"
});

document.getElementById("filename").innerHTML = __filename;