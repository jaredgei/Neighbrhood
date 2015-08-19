var ref = new Firebase("https://scorching-heat-6427.firebaseIO.com");

$(document).ready(function() {
    $('#submit').click(function() {
        var emailString = $('#email').val();
        var passwordString = $('#password').val();
        login(emailString, passwordString);
    });
});

function login(emailString, passwordString) {
    ref.authWithPassword({
      email    : emailString,
      password : passwordString
    }, function(error, authData) {
      if (error) {
        $('.errors').html('Invalid username or password');
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
}

function register(emailString, passwordString) {
    ref.createUser({
      email    : emailString,
      password : passwordString
    }, function(error, userData) {
      if (error) {
        console.log("Didn't work", error);
      } else {
        login(emailString, passwordString);
      }
    });
}