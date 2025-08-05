if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

function enviarNotificacao() {
  Notification.requestPermission().then(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification("🎉 Venda Aprovada!", {
          body: "Você recebeu um novo ticket de tráfego pago! 🚀 Nicho Hot",
          icon: "https://i.imgur.com/y7Xy9gK.png", // Ícone estilo ticket
          image: "https://i.imgur.com/6IqF0Py.jpg", // Imagem grande - tema tráfego pago
          badge: "https://i.imgur.com/65bVhcj.png", // Badge para a notificação
          vibrate: [200, 100, 200],
          tag: "venda-aprovada-utmify",
          renotify: true,
          data: {
            url: "https://utmify.io"
          }
        });
      });
    }
  });
}

// Abrir URL ao clicar na notificação
navigator.serviceWorker.addEventListener('message', event => {
  if(event.data && event.data.action === 'open-url'){
    window.open(event.data.url, '_blank');
  }
});
