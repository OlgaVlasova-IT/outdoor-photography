// gsap.from("#header", {opacity: 0, duration: 3, stagger: 0.2});
//
//gsap.from(".imgGaleryIndex", {x: -200, ease: "back", duration: 2})
gsap.from("#header", {y:80, duration: 2, stagger: 1 , opacity: 0})
// gsap.from("#quote", {x:60,  duration: 1.5, stagger: 0.2 , delay: 0.5, opacity: 0})
gsap.from("#portfolioLink", {y:80,  duration: 2, stagger: 0.2 , delay: 0.5, opacity: 0})


let scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
let elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    let rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }