const img1 = document.querySelector("#band_image1");
const img2 = document.querySelector("#band_image2");
const img3 = document.querySelector("#band_image3");
const img4 = document.querySelector("#band_image4");

img1.addEventListener("mouseover", eventHandler);
img2.addEventListener("mouseover", eventHandler);
img3.addEventListener("mouseover", eventHandler);
img4.addEventListener("mouseover", eventHandler);

function eventHandler() {
  //Tilføjer animation på img når man hover over billedet
  this.classList.add("forsvind_roter");

  img1.addEventListener("mouseout", eventStop);
  img2.addEventListener("mouseout", eventStop);
  img3.addEventListener("mouseout", eventStop);
  img4.addEventListener("mouseout", eventStop);
}

function eventStop() {
  this.classList.remove("forsvind_roter");
}
