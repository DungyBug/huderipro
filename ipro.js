let ipro = document.getElementById("ipro");
let internet = document.getElementById("internet");
let statistics = document.getElementById("statistics");
let lessons = document.getElementById("lessons");
let load = document.getElementById("load");
let content = document.getElementById("content");
let ctx, canvas, stat, oldWidth, oldHeight, lastUrl;

ipro.onclick = async () => {
    ipro.className = "selected tdh";
    internet.className = "tdh";
    statistics.className = "tdh";
    lessons.className = "tdh";
    load.style.width = "10%";
    let res = await fetch("http://192.168.0.21/ipro");
    let text = await res.text();
    load.style.width = "50%";
    content.innerHTML = text;
    ipro_j();
    lastUrl = true;
}

internet.onclick = async () => {
    ipro.className = "tdh";
    internet.className = "selected tdh";
    statistics.className = "tdh";
    lessons.className = "tdh";
    load.style.width = "10%";
    let res = await fetch("http://192.168.0.21/internet");
    let text = await res.text();
    load.style.width = "50%";
    content.innerHTML = text;
    lastUrl = true;
}

statistics.onclick = async () => {
    ipro.className = "tdh";
    internet.className = "tdh";
    statistics.className = "selected tdh";
    lessons.className = "tdh";
    load.style.width = "10%";
    let res = await fetch("http://192.168.0.21/statistics");
    let text = await res.text();
    load.style.width = "50%";
    content.innerHTML = text;
    statistics_j();
}

lessons.onclick = async () => {
    ipro.className = "tdh";
    internet.className = "tdh";
    statistics.className = "tdh";
    lessons.className = "selected tdh";
    load.style.width = "10%";
    let res = await fetch("http://192.168.0.21/lessons");
    let text = await res.text();
    load.style.width = "50%";
    lessons_j();
    content.innerHTML = text;
    lastUrl = true;
}

async function ipro_j() {
    let raiting = document.getElementById("raiting");
    let what = document.getElementById("what");
    load.style.width = "100%";
    setTimeout(() => {
        load.style.width = "0";
    }, 4000);
    let res = await fetch("http://192.168.0.21/raiting");
    let r = await res.text();
    raiting.innerHTML = `<h1 style="color:white">${r}<h1>`;
    switch(r) {
        case '0': {
            raiting.style.background = "rgb(0, 50, 255)";
            what.innerHTML = "Оценки пока нет";
            break;
        };
        case '1': {
            raiting.style.background = "rgb(255, 0, 0)";
            what.innerHTML = "Отвратительно";
            break;
        };
        case '2': {
            raiting.style.background = "rgb(255, 60, 0)";
            what.innerHTML = "Очень плохо";
            break;
        };
        case '3': {
            raiting.style.background = "rgb(255, 150, 0)";
            what.innerHTML = "Плохо";
            break;
        };
        case '4': {
            raiting.style.background = "rgb(255, 200, 0)";
            what.innerHTML = "Приемлемо";
            break;
        };
        case '5': {
            raiting.style.background = "rgb(255, 255, 0)";
            what.innerHTML = "Средне";
            break;
        };
        case '6': {
            raiting.style.background = "rgb(200, 255, 0)";
            what.innerHTML = "Нормально";
            break;
        };
        case '7': {
            raiting.style.background = "rgb(150, 255, 0)";
            what.innerHTML = "Хорошо";
            break;
        };
        case '8': {
            raiting.style.background = "rgb(100, 255, 0)";
            what.innerHTML = "Очень хорошо";
            break;
        };
        case '9': {
            raiting.style.background = "rgb(50, 255, 0)";
            what.innerHTML = "Замечательно";
            break;
        };
        case "10": {
            raiting.style.background = "rgb(0, 255, 100)";
            what.innerHTML = "Идеально";
            break;
        };
    }
}

async function ipro_f() {
    ipro.className = "selected tdh";
    internet.className = "tdh";
    statistics.className = "tdh";
    lessons.className = "tdh";
    load.style.width = "10%";
    let res = await fetch("http://192.168.0.21/ipro");
    let text = await res.text();
    load.style.width = "50%";
    content.innerHTML = text;
    ipro_j();
}

