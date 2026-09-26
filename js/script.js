// 1. CONFIG - Solo cambia aquí tu número
const CONFIG = {
  numero: "59170000000", // Tu número con 591
  mensaje: "Hola Los Yungas! Quiero reservar un corte para hoy en El Alto - La Ceja"
};

// 2. Generar link
function crearLinkWhatsApp() {
  const texto = encodeURIComponent(CONFIG.mensaje);
  return `https://wa.me/${CONFIG.numero}?text=${texto}`;
}

// 3. Aplicar a todos los botones
document.addEventListener("DOMContentLoaded", () => {
  const link = crearLinkWhatsApp();
  
  const botones = ["btn-header", "btn-hero", "btn-float"];
  botones.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.href = link;
      btn.target = "_blank";
    }
  });

  console.log("Barbería Los Yungas lista - WhatsApp:", link);
});