"use strict";

const adminLogin = "admin";
const adminPassword = "mango";

const login = prompt("Введите ваш логин:");
const validLogin = login === adminLogin;

const invalidInput = "Доступ запрещен!"
const cancel = "Отменено пользователем!"
const welcome = "Добро пожаловать!"

if (!login) {
  alert(cancel);
} else if (!validLogin) {
  alert(invalidInput);
}

if (validLogin) {
  const password = prompt("Введите ваш пароль:");
  const validPassword = password === adminPassword;

  if (validPassword) {
    alert(welcome);
  }
  if (!password) {
    alert(cancel);
  } else if (!validPassword) alert(invalidInput);
}
