var ref = new Firebase("https://scorching-heat-6427.firebaseIO.com");
var authData = ref.getAuth();

if (authData) {
    $('.welcome').html('Welcome, ' + authData.uid);
} else {
    window.location = "login.html";
}