const priceTov = {
    "Б/У Лопаты": "1199",
    "Доширак": "45",
    "Макароны": "88",
    "Пельмени": "379",
    "Цветы": "2999"
};

const uslugi = {
    "Б/У ПК": ["none", "none", 20000],
    "ПК с ОС": ["block", "none", 30000, 1200, 1500, 1100, 800],
    "ПК с софтом": ["none", "block", 40000, 2000, 1500, 500]
};

let selectUslugi = [];

function isDigit(str) {
    return str.match(/^\d+$/) !== null;
}

function click1(event) {
    event.preventDefault();
    let c = document.getElementById("count");
    let p = document.getElementById("price");
    let r = document.getElementById("cost");
    if (isDigit(c.value)) {
        r.innerHTML = "Итоговая стоимость: " + (c.value * p.textContent.match(/\d+/)) + " руб";
    } else {
        r.innerHTML = "Некорректно";
    }
}

function selectFunction() {
    let r = document.getElementById("cost");
    let p = document.getElementById("price");
    let s = document.getElementById("sel").querySelector("option:checked");
    r.textContent = "";
    p.textContent = "Текущая цена: " + priceTov[s.textContent] + " руб";
}

function UpdateCost() {
    let rad = document.getElementById("uslugi").querySelector("input:checked");
    let arr = uslugi[rad.parentElement.textContent];
    let costEl = document.getElementById("costU");
    let count = document.getElementById("countU").value;
    if (!isDigit(count)) {
        costEl.innerHTML = "Введите натуральное число";
        return;
    }
    let cost = arr[2];
    selectUslugi.forEach(function (index) {
        cost += arr[index];
    });
    cost *= count;
    costEl.innerHTML = "Итог: " + cost + " руб";
}

function radioClick() {
    let rad = document.getElementById("uslugi").querySelector("input:checked");
    let arr = uslugi[rad.parentElement.textContent];
    document.getElementById("OS").style.display = arr[0];
    document.getElementById("Soft").style.display = arr[1];
    if (arr[0] === "block") {
        new OSChange();
    } else if (arr[1] === "block") {
        new SoftChange();
    } else {
        selectUslugi = [];
    }
    new UpdateCost();
}

function OSChange() {
    let os = document.getElementById("OS").querySelectorAll("option");
    let index;
    for (index = 0; index < os.length; index += 1) {
        if (os[index].selected) {
            selectUslugi = [3 + index];
            break;
        }
    }
    new UpdateCost();
}

function SoftChange() {
    let soft = document.getElementById("Soft").querySelectorAll("input");
    selectUslugi = [];
    let index;
    for (index = 0; index < soft.length; index += 1) {
        if (soft[index].checked) {
            selectUslugi.push(3 + index);
        }
    }
    new UpdateCost();
}

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sel").addEventListener("change", selectFunction);
    document.getElementById("but").addEventListener("click", click1);
    selectFunction();
    document.getElementById("uslugi").addEventListener("click", radioClick);
    radioClick();
    document.getElementById("countU").addEventListener("input", UpdateCost);
    document.getElementById("OS").addEventListener("change", OSChange);
    document.getElementById("Soft").addEventListener("change", SoftChange);
});