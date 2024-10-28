function historyAdd() {
    let stateObj = {
        foo: "bar",
    };
    window.history.pushState(stateObj, "page 2", "1.html");

}

function historyBack() {
    window.history.back();
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buttonModal").addEventListener("click", historyAdd);
    document.getElementById("buttonClose").addEventListener("click", historyBack);
});