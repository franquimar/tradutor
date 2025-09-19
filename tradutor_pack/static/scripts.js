// ===== Função para tocar som =====
function playSound(audioFile) {
    const audio = new Audio(audioFile);
    audio.volume = 0.5;
    audio.play();
}

// ===== Som de abertura =====
window.addEventListener("load", () => {
    playSound("/static/success.wav");  // Som na abertura
});

// ===== Som ao clicar em botões e links =====
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button, .btn-cta, a");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            playSound("/static/success.wav");
        });
    });
});
