// Obtener el año actual
const currentYear = new Date().getFullYear();

// Seleccionar el primer párrafo del footer por su id y actualizar su contenido
document.getElementsById("currentyear").textContent = `© ${currentYear}`;

// Obtener la fecha de la última modificación del documento
const lastModified = document.lastModified;

// Seleccionar el segundo párrafo del footer y actualizar su contenido
document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;