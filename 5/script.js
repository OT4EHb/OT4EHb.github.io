function click1(event) {
    event.preventDefault();
    let c = document.getElementById("count");
    let p = document.getElementById("price");
    let r = document.getElementById("cost");
    if (c.value.match(/^\d+$/) == null) {
        r.innerHTML = "Некорректно";
    }
    else {
        r.innerHTML = "Итоговая стоимость: " + (c.value * p.textContent.match(/\d+/)) + " руб";
    }
}

function selectFunction() {
    let r = document.getElementById("cost");
    let p = document.getElementById("price");
    let s = document.getElementById("sel");
    let img = document.getElementById("img");
    r.textContent = "";
    p.textContent = "Текущая цена: ";
    img.src = "../"
    switch (s.value) {
        case "v1":
            p.textContent += 2999;
            img.src += "image.jpg";
            break;
        case "v2":
            p.textContent += 379;
            img.src += "pelmeni.jpg";
            break;
        case "v3":
            p.textContent += 45;
            img.src += "doshirak.png"
            break;
        case "v4":
            p.textContent += 88;
            img.src += "makaroshki.png";
            break;
        case "v5":
            p.textContent += 1199;
            img.src += "Final.jpg";
            break;
        default:
            break;
    }
    p.textContent += " руб";
}
window.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("sel").addEventListener("change", selectFunction);
    document.getElementById("but").addEventListener("click", click1);
    selectFunction();
})