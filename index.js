"use strict";

const adminLogin = "admin";
const adminPassword = "mango";

let login = prompt("Введите ваш логин:");
let cancel = login === null;

let validLogin = login === adminLogin;

if (cancel) {
  alert("Отменено пользователем!");
} else if (validLogin === false) {
  alert("Доступ запрещен!");
}

if (validLogin) {
  let password = prompt("Введите ваш пароль:");
  let validPassword = password === adminPassword;
  let cancel = password === null;

  if (validPassword) {
    alert("Добро пожаловать!");
  }
  if (cancel) {
    alert("Отменено пользователем!");
  } else if (validPassword === false) alert("Доступ запрещен!");
}
