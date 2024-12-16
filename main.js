// Función para validar que una entrada no esté vacía ni contenga caracteres inválidos
function validarTexto(entrada, mensajeError) {
    const regex = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/; // Solo letras y espacios permitidos
    while (!entrada || !regex.test(entrada)) {
        alert(mensajeError);
        entrada = prompt("Por favor, intenta nuevamente:");
    }
    return entrada.trim();
}

// Función para validar números positivos
function validarNumero(entrada, mensajeError) {
    while (isNaN(entrada) || entrada <= 0) {
        alert(mensajeError);
        entrada = parseInt(prompt("Por favor, intenta nuevamente:"));
    }
    return entrada;
}

// Mensaje de bienvenida y captura del nombre
let nombre = prompt("¡Bienvenido a Harmony Psicoterapia! 😊 Por favor ingresa tu nombre:");
nombre = validarTexto(nombre, "El nombre no puede estar vacío o contener caracteres inválidos.");
alert(`¡Bienvenido(a) ${nombre} a Harmony Psicoterapia!`);

// Variables iniciales para el registro
let userName = "";
let password = "";
let confirmUserName = "";
let confirmPassword = "";
let continuar = true;

// Registro del usuario
do {
    userName = prompt("Por favor, ingresa tu nombre de usuario (¡Sólo si tienes uno!):");
    if (!userName) {
        alert("¡No te preocupes! Continuarás como invitado en la página.");
        continuar = false;
    } else {
        // Validar usuario
        userName = validarTexto(userName, "El nombre de usuario no puede estar vacío ni contener caracteres inválidos.");
        alert(`¡Bienvenido usuario: ${userName}!`);

        // Confirmar nombre de usuario
        do {
            confirmUserName = prompt("Por favor, confirma tu nombre de usuario:");
            if (confirmUserName !== userName) {
                alert("El nombre de usuario no coincide. Intenta de nuevo.");
            }
        } while (confirmUserName !== userName);

        // Solicitar y confirmar contraseña
        do {
            password = prompt("Ahora, ingresa tu contraseña:");
            if (!password) {
                alert("La contraseña no puede estar vacía.");
                continue;
            }
            confirmPassword = prompt("Por favor, confirma tu contraseña:");
            if (confirmPassword !== password) {
                alert("La contraseña no coincide. Intenta de nuevo.");
            }
        } while (confirmPassword !== password);

        alert(`¡Perfecto! Tu usuario es: ${userName} y tu contraseña ha sido registrada con éxito.`);
        continuar = false;
    }
} while (continuar);

// Lista de tratamientos
const tratamientos = {
    "Psicología": 45,
    "Psicoterapia": 47,
    "Hipnoterapia": 49,
    "Terapia EMDR": 51,
    "Terapia ACT": 53,
    "Mindfulness": 55
};

// Selección del tratamiento
let producto = "";
let precio = 0;

do {
    producto = prompt(
        "Ahora dime, ¿en qué tratamiento estás interesado(a)?\n - Psicología\n - Psicoterapia\n - Hipnoterapia\n - Terapia EMDR\n - Terapia ACT\n - Mindfulness"
    );

    producto = validarTexto(producto, "El tratamiento no puede estar vacío ni contener caracteres inválidos.");
    precio = tratamientos[producto];

    if (precio) {
        alert(`Elegiste ${producto}. El precio es ${precio} soles.`);
    } else {
        alert("Tratamiento no disponible. Por favor, elige una opción válida.");
        producto = ""; // Reinicia la selección
    }
} while (!precio);

alert(`Gracias por elegir el tratamiento: ${producto}`);

// Capturar cantidad de sesiones
let cantidad = parseInt(prompt("¡Genial! Ahora dime: ¿Para cuántas personas deseas el tratamiento indicado?"));
cantidad = validarNumero(cantidad, "La cantidad debe ser un número mayor a 0.");

const precioTotal = cantidad * precio;
alert(`Has elegido ${cantidad} sesiones de ${producto}. El total a pagar es ${precioTotal} soles.`);

// Mensaje de despedida
alert(`Gracias por confiar en Harmony Psicoterapia, ${nombre}. ¡Te esperamos pronto! 😊`);