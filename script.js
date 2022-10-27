"use strict";

let year = document.querySelector(".year");
let getDate = new Date();
let yearNow = getDate.getFullYear();
year.textContent = yearNow;
