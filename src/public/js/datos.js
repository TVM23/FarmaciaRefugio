var Fbcookie = getCookie('FBLogin')
var Gocookie = getCookie('GoLogin')
var nombre = document.querySelector('.nom');
var email = document.querySelector('.email');
var forma = document.querySelector('.forma');

console.log(Fbcookie.email)
console.log(Fbcookie.name)

function setCookie(cname, cvalue, exdays) {
    console.log(JSON.stringify(cvalue));
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
  console.log(document.cookie);
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return "";
  }

  nombre.textContent = Fbcookie.name;

  function loginFacebook(){
    nombre.textContent = Fbcookie.name;
    email.textContent = Fbcookie.email;
    forma.textContent = 'haciendo uso de una cuenta existente en Facebook'
  }

  function loginGoogle(){
    nombre.textContent = Gocookie.name;
    email.textContent = Gocookie.email;
    forma.textContent = 'haciendo uso de una cuenta de Google'
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    if(Fbcookie==='')
        if(Gocookie==='')
            console.log('se agarro google')
        else   
            loginGoogle();
    else
        loginFacebook();
  });