function lessons_j() {
    load.style.width = "100%";
    setTimeout(() => {
        load.style.width = "0";
    }, 4000);
}

function lessons_f() {
    lessons_j();
}

function internet_f() {
    load.style.width = "100%";
    setTimeout(() => {
        load.style.width = "0";
    }, 4000);
}

async function statistics_j() {
    load.style.width = "100%";
    if(!stat) {
        let res = await fetch("http://192.168.0.21/raitings");
        stat = await res.text();
        stat = JSON.parse(stat);
    }
    statistics_loop();
    setTimeout(() => {
        load.style.width = "0";
    }, 4000);
}

async function statistics_loop() {
    if((oldWidth !== window.innerWidth || oldHeight !== window.innerHeight || !canvas || lastUrl) && window.location.href === "http://192.168.0.21/#statistics") {
        canvas = document.getElementById("ctx");
        ctx = canvas.getContext("2d");
        canvas.width = stat.length * 50 + 160;
        oldWidth = window.innerWidth;
        oldHeight = window.innerHeight;
        lastUrl = false;
    }
    if(window.innerWidth >= window.screen.width * 0.75 && window.innerHeight >= window.screen.height * 0.75) {
        canvas.style.width = ((stat.length * 5 + 4) * (window.innerWidth / 1360)) + "px";
        canvas.style.height = ((window.innerHeight / 768) * 300) + "px";
    }
    ctx.fillStyle = "#fafafa";
    ctx.fillRect(0, 0, stat.length * 50 + 160, 3000);
    let lastPos = stat[stat.length - 2];
    let x = stat.length * 50 + 80;
    let lastDay = 0;
    let grad = ctx.createLinearGradient(x, 0, x, 3000);
    grad.addColorStop(1, "rgb(0, 50, 255)");
    grad.addColorStop(0.9, "rgb(255, 0, 0)");
    grad.addColorStop(0.8, "rgb(255, 60, 0)");
    grad.addColorStop(0.7, "rgb(255, 150, 0)");
    grad.addColorStop(0.6, "rgb(255, 200, 0)");
    grad.addColorStop(0.5, "rgb(255, 255, 0)");
    grad.addColorStop(0.4, "rgb(200, 255, 0)");
    grad.addColorStop(0.3, "rgb(150, 255, 0)");
    grad.addColorStop(0.2, "rgb(100, 255, 0)");
    grad.addColorStop(0.1, "rgb(50, 255, 0)");
    grad.addColorStop(0, "rgb(0, 255, 100)");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 20;
    for(let i = stat.length - 2; i > 0; i -= 2) {
        if(new Date(stat[i + 1]).getDay() !== lastDay) {
            lastDay = new Date(stat[i + 1]).getDay();
            ctx.fillStyle = "#dddddd";
            ctx.fillRect(x, 0, 20, 3000);
        }
        ctx.beginPath();
        ctx.moveTo(x, 3000 - lastPos * 300);
        x -= 100;
        ctx.lineTo(x, 3000 - stat[i] * 300);
        ctx.closePath();
        ctx.stroke();
        lastPos = stat[i];
    }
    if(window.location.href === "http://192.168.0.21/#statistics") {
        requestAnimationFrame(() => statistics_loop());
    }
}

async function statistics_f() {
    ipro.className = "tdh";
    internet.className = "tdh";
    statistics.className = "selected tdh";
    lessons.className = "tdh";
    load.style.width = "10%";
    let res = await fetch("http://192.168.0.21/statistics");
    let text = await res.text();
    load.style.width = "50%";
    content.innerHTML = text;
    statistics_j();
}

switch(window.location.href) {
    case "http://192.168.0.21/": {
        ipro_f();
        break;
    }
    case "http://192.168.0.21/#ipro": {
        ipro_f();
        break;
    }
    case "http://192.168.0.21/#statistics": {
        statistics_f();
        break;
    }
    case "http://192.168.0.21/#internet": {
        internet_f();
        break;
    }
    case "http://192.168.0.21/#lessons": {
        lessons_f();
        break;
    }
}