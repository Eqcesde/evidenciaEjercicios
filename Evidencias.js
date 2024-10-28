// variable de usuarios y contraseñas
const empleados = [
    { usuario: "admin", contrasena: "1234", nombre: "Administrador" },
    { usuario: "empleado1", contrasena: "5678", nombre: "Enderson Quiroz" },
    { usuario: "empleado2", contrasena: "9123", nombre: "Jaime Zapata" }
];

// Función para iniciar sesión
function iniciarSesion() {
    let intentos = 3;
    while (intentos > 0) {
        let usuario = prompt("Ingrese El Usuario:");
        let contrasena = prompt("Ingrese La Contraseña:");

        // variable para Buscar el empleado con usuario y contraseña
        const empleado = empleados.find(emp => emp.usuario === usuario && emp.contrasena === contrasena);

        if (empleado) {
            alert(`Bienvenido(a), ${empleado.nombre}`);
            return empleado;
        } else {
            intentos--;
            alert(`Usuario o contraseña incorrectos. Intentos restantes: ${intentos}`);
        }
    }
    alert("Demasiados intentos fallidos. El sistema se cerrará.");
    return null;
}