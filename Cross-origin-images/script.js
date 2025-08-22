let downloadedImg
let imageBox = document.createElement("div");
imageBox.id = "image-box";
document.body.appendChild(imageBox);
function startDownload() {
  let imageURL = "https://mdn.github.io/shared-assets/images/examples/mdn.svg";
  let imageDescription = "Logo of a dinosaur in front of a map";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.alt = imageDescription;
  downloadedImg.src = imageURL;
}
function imageReceived() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;
  canvas.innerText = downloadedImg.alt;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
startDownload()
