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
var googleUser = {};
var startApp = function startApp() {
  gapi.load('auth2', function () {
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: '1065940974938-ipl47pjcm5792t293itjlt36jp2la2p9.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin'
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });

    attachSignin(document.getElementById('signin'));
  });
};
function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(element, {}, function (googleUser) {
    document.getElementById('name').innerText = "Signed in: " + googleUser.getBasicProfile().getName();
  }, function (error) {
    alert(JSON.stringify(error, undefined, 2));
  });
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

var googleButton = document.getElementById('google-button');
/* var container = document.getElementsByClassName('container')[0];
var img = document.getElementsByClassName('img')[0];
var getName = document.getElementsByClassName('name')[0];
var id = document.getElementsByClassName('id')[0];
var email = document.getElementsByClassName('email')[0]; */

// function to get response
function handleCredentialResponse(response) {
  var responsePayload = decodeJwtResponse(response.credential);
  /* img.src = responsePayload.picture;
  getName.innerHTML = responsePayload.name;
  id.innerHTML = responsePayload.sub;
  email.innerHTML = responsePayload.email;
  container.style.display = 'inline-block';
  googleButton.style.display = 'none' */
  setCookie('GoLogin', responsePayload, 2);
}
window.onload = function () {
  google.accounts.id.initialize({
    // replace your client id below
    client_id: "1065940974938-ipl47pjcm5792t293itjlt36jp2la2p9.apps.googleusercontent.com",
    callback: handleCredentialResponse
    /* auto_select: true,
    auto: true */
  });

  google.accounts.id.renderButton(document.getElementById("google-button"), {
    scope: 'profile email',
    theme: "filled_blue",
    size: "medium",
    width: '250'
  } // customization attributes
  );
  // also display the One Tap dialog on right side
  // important for auto login
  /* google.accounts.id.prompt(); */
};

// function to decode the response.credential
function decodeJwtResponse(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}
function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error);
}
function signOut() {
  google.accounts.id.disableAutoSelect();
  // do anything on logout
  location.reload();
}
var Gocookie = getCookie('GoLogin');
console.log(Gocookie.email);