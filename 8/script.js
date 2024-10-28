function historyAdd() {
    let stateObj = {
        foo: "bar",
    };
    window.history.pushState(stateObj, "page 2", "1.html");

}

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buttonModal").addEventListener("click", historyAdd);
});