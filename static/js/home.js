var ref = new Firebase("https://scorching-heat-6427.firebaseIO.com");
var authData = ref.getAuth();

if (authData) {
        console.log('authenticated');
} else {
    window.location = "login.html";
}