
// FORMULARIO DE CONTACTO


const formularioContacto = document.getElementById("formContacto");

// Solo se ejecuta si estamos en la página de contacto
if (formularioContacto) {

    formularioContacto.addEventListener("submit", function (e) {

        // Evita que la página se recargue
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const asunto = document.getElementById("asunto").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Revisamos si algún campo está vacío
        if (
            nombre === "" ||
            email === "" ||
            asunto === "" ||
            mensaje === ""
        ) {
            alert("Por favor completa todos los campos.");
            return;
        }

        alert("Mensaje enviado correctamente.");

    });
}




// FORMULARIO DE REGISTRO


const formRegistro = document.getElementById("formRegistro");

// Solo se ejecuta si existe el formulario de registro
if (formRegistro) {

    formRegistro.addEventListener("submit", function (e) {

        // Evita que la página se recargue
        e.preventDefault();

        const nombre = document.getElementById("nombreRegistro").value.trim();
        const email = document.getElementById("emailRegistro").value.trim();
        const fecha = document.getElementById("fechaNacimiento").value;
        const password = document.getElementById("passwordRegistro").value.trim();

        // Revisamos que ningún campo esté vacío
        if (
            nombre === "" ||
            email === "" ||
            fecha === "" ||
            password === ""
        ) {
            alert("Debes completar todos los campos.");
            return;
        }

        // Creamos el usuario
        const usuario = {
            nombre: nombre,
            email: email,
            fechaNacimiento: fecha,
            password: password,
            rol: "cliente"
        };

        // Guardamos el usuario
        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );

        alert("Cuenta creada correctamente.");

    });
}




// INICIO DE SESIÓN


// Usuarios temporales
const usuarios = [

    {
        nombre: "Administrador",
        email: "admin@milsabores.cl",
        password: "admin123",
        rol: "admin"
    },

    {
        nombre: "Kerly",
        email: "kerly@gmail.com",
        password: "1234",
        rol: "cliente"
    },

    {
        nombre: "Suimei",
        email: "suimei@gmail.com",
        password: "1234",
        rol: "cliente"
    }

];


const formLogin = document.getElementById("formLogin");

// Solo se ejecuta si existe el formulario de inicio de sesión
if (formLogin) {

    formLogin.addEventListener("submit", function (e) {

        // Evita que la página se recargue
        e.preventDefault();

        const email = document.getElementById("emailLogin").value.trim();
        const password = document.getElementById("passwordLogin").value.trim();

        // Buscamos un usuario con ese correo y contraseña
        const usuarioEncontrado = usuarios.find(function (usuario) {

            return usuario.email === email &&
                usuario.password === password;

        });


        // Si no existe
        if (!usuarioEncontrado) {

            alert("Email o contraseña incorrectos.");
            return;

        }


        // Guardamos quién inició sesión
        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuarioEncontrado)
        );


        // Revisamos el tipo de usuario
        if (usuarioEncontrado.rol === "admin") {

            window.location.href = "admin/index.html";

        } else {

            window.location.href = "mi_cuenta.html";

        }

    });

}


