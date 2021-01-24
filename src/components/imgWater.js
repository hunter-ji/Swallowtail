function handleImg(imgData, id, text, fontSize, color, width, height) {
  console.log(width, height);
  let img = document.createElement("img")
  img.src = imgData;
  // img.width = width;
  // img.height = height;
  img.setAttribute("crossOrigin", "anonymous");
  const canvas = document.createElement("canvas");
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d")
    ctx.drawImage(img, 0, 0)
    ctx.fillStyle = color;
    ctx.font = fontSize + "px microsoft yahei";
    let n = 5;
    for (let i = 0; i < 30; i++) {
      if (i * n < width) {
        let x = 2 * (width / height);
        let y = 120 * (height / width);

        ctx.translate(x, y);
        ctx.rotate((-45 * Math.PI) / 180);
        ctx.fillText(text, 0, 0)
        ctx.rotate((45 * Math.PI) / 180);
      }
    }
    let src = canvas.toDataURL("image/png");
    let image = new Image();
    image.src = src;
    image.src = canvas.toDataURL("image/png");
    let parent = document.getElementById(id);
    parent.innerHTML = "";
    parent.appendChild(image);
    // parent.innerHTML = "<img src='" + src + "' width='" + width + "px' height='" + height + "px'>";
  }
}

export default handleImg;
