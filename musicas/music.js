document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var musicList = document.getElementById("musicList");
    var modalContent = document.getElementById("modalContent");
    var youtubeLink = document.getElementById("youtubeLink");
    var albumImage = document.createElement("img"); // Criar elemento de imagem para o álbum
  
    var youtubeVideos = [
        "https://youtu.be/nyuo9-OjNNg?si=7gZn9BOGjnuFc-sb", // Música 1 - Insira o link completo do vídeo do YouTube aqui
        "https://youtu.be/JHJwdnibNoY?si=pxcPDqnjVbWi9QTb", // Música 2 - Insira o link completo do vídeo do YouTube aqui
        "https://youtu.be/f1r0XZLNlGQ?si=f3hyJtGkN6oS9QjY", // Música 3 - Insira o link completo do vídeo do YouTube aqui
        "https://youtu.be/logPeMsw1xo?si=-PuRHgHEPOQmGFdK", // Música 4 - Insira o link completo do vídeo do YouTube aqui
        "https://youtu.be/1JPoKc3ivXk?si=XrKsCjURE_sBQ78Z", // Música 5 - Insira o link completo do vídeo do YouTube aqui
        "https://youtu.be/8HVLFySv1yQ?si=7uX-CJxkLrPNaFE8", // Música 6 - Insira o link completo do vídeo do YouTube aqui
        "https://youtu.be/l3bQqKyuKjQ?si=jGYISqSGIGYd1rqu", // Música 7 - Insira o link completo do vídeo do YouTube aqui
        "https://youtu.be/i9L_Ew4t1xg?si=_Y-_RbGP-1Km4sHk", // Música 8 - Insira o link completo do vídeo do YouTube aqui
        "https://youtu.be/2FNiAPNK4Ig?si=kmZxnPhcLciUrUMv", // Música 9 - Insira o link completo do vídeo do YouTube aqui
        "https://youtu.be/IMOgRTxv3nw?si=wQhSwF_xqJvFFn6-" // Música 10 - Insira o link completo do vídeo do YouTube aqui
    ];
  
 
   musicList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        var index = event.target.getAttribute("data-index");
        var musicName = "Música " + index;
        var albumSrc = event.target.querySelector("img").getAttribute("src"); // Obter src da imagem do álbum clicado
        var youtubeUrl = youtubeVideos[index - 1]; // Acessar o link correspondente ao índice
        
        modal.style.display = "block";
        modalContent.innerHTML = ""; // Limpar conteúdo anterior
        albumImage.src = albumSrc; // Definir src da imagem do álbum no modal
        modalContent.appendChild(albumImage); // Adicionar imagem ao modal
        modalContent.innerHTML += "<h2>" + musicName + "</h2>"; // Adicionar nome da música ao modal
        youtubeLink.setAttribute("href", youtubeUrl); // Definir link do YouTube
      }
    });
  
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
});


  