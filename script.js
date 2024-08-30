const rectangle = document.querySelector('.rectangle')

rectangle.addEventListener("mousemove", function (details) {
  let rectanglelocation = (rectangle.getBoundingClientRect());
  let insideRectVal = (details.clientX - rectanglelocation.left);

  if (insideRectVal < rectanglelocation.width / 2) {
    let redcolor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0, insideRectVal);
    gsap.to(rectangle, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  } else {
    let bluecolor = gsap.utils.mapRange(rectanglelocation.width / 2, rectanglelocation.width, 0, 255, insideRectVal);
    gsap.to(rectangle, {
      backgroundColor: `rgb(0,0, ${bluecolor})`,
      ease: Power4,
    });
  }
})

rectangle.addEventListener("mouseleave", function () {
  gsap.to(rectangle, {
    backgroundColor: "white"
  })
})