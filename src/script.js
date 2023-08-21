
function changeLayout() {
  if (window.matchMedia("(min-width: 600px)").matches) {
    document.querySelector("#menu-nav").classList.toggle("expanded-menu")
    document.querySelector("#main-container").classList.toggle("ml-15")
  } else {
    document.querySelector("#menu-nav").classList.toggle("left-0")
    document.querySelector("#main-container").classList.toggle("ml-15")
  }
}

