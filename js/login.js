





document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();

    function log() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "mirtita" && password === "123") {
            window.location.href = "paciente.html?usuario=" + encodeURIComponent(username);
        } else if (username === "house" && password === "123") {
            window.location.href = "doctor.html?usuario=" + encodeURIComponent(username);
        } else {
            alert("Usuario Incorrecto");
        }
    }

    log(); // Llama a la función log al momento de enviar el formulario
});



var urlParams = new URLSearchParams(window.location.search)
var username = urlParams.get(username)


document.addEventListener('DOMContentLoaded', function() {
    if(username) {
        document.getElementById("bienvenida").textContent = 'Bienvenido/a, ' + username + '.'
    }
    else {
        document.getElementById("bienvenida").textContent = 'Usuario no especificado!'
    }
})

