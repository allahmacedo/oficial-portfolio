

// var btncontenier = document.getElementById("content")
// var btns = btncontenier = document.getElementsByClassName("btn");

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   })
// }

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll("section nav a");

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.screenY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if(top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove("actives");
//         document.querySelector('header nav a [href*="' + id + ']').classList.add("actives");
//       })
//     }
//   })
// }


const sections = document.querySelectorAll("main section")
const navLinks = document.querySelectorAll("nav ul li a")

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active")
        document.querySelector("nav ul li a[href*=" + id + "]").classList.add("active")
      })
    }
  })
}


