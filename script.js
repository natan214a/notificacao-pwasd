if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

const plataformas = {
  kiwify: {
    titulo: "💰 Nova venda recebida na Kiwify!",
    imagem: "https://cdn.kiwify.com.br/logo192.png"
  },
  hotmart: {
    titulo: "🔥 Venda aprovada na Hotmart!",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/4/49/Hotmart_logo.png"
  },
  kirvano: {
    titulo: "🎟️ Novo ticket via Kirvano!",
    imagem: "https://i.imgur.com/FXnhJrT.png"
  },
  pushinpay: {
    titulo: "📲 Pagamento recebido via Pushin Pay!",
    imagem: "https://i.imgur.com/Q7m6FXQ.png"
  }
};

document.getElementById("valor").addEventListener("change", function() {
  const inputCustom = document.getElementById("valorPersonalizado");
  inputCustom.style.display = this.value === "custom" ? "inline-block" : "none";
});

function enviarNotificacao() {
  Notification.requestPermission().then(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        const plataforma = document.getElementById("plataforma").value;
        const valorSelecionado = document.getElementById("valor").value;
        const valorCustom = document.getElementById("valorPersonalizado").value;
        const valorFinal = valorSelecionado === "custom" ? valorCustom : valorSelecionado;

        const { titulo, imagem } = plataformas[plataforma];

        reg.showNotification(titulo, {
          bod
