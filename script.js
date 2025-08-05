
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

function enviarNotificacao() {
  Notification.requestPermission().then(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        const valor = document.getElementById("valor").value;
        const imagemSelecionada = document.getElementById("imagem").value;

        let imageURL = "";
        if (imagemSelecionada === "yt") {
          imageURL = "https://yt3.googleusercontent.com/TSMmH-J8-Zbx6bV4TJ7QVQL6aAstEMonL0A9APfYyuURitzqQqgOznXAAYjq3GKkYMeX_30XfA=s72-c-k-c0x00ffffff-no-rj";
        } else {
          imageURL = "https://i.imgur.com/6IqF0Py.jpg";
        }

        reg.showNotification("🎉 Venda Aprovada!", {
          body: `Valor: ${valor}`,
          icon: imageURL,
          image: imageURL,
          badge: "https://i.imgur.com/65bVhcj.png",
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
