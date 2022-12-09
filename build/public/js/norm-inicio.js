"use strict";

function setCookie(cname, cvalue, exdays) {
  console.log(JSON.stringify(cvalue));
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
}
function getCookie(cname) {
  console.log(document.cookie);
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return JSON.parse(c.substring(name.length, c.length));
    }
  }
  return "";
}
var Normcookie = getCookie('NrmLogin');
var password = document.querySelector('.contraseña');
var mail = document.querySelector('.mail');
var mail = [{
  correo: mail.value
}];
setCookie('NrmLogin', mail, 2);
console.log(mail);