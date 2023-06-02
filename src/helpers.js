export function addClass(element, value) {
  element.classList.add(value);
  return element;
}
export function removeClass(element, value) {
  element.classList.remove(value);
  return element;
}
// export function onMouseLeave(e) {
//   //   document.querySelectorAll(".svg").forEach((e) => {
//   e.target.closest(".svg").classList.remove("open");
//   //   });
// }

export function reveal() {
  var reveals = document.querySelectorAll(".reveal , .reveal1");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
