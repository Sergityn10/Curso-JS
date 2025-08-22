// Abrir ventana nueva
window.open("main.html", "Document Picture-in-Picture API", "width=800,height=600");

const video = document.querySelector("video");

// Activar/desactivar PIP al hacer click manualmente
// video.addEventListener("click", async () => {
//   await togglePIP(video);
// });

// Activar automáticamente PIP si la ventana pierde el foco
window.addEventListener("blur", async () => {
  if (document.pictureInPictureEnabled && video !== document.pictureInPictureElement) {
    await togglePIP(video);
  }
});

// Salir automáticamente de PIP si la ventana vuelve a tener foco
window.addEventListener("focus", async () => {
  if (video === document.pictureInPictureElement) {
    await document.exitPictureInPicture();
  }
});

async function togglePIP(videoElement) {
  try {
    if (videoElement !== document.pictureInPictureElement) {
      await videoElement.requestPictureInPicture();
      console.log("Entrando en Picture-in-Picture");
    } else {
      await document.exitPictureInPicture();
      console.log("Saliendo de Picture-in-Picture");
    }
  } catch (error) {
    console.error("Error con Picture-in-Picture:", error);
  }
}
