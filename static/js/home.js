var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
var authData = ref.getAuth();

if (authData) {
    $('.welcome').html('Welcome, ' + authData.uid);
} else {
    window.location = "login.html";
}