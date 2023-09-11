

// Create a match Function
function myFunction(x) {
  const sa = document.querySelector("#nav-top")
  const desc = document.querySelector("#nav-description")
  const menuNav = document.querySelector("#header_box")
  const mainContent = document.querySelector("#main-container")

  if (x.matches) {
    sa.classList.remove("profile")
    sa.classList.add("profile--onk")

    desc.classList.remove("profile__description")
    desc.classList.add("profile--onk__description")

    menuNav.classList.remove("menu--expanded")

    mainContent.classList.remove("ml-17")
  } else {
    sa.classList.add("profile")
    sa.classList.remove("profile--onk")

    desc.classList.add("profile__description")
    desc.classList.remove("profile--onk__description")
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
  const menuNa = document.querySelector("#header_box")
  const mainConten = document.querySelector("#main-container") 

  if (x.matches) {
    menuNa.classList.remove("left-0")
    menuNa.classList.remove("menu--expanded")

    mainConten.classList.remove("ml-17")
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