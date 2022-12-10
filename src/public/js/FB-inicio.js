
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
var Fbcookie = getCookie('FBLogin')
console.log(Fbcookie.email);
console.log(Fbcookie);
console.log(Fbcookie != '');
var person = { userID: "", name: "", accessToken: "", picture: "", email: ""};
 
 function logIn(){
      FB.login(function (response) {
        console.log(response);
        if(response.status == "connected"){
          person.userID = response.authResponse.userID;
          person.accessToken = response.authResponse.accessToken;
          FB.api('/me?fields=id,name,email,picture.type(large)', function(userData){
            console.log(userData);
            person.name = userData.name;
            person.email = userData.email;
            person.picture = userData.picture.data.url;
            setCookie('FBLogin',userData,2);
            /* $.ajax({
              url: 'inicio-sesion.php',
              method: 'POST',
              data: person,
              dataType: 'text',
              success: function(serverResponse){
                if(serverResponse == "success")
                  window.location = "index.html"
              }
            }); */
          })
        }
      }, {scope: 'public_profile, email'})
    }

window.fbAsyncInit = function() {
  FB.init({
    appId      : '5224369614331652',
    status     : true,
    cookie     : true,
    xfbml      : true,
    version    : 'v15.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


function closeLogin(){
    if(Fbcookie != ''){
        window.location = '/'
    }
}
