// variable de usuarios y contraseñas
const empleados = [
  { usuario: "admin", contrasena: "1234", nombre: "Administrador" },
  { usuario: "empleado1", contrasena: "5678", nombre: "Enderson Quiroz" },
  { usuario: "empleado2", contrasena: "9123", nombre: "Jaime Zapata" },
];

// Función para iniciar sesión
function iniciarSesion() {
  let intentos = 3;
  while (intentos > 0) {
    let usuario = prompt("Ingrese El Usuario:");
    let contrasena = prompt("Ingrese La Contraseña:");

    // variable para Buscar el empleado con usuario y contraseña
    const empleado = empleados.find(
      (emp) => emp.usuario === usuario && emp.contrasena === contrasena
    );

    if (empleado) {
      alert(`Bienvenido(a), ${empleado.nombre}`);
      return empleado;
    } else {
      intentos--;
      alert(
        `Usuario o contraseña incorrectos. Intentos restantes: ${intentos}`
      );
    }
  }
  alert("Demasiados intentos fallidos. El sistema se cerrará.");
  return null;
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