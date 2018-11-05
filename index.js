"use strict";

const adminLogin = "admin";
const adminPassword = "mango";

const login = prompt("Введите ваш логин:");

const invalidInput = "Доступ запрещен!";
const cancel = "Отменено пользователем!";
const welcome = "Добро пожаловать!";

if (login === adminLogin) {
  const password = prompt("Введите ваш пароль:");

  if (password === adminPassword) {
    alert(welcome);
  }else if(password === null)
  alert(cancel);
  else {
    alert(invalidInput);
  }
}else if(login === null){
  alert(cancel)
}
else{
  alert(invalidInput);
}