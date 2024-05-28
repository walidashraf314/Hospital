// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const button = document.getElementById("button_form");
const button_Close = document.getElementById("btn-close");
const exampleModal = document.getElementById('exampleModal')
const Name = document.getElementById('name')
const Dates = document.getElementById('date')
const Time = document.getElementById('time')


button.addEventListener("click", (e) => {
    if (Name.value && Dates.value && Time.value) {
        e.preventDefault();
    exampleModal.style.display = "block";
    exampleModal.style.opacity = "1";
    }
})

button_Close.addEventListener("click", (e) => {
    e.preventDefault();
    exampleModal.style.display = "none";
    exampleModal.style.opacity = "0";
})
