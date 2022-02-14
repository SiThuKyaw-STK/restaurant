// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************


// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights


// greensock animation scroll



    // gsap about

   
    gsap.from("#about-text1", {
      scrollTrigger: {
          trigger: "#about-text1",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          markers: false,
      },
      x:innerWidth*-1,
      ease: "back.out(1.7)",
      
  });

gsap.from("#about-text2", {
  scrollTrigger: {
      trigger: "#about-text2",
      start: "top 80%",
      end: "bottom 80%",
      scrub: 1,
      markers: false,
  },
  x:innerWidth*-1,
  
});

gsap.from("#about-text3", {
  scrollTrigger: {
      trigger: "#about-text3",
      start: "top 80%",
      end: "bottom 80%",
      scrub: 1,
      markers: false,
  },
  opacity: 0,
  
});
gsap.from("#about-bottom", {
  scrollTrigger: {
      trigger: "#about-bottom",
      start: "top 80%",
      end: "bottom 80%",
      scrub: 1,
      markers: false,
  },
  opacity: 0,
  
});


// gsap top-sale

gsap.from("#topsale-text1", {
  scrollTrigger: {
      trigger: "#topsale-text1",
      start: "top 50%",
      end: "bottom 50%",
      scrub: 0,
      markers: false,
  },
  opacity: 0,
});
gsap.from("#topsale-text2", {
  scrollTrigger: {
      trigger: "#topsale-text2",
      start: "top 50%",
      end: "bottom 50%",
      scrub: 0,
      markers: false,
  },
  opacity: 0,
});
gsap.from("#topsale-card1", {
  scrollTrigger: {
      trigger: "#topsale-card1",
      start: "top 50%",
      end: "50% 80%",
      scrub: 1,
      markers: false,
  },
  opacity: 0,
}); gsap.from("#topsale-card2", {
  scrollTrigger: {
      trigger: "#topsale-card2",
      start: "top 50%",
      end: "50% 80%",
      scrub: 1,
      markers: false,
  },
  opacity: 0,
});
gsap.from("#topsale-card3", {
  scrollTrigger: {
      trigger: "#topsale-card3",
      start: "top 50%",
      end: "50% 80%",
      scrub: 1,
      markers: false,
  },
  opacity: 0,
});
// chefs

gsap.to("#chefs-text1", {
  scrollTrigger: {
      trigger: "#chefs-text1",
      start: "top 50%",
      end: "bottom 50%",
      scrub: 1,
      markers: false,
  },
  color: "#4C78CD",
});

// services
gsap.to("#services-text", {
  scrollTrigger: {
      trigger: "#services-text",
      start: "top 50%",
      end: "bottom 50%",
      scrub: 1,
      markers: false,
  },
  color: "#4C78CD",
});
gsap.to("#services-card1", {
  scrollTrigger: {
      trigger: "#services-card1",
      start: "top 50%",
      end: "bottom 50%",
      scrub: 0,
      markers: false,
  },
  borderColor: "#17e78c",
});
gsap.to("#services-card2", {
  scrollTrigger: {
      trigger: "#services-card2",
      start: "top 50%",
      end: "bottom 50%",
      scrub: 0,
      markers: false,
  },
  borderColor: "#17e78c",
});
gsap.to("#services-card3", {
  scrollTrigger: {
      trigger: "#services-card3",
      start: "top 50%",
      end: "bottom 50%",
      scrub: 0,
      markers: false,
  },
  borderColor: "#17e78c",
});
gsap.from("#services-img1", {
  scrollTrigger: {
      trigger: "#services-img1",
      start: "top 56%",
      end: "50% 80%",
      scrub: 1,
      markers: false,
  },
  x: innerWidth * -1,
});
gsap.from("#services-img2", {
  scrollTrigger: {
      trigger: "#services-img2",
      start: "top 56%",
      end: "50% 80%",
      scrub: 1,
      markers: false,
  },
  x: innerWidth * -1,
});
gsap.from("#services-img3", {
  scrollTrigger: {
      trigger: "#services-img3",
      start: "top 56%",
      end: "50% 80%",
      scrub: 1,
      markers: false,
  },
  x: innerWidth * -1,
});

// feed back
gsap.to("#feedback-text", {
  scrollTrigger: {
      trigger: "#feedback-text",
      start: "top 50%",
      end: "bottom 50%",
      scrub: 1,
      markers: false,
  },
  color: "#FFEDCB",
});




// indicator
let maker = document.querySelector(".maker");
let item = document.querySelectorAll('nav li');

function indicator(e) {
    maker.style.left = e.offsetLeft + 'px';
    maker.style.width = e.offsetWidth + 'px';
}
item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})

// scroll
let headerBg = document.getElementById("banner");
window.addEventListener("scroll", function () {
    headerBg.style.opacity = 1 - +window.pageYOffset / 450 + "";
    headerBg.style.top = +window.pageYOffset + "px";
    headerBg.style.backgroundPositionY = -+window.pageYOffset / 2 + "px";
});



// website loader

$(window).on('load',function(){
    $('.loader').fadeOut(500,function(){
        $(this).remove();
    })
    
});