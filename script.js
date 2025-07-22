const message = [
    "Preciosa ❤️",
    "Hermosa 💖",
    "Princesa 👸🏻",
    "Muñequita 💓",
    "mua 👩🏻‍❤️‍💋‍👨🏻",
    "Linda 💗",
    "Mimor 💕",
    "Corazon 🖤",
    "Tu y yo 💚💙",
    "29/11/24 🤝",
    "29/11/? 💍",
    "5/10/24 👩🏻‍❤️‍💋‍👨🏻",
    "4/1/25 🥵",
    "17/11/24 🕺🏻💃🏻",
    "24/8/24 👕",
    "21/11/24 🧼"
  ];

  function createBubbles(){
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = message[Math.floor(Math.random() * message.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    if (container) {
      container.appendChild(bubble);
    }

    setTimeout(() => {
      const rect = bubble.getBoundingClientRect();

      if(rect.right > window.innerWidth){
        const newLeft = window.innerWidth - rect.width - 10;
        bubble.style.left = `${newLeft}px`;
      }

      if(rect.top > window.innerHeight){
        const newTop = window.innerHeight - rect.height - 10;
        bubble.style.top = `${newTop}px`;
      }

      if(rect.left < 0){
        bubble.style.left = "10px";
      }

      if(rect.top < 0){
        bubble.style.top = "10px";
      }
    }, 10);

    setTimeout(() => {
      bubble.remove();
    }, 8000);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setInterval(createBubbles, 500);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const sound = document.getElementById("touch-sound");
  
    // Para asegurar compatibilidad en móvil
    document.body.addEventListener("touchstart", () => {
      sound.currentTime = 0;
      sound.play().catch((e) => {
        // Algunos navegadores bloquean la reproducción automática
        console.log("Reproducción bloqueada hasta que el usuario interactúe");
      });
    }, { once: true }); // Solo necesita desbloquearse una vez
  
    // Reproducir sonido en cada toque
    document.body.addEventListener("click", () => {
      sound.currentTime = 0;
      sound.play();
    });
  });
  