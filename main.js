// Toogle menu
const nav = document.querySelector("nav");

nav.addEventListener("click", () => {
    nav.classList.toggle("nav_active");
});

// Tabs
const tabcontent = document.querySelectorAll(".tabcontent");
const tablinks = document.querySelectorAll(".tablinks");
function openTab(e, tab) {
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    const active = document.getElementById(tab);
    active.style.display = "flex";
    e.target.className += " active";
}

// Accordian
const q1 = document.querySelector(".one");
const q2 = document.querySelector(".two");
const q3 = document.querySelector(".three");
const q4 = document.querySelector(".four");

q1.addEventListener("click", openPanel);
q2.addEventListener("click", openPanel);
q3.addEventListener("click", openPanel);
q4.addEventListener("click", openPanel);

function openPanel() {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.maxHeight = 0;
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

// Email validation
const error = document.querySelector(".input");
const input = document.querySelector("input");

var pattern =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;

function validation() {
    if (input.value.match(pattern) || !input.value) {
        error.classList.remove("error");
    } else {
        error.classList.remove("error");
        error.classList.add("error");
    }
}
