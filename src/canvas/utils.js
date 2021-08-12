const download = () => {
  const download = document.getElementById("download");
  const image = document
    .getElementById("character-canvas")
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
};

export default download;
