

// Create a match Function
function myFunction(x) {
  const sa = document.querySelector("#nav-top")
  const desc = document.querySelector("#nav-description")
  const menuNav = document.querySelector("#menu-nav")
  const mainContent = document.querySelector("#main-container")

  if (x.matches) {
    sa.classList.remove("nav-header")
    sa.classList.add("nav-header__onk")

    desc.classList.remove("nav__description")
    desc.classList.add("nav__description--onk")

    menuNav.classList.remove("menu--expanded")

    mainContent.classList.remove("ml-17")
  } else {
    sa.classList.add("nav-header")
    sa.classList.remove("nav-header__onk")

    desc.classList.add("nav__description")
    desc.classList.remove("nav__description--onk")
  }
}


function navBody(x) {
  const nav = document.querySelector("#nav-list")

  if (x.matches) {
    nav.classList.remove("menu-list")
    nav.classList.add("menu-list__onk")
  } else {
    nav.classList.add("menu-list")
    nav.classList.remove("menu-list__onk")
  }
}

function func(x) {
  const menuNa = document.querySelector("#menu-nav")
  const mainConten = document.querySelector("#main-container") 

  if (x.matches) {
    // menuNa.classList.add("l-17")-
    menuNa.classList.remove("left-0")
    menuNa.classList.remove("menu--expanded")

    mainConten.classList.remove("ml-17")

    // const mini = document.querySelector("#menu-nav");
    // mini.classList.toggle("l-17")
    // mini.classList.toggle("left-0")
  } else {
    menuNa.classList.remove("left-0")
  }
}

// Create a MediaQueryList object
const mmObj = window.matchMedia("(min-width: 600px)")
const menor = window.matchMedia("(max-width: 599px)")

// Call the match function at run time:
navBody(mmObj)
myFunction(mmObj)
func(menor)

// Add the match function as a listener for state changes:
mmObj.addListener(myFunction)
mmObj.addListener(navBody)
menor.addListener(func)