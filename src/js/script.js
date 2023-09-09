const media = window.matchMedia("(min-width: 600px)")
// const menor = window.matchMedia("(max-width: 599px)")

function changeLayout(x) {
  if (x.matches) {
    document.querySelector("#menu-nav").classList.toggle("menu--expanded")
    document.querySelector("#main-container").classList.toggle("ml-17")
    // document.querySelector("#menu-nav").classList.toggle("left-0")
    
  } else {
    document.querySelector("#menu-nav").classList.toggle("left-0")
    // document.querySelector("#menu-nav").classList.toggle("l-17")
    document.querySelector("#main-container").classList.toggle("ml-17")
  }

  // if (x.matches > window.matchMedia("(max-width: 599px)")) {
  //   document.querySelector("#menu-nav").classList.remove("menu--expanded")
  // }
  
}


//////////////////////////////

function toggleMenu(x) {
  if (x.matches) {
    const navUp = document.querySelector("#nav-top")
    navUp.classList.toggle("nav-header__onk")
    navUp.classList.toggle("nav-header")

    const navMain = document.querySelector("#nav-list")
    navMain.classList.toggle("menu-list")
    navMain.classList.toggle("menu-list__onk")
  }
}
// function tg(x) {
//   const mini = document.querySelector("#menu-nav");
//     // mini.classList.toggle("l-17")
//     // mini.classList.toggle("left-0")
// }