const media = window.matchMedia("(min-width: 600px)")

function changeLayout(x) {
  if (x.matches) {
    document.querySelector("#header_box").classList.toggle("menu--expanded")
    document.querySelector("#main-container").classList.toggle("ml-17")
    
  } else {
    document.querySelector("#header_box").classList.toggle("left-0")
    document.querySelector("#main-container").classList.toggle("ml-17")
  } 
}


//////////////////////////////

function toggleMenu(x) {
  if (x.matches) {
    const navUp = document.querySelector("#nav-top")
    navUp.classList.toggle("profile--onk")
    navUp.classList.toggle("profile")

    const navMain = document.querySelector("#nav-list")
    navMain.classList.toggle("menu-list")
    navMain.classList.toggle("menu-list__onk")
  }
}
