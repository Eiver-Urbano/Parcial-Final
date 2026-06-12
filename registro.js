const form = document.getElementById("formRegistro");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre =
    document.getElementById("nombre").value.trim();

    const correo =
    document.getElementById("correo").value.trim();

    const telefono =
    document.getElementById("telefono").value.trim();

    const password =
    document.getElementById("password").value.trim();

    const regexNombre =
    /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{3,50}$/;

    const regexCorreo =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const regexTelefono =
    /^[0-9]{10}$/;

    const regexPassword =
    /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!regexNombre.test(nombre)){
        alert("Nombre inválido");
        return;
    }

    if(!regexCorreo.test(correo)){
        alert("Correo inválido");
        return;
    }

    if(!regexTelefono.test(telefono)){
        alert("Teléfono inválido");
        return;
    }

    if(!regexPassword.test(password)){
        alert(
            "La contraseña debe tener mínimo 8 caracteres, una mayúscula y un número"
        );
        return;
    }

    let usuarios =
    JSON.parse(localStorage.getItem("usuarios"))
    || [];

    usuarios.push({
        nombre,
        correo,
        telefono
    });

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    window.location =
    "usuarios.html";
});