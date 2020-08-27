const http = require("http");
const fs = require("fs");
let raiting = 0;
let raitings = [];
fs.readFile("raitings.json", (err, data) => {
    if(err) {
        console.error(err);
    } else {
        raitings = JSON.parse(data);
    }
});

http.createServer((req, res) => {
    if(req.url.match(/.png/)) {
        fs.readFile('.' + req.url, (err, data) => {
            if(err) {
                console.error(err);
            } else {
                res.writeHead(200, {"Content-Type": "image/png"});
                res.end(data);
            }
        });
    }
    let ip = req.headers["x-forwarded-for"];
    if (ip){
        let list = ip.split(',');
        ip = list[list.length-1];
    } else {
        ip = req.connection.remoteAddress;
    }
    ip = ip.replace(/.+:/, '');
    switch(req.url) {
        case "/": {
            fs.readFile("index.html", (err, data) => {
                if(err) {
                    console.error(err);
                } else {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(data);
                }
            });
            break;
        };
        case "/hudstyle": {
            fs.readFile("hudstyle.css", (err, data) => {
                if(err) {
                    console.error(err);
                } else {
                    res.writeHead(200, {"Content-Type": "text/css"});
                    res.end(data);
                }
            });
            break;
        };
        case "/montserrat": {
            fs.readFile("Montserrat-Medium.ttf", (err, data) => {
                if(err) {
                    console.error(err);
                } else {
                    res.writeHead(200, {"Content-Type": "font/ttf"});
                    res.end(data);
                }
            });
            break;
        };
        case "/bogdan": {
            fs.readFile("OcQq9eSeoss.jpg", (err, data) => {
                if(err) {
                    console.error(err);
                } else {
                    res.writeHead(200, {"Content-Type": "image/jpeg"});
                    res.end(data);
                }
            });
            break;
        };
        case "/favicon.ico": {
            fs.readFile("favicon.ico", (err, data) => {
                if(err) {
                    console.error(err);
                } else {
                    res.writeHead(200, {"Content-Type": "image/icon"});
                    res.end(data);
                }
            });
            break;
        };
        case "/ipro.js": {
            fs.readFile("ipro.js", (err, data) => {
                if(err) {
                    console.error(err);
                } else {
                    res.writeHead(200, {"Content-Type": "text/js"});
                    res.end(data);
                }
            });
            break;
        };
        case "/ipro": {
            fs.readFile("ipro.html", (err, data) => {
                if(err) {
                    console.error(err);
                    res.writeHead(500, {"Content-Type": "text/plain"});
                    res.end("Произошла ошибка.");
                } else {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(data);
                }
            });
            break;
        };
        case "/internet": {
            fs.readFile("internet.html", (err, data) => {
                if(err) {
                    console.error(err);
                    res.writeHead(500, {"Content-Type": "text/plain"});
                    res.end("Произошла ошибка.");
                } else {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(data);
                }
            });
            break;
        };
        case "/statistics": {
            fs.readFile("statistics.html", (err, data) => {
                if(err) {
                    console.error(err);
                    res.writeHead(500, {"Content-Type": "text/plain"});
                    res.end("Произошла ошибка.");
                } else {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(data);
                }
            });
            break;
        };
        case "/lessons": {
            fs.readFile("lessons.html", (err, data) => {
                if(err) {
                    console.error(err);
                    res.writeHead(500, {"Content-Type": "text/plain"});
                    res.end("Произошла ошибка.");
                } else {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(data);
                }
            });
            break;
        };
        case "/raiting": {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(raiting.toString());
            break;
        };
        case "/setraiting": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            fs.readFile("raiting.html", (err, data) => {
                if(err) {
                    console.error(err);
                    res.writeHead(500, {"Content-Type": "text/plain"});
                    res.end("Произошла ошибка.");
                } else {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(data);
                }
            });
            break;
        };
        case "/setr0": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 0;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr1": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 1;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr2": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 2;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr3": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 3;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr4": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 4;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr5": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 5;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr6": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 6;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr7": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 7;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr8": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 8;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr9": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 9;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/setr10": {
            if(ip !== "192.168.0.21") {
                fs.readFile("forbidden.html", (err, data) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Произошла ошибка.");
                    } else {
                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.end(data);
                    }
                });
            }
            raiting = 10;
            raitings[raitings.length] = raiting;
            raitings[raitings.length] = Date();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("ok");
            break;
        };
        case "/raitings": {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(JSON.stringify(raitings));
            break;
        };
        case "/save": {
            fs.writeFileSync("raitings.json", JSON.stringify(raitings), (err) => {
                if(err) {
                    console.error(err);
                    res.writeHead(500, {"Content-Type": "text/plain"});
                    res.end("Error: " + err);
                }
            });
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Saved");
            break;
        };
    }
}).listen(80);