// Objeto usuario
let usuario = {
    nombre: '',
    usuario: '',
    contraseña: ''
};

// Objeto tratamiento seleccionado
let tratamientoSeleccionado = {
    nombre: '',
    precio: 0,
    cantidad: 0,
    total: 0
};

// Lista de tratamientos disponibles
const tratamientos = [
    { nombre: 'Psicología', precio: 45 },
    { nombre: 'Psicoterapia', precio: 47 },
    { nombre: 'Hipnoterapia', precio: 49 },
    { nombre: 'Terapia EMDR', precio: 51 },
    { nombre: 'Terapia ACT', precio: 53 },
    { nombre: 'Mindfulness', precio: 55 }
];

// Función para capturar entradas
function capturarEntrada(mensaje) {
    let entrada;
    do {
        entrada = prompt(mensaje);
        if (entrada === '' || entrada === null) {
            alert('Por favor, ingresa un valor válido.');
        }
    } while (entrada === '' || entrada === null);
    return entrada;
}

// Función para confirmar datos
function confirmarDato(dato, mensaje) {
    let confirmacion;
    do {
        confirmacion = prompt(mensaje);
        if (confirmacion !== dato) {
            alert('El dato no coincide. Intenta de nuevo.');
        }
    } while (confirmacion !== dato);
    return true;
}

// Función para buscar tratamientos
function buscarTratamiento(nombre) {
    return tratamientos.find(tratamiento => tratamiento.nombre.toLowerCase() === nombre.toLowerCase());
}

// Función para calcular el precio total
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

// Flujo principal del programa
function iniciarSimulador() {
    // Captura del nombre
    usuario.nombre = capturarEntrada("¡Bienvenido a Harmony Psicoterapia! 😊 Por favor ingresa tu nombre:");
    alert(`¡Bienvenido(a) ${usuario.nombre} a Harmony Psicoterapia!`);

    // Registro de usuario
    usuario.usuario = capturarEntrada('Por favor, ingresa tu nombre de usuario:');
    confirmarDato(usuario.usuario, 'Confirma tu nombre de usuario:');

    usuario.contraseña = capturarEntrada('Ingresa tu contraseña:');
    confirmarDato(usuario.contraseña, 'Confirma tu contraseña:');
    alert(`Usuario registrado con éxito. Bienvenido(a), ${usuario.usuario}.`);

    // Selección de tratamiento
    let tratamientoNombre = capturarEntrada(
        "¿En qué tratamiento estás interesado(a)?\n - Psicología\n - Psicoterapia\n - Hipnoterapia\n - Terapia EMDR\n - Terapia ACT\n - Mindfulness"
    );
    let tratamiento = buscarTratamiento(tratamientoNombre);

    if (tratamiento) {
        tratamientoSeleccionado.nombre = tratamiento.nombre;
        tratamientoSeleccionado.precio = tratamiento.precio;

        alert(`Elegiste ${tratamientoSeleccionado.nombre}. El precio es ${tratamientoSeleccionado.precio} soles.`);

        // Capturar cantidad
        tratamientoSeleccionado.cantidad = parseInt(capturarEntrada('¿Para cuántas personas deseas el tratamiento?'));
        tratamientoSeleccionado.total = calcularTotal(tratamientoSeleccionado.precio, tratamientoSeleccionado.cantidad);

        // Mostrar resultado final
        alert(`Has elegido ${tratamientoSeleccionado.cantidad} sesiones de ${tratamientoSeleccionado.nombre}.\nEl total a pagar es ${tratamientoSeleccionado.total} soles.`);
    } else {
        alert('Lo sentimos, el tratamiento no está disponible.');
    }

    // Mostrar despedida
    alert(`Gracias por visitar Harmony Psicoterapia. ¡Esperamos verte pronto, ${usuario.nombre}! 😊`);
}

// Iniciar el programa
iniciarSimulador();