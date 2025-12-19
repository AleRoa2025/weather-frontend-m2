const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
});

function volverArriba() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



