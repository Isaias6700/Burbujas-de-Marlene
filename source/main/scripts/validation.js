document.getElementById("accessForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevenir envío para controlarlo tú

  const part1 = document.getElementById("part1").value;
  const part2 = document.getElementById("part2").value;
  const part3 = document.getElementById("part3").value;
  const part4 = document.getElementById("part4").value;
  const part5 = document.getElementById("part5").value;
  const part6 = document.getElementById("part6").value;
  const part7 = document.getElementById("part7").value;
  const part8 = document.getElementById("part8").value;

  // 🔹 Juntar el código (puedes cambiar formato si quieres con guiones)
  const finalCode = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8; // ejemplo: 12345678
  // const finalCode = `${part1}-${part2}-${part3}`; // ejemplo: 12-34-5678

  document.getElementById("fullCode").value = finalCode;

  console.log("Código final:", finalCode);

  // Ejemplo de validación
  if (finalCode === "29112024") {
    window.location.href = "flowers.html";
  } else {
    alert("❌ Código incorrecto, intenta otra vez");
  }
});

// Avanzar automáticamente al siguiente input
document.querySelectorAll(".code-input input").forEach((input, index, inputs) => {
  input.addEventListener("input", () => {
    if (input.value.length === input.maxLength && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

// Funcionalidad del botón de la bombilla para mostrar pista
function btnTip(){
  alert("💡 Pista: Es una fecha muy especial, marca un antes y un despues en nuestras vidas");
}