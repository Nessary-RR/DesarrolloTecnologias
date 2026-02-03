function mostrar(id) {
  document.querySelectorAll('.calculadora').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// PRÉSTAMO CONSUMO
function calcularConsumo() {
  let monto = montoConsumo.value;
  let tasa = tasaConsumo.value / 100 / 12;
  let meses = mesesConsumo.value;

  let cuota = (monto * tasa) / (1 - Math.pow(1 + tasa, -meses));
  resultadoConsumo.innerText = `Cuota mensual: $${cuota.toFixed(2)}`;
}

// PRÉSTAMO HIPOTECARIO
function calcularHipoteca() {
  let monto = montoHipoteca.value;
  let tasa = tasaHipoteca.value / 100 / 12;
  let meses = añosHipoteca.value * 12;

  let cuota = (monto * tasa) / (1 - Math.pow(1 + tasa, -meses));
  resultadoHipoteca.innerText = `Cuota mensual: $${cuota.toFixed(2)}`;
}

// INVERSIONES
function calcularInversion() {
  let capitalInicial = capital.value;
  let tasa = tasaInversion.value / 100;
  let años = añosInversion.value;

  let total = capitalInicial * Math.pow(1 + tasa, años);
  resultadoInversion.innerText = `Monto final: $${total.toFixed(2)}`;
}
