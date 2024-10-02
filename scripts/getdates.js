
const currentYear = new Date().getFullYear();


document.getElementById("currentyear").textContent = `© ${currentYear}`;


const lastModified = document.lastModified;


document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;