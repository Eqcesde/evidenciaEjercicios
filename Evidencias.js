// Datos de usuarios y contraseñas predefinidos
const empleados = [
    { usuario: "admin", contrasena: "1234", nombre: "Administrador" },
    { usuario: "empleado1", contrasena: "5678", nombre: "Enderson Quiroz" },
    { usuario: "empleado2", contrasena: "9123", nombre: "Jaime zapata" }
];

// Función para iniciar sesión de un empleado
function iniciarSesion() {
    let intentos = 3;
    while (intentos > 0) {
        let usuario = prompt("Ingrese el usuario:");
        let contrasena = prompt("Ingrese la contraseña:");

        // Buscar el empleado por el usuario y contraseña
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

// Función para capturar el ingreso mensual del empleado
function capturarIngresoEmpleado(nombre) {
    let ingreso = parseFloat(prompt(`Ingrese el ingreso mensual de ${nombre}:`));
    return ingreso;
}

// Función para calcular el impuesto según el ingreso mensual
function calcularImpuesto(ingreso) {
    if (ingreso < 2000000) {
        return ingreso * 0.10;
    } else if (ingreso >= 2000000 && ingreso <= 5000000) {
        return ingreso * 0.15;
    } else {
        return ingreso * 0.20;
    }
}

// Función para mostrar el impuesto calculado
function mostrarImpuesto(nombre, ingreso, impuesto) {
    alert(`Empleado: ${nombre}\nIngreso mensual: $${ingreso.toFixed(2)}\nImpuesto calculado: $${impuesto.toFixed(2)}`);
}

// Programa principal
let continuar = true;
while (continuar) {
    let empleado = iniciarSesion();
    
    if (empleado) {
        let calcular = true;
        
        while (calcular) {
            let ingreso = capturarIngresoEmpleado(empleado.nombre);
            let impuesto = calcularImpuesto(ingreso);
            mostrarImpuesto(empleado.nombre, ingreso, impuesto);
            
            calcular = confirm(`¿${empleado.nombre}, desea calcular el impuesto para otro ingreso?`);
        }
        
        continuar = confirm("¿Desea cerrar sesión e iniciar sesión con otro usuario?");
    } else {
        continuar = false; // Salir del sistema si el inicio de sesión falla
    }
}
alert("Gracias por usar el sistema de cálculo de impuestos.");
