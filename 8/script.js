function historyAdd() {
    let stateObj = {
        modal: "true"
    };
    window.history.pushState(stateObj, "", "#exampleModal");
}

function historyBack() {
    window.history.back();
}

function historyChange() {
    const elemModal = document.querySelector("#exampleModal");
    if (window.location.href.match(/#/) !== null) {
        new bootstrap.Modal(elemModal).show();
    } else {
        bootstrap.Modal.getInstance(elemModal).hide();
    }
}

function saveValue() {
    window.localStorage.setItem(this.name, this.value);
}

function saveForm() {
    window.localStorage.clear();
}

window.addEventListener("DOMContentLoaded", function () {
    let butM = document.getElementById("buttonModal");
    butM.addEventListener("click", historyAdd);
    let butC = document.getElementById("buttonClose");
    butC.addEventListener("click", historyBack);
    window.addEventListener("popstate", historyChange);
    let inputs = document.querySelectorAll(".form-control:not(.form-label)");
    inputs.forEach(function (i) {
        i.addEventListener("input", saveValue);
    });
    let lStor = window.localStorage;
    Object.keys(lStor).forEach(function (i) {
        document.getElementsByName(i)[0].value = lStor.getItem(i);
    });
    document.getElementById("buttonSave").addEventListener("click", saveForm);
});