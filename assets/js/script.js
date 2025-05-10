// Navbar text change


// header
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// section smoother

document.querySelector('a[href="#aboutSection"]').addEventListener('click', function (e) {
  e.preventDefault();
  const section = document.querySelector('#aboutSection');
  section.scrollIntoView({
    behavior: 'smooth'
  });
});


// Smooth Scrolling
const lenis = new Lenis({
  duration: 1.2, // Scroll animation duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease function
  smoothWheel: true
});

let isScrolling = false;
const scrollDelay = 100; // Delay in milliseconds

lenis.on('scroll', (e) => {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, scrollDelay);
  }
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// aboutgallery

const images = document.querySelectorAll('.gallery img');

// Load saved active image index
const savedIndex = localStorage.getItem('activeImageIndex');
if (savedIndex !== null && images[savedIndex]) {
  images[savedIndex].classList.add('active');
} else {
  images[0].classList.add('active'); // Default to first image
}

// On hover: update active class and save index
images.forEach((img, index) => {
  img.addEventListener('mouseover', () => {
    images.forEach(i => i.classList.remove('active'));
    img.classList.add('active');
    localStorage.setItem('activeImageIndex', index);
  });
});




// services 
// gsap.registerPlugin(ScrollTrigger);

let cards = gsap.utils.toArray(".card");
let tll = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-wrapper",
    pin: ".page-wrapper",
    start: "top 30%",
    scrub: 2, // Increased scrub value for smoother scrolling
    markers: false,
    end: () => "+=" + cards.length * cards[0].offsetHeight
  }
});

tll.add(() => {
  console.log("card", 1, "in place")
}, 0.001);

cards.slice(1).forEach((card, i) => {
  tll.fromTo(card, {
    yPercent: 0,
    opacity: 0, // Start fully transparent
    scale: 0.95 // Slightly smaller scale
  }, {
    yPercent: -100,
    opacity: 1, // Fade to fully visible
    scale: 1, // Scale to normal size
    duration: 1, // Longer duration for smoother transition
    ease: "power2.inOut" // Smooth easing function
  });
  tll.add(() => {
    console.log("card", (i + 2), "in place");
  })
})


// astraunet
gsap.registerPlugin(ScrollTrigger);

gsap.to(".abt-astr img", {
  x: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".abt-astr",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});
gsap.to(".abt-astr img", {
  y: -20,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});





// gradient text

// change text
$(document).ready(function () {
  var changebox = $(".changebox");

  var firstclone = changebox.children(":first").clone();
  changebox.append(firstclone);

  var fsstr = changebox.parent().css("font-size");
  fsstr = fsstr.slice(0, fsstr.indexOf("p"));
  var fs = parseInt(fsstr);

  changebox.css("height", changebox.parent().css("line-height"));
  ChangeSize(0);
  setInterval(Next, 2000);

  function Next() {
    if (typeof Next.i == 'undefined') {
      Next.i = 0;
    }
    Next.i++;
    if (Next.i == changebox.children("span").length) {
      Next.i = 1;
      changebox.scrollTop(0);
    }
    changebox.animate({
      scrollTop: (fs * Next.i) + Next.i * 5 + 3
    }, 500);
    setTimeout(function () {
      ChangeSize(Next.i);
    }, 500);
  }

  function ChangeSize(i) {
    var word = changebox.children("span").eq(i);
    var wordsize = word.css("width");
    changebox.css("width", wordsize);
  }
});



// portfolio

// portfolio
// document.querySelectorAll('.portfolio-items').forEach(item => {
//   const content = item.querySelector('.portfolio-items-cont');

//   item.addEventListener('mouseenter', () => {
//     gsap.killTweensOf(content);
//     gsap.to(content, {
//       y: -30,
//       opacity: 1,
//       duration: 0.7,
//       ease: "power3.out"
//     });
//   });

//   item.addEventListener('mouseleave', () => {
//     gsap.killTweensOf(content);

//     gsap.to(content, {
//       y: 0,
//       opacity: 0,
//       duration: 0.4,
//       ease: "power3.in"
//     });
//   });
// });

// letstalk


gsap.from(".letstalk .letstalk-content", {
  duration: 1,
  x: -300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".letstalk .letstalk-content",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
  },
});


// discover

gsap.to(".discover-border", {
  y: -20,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});



// video container
gsap.registerPlugin(ScrollTrigger);

gsap.to(".zr-hu-video video", {
  width: "100%",
  scrollTrigger: {
    trigger: ".zr-hu-video",
    start: "top bottom",
    end: "top top",
    scrub: true,
  }
});




//cursor pointer
$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});
//END cursor pointer

// loader
window.scrollTo(0, 0); // Ensure loader is visible at top
const presvg = document.getElementById('presvg');
const tl = gsap.timeline({
  defaults: {
    ease: 'power2.out',
    duration: 1.5,
  },
  onComplete: () => {
    document.body.style.overflow = 'visible';
    // Start text animation after loader
    gsap.from("#text", {
      duration: 2,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      onStart: function () {
        const text = document.querySelector("#text");
        const finalText = "Out of this World!\n"; // Added \n for line break
        let currentText = "";
        let index = 0;

        const scrambleInterval = setInterval(() => {
          currentText = finalText.substring(0, index);
          while (currentText.length < finalText.length - 1) { // -1 to account for \n
            currentText += String.fromCharCode(Math.random() * (122 - 97) + 97);
          }
          text.innerHTML = currentText.replace('\n', '<br>'); // Use innerHTML and replace \n with <br>

          if (index >= finalText.length) {
            clearInterval(scrambleInterval);
            text.innerHTML = finalText.replace('\n', '<br>');
          }
          index++;
        }, 100);
      }
    });
  }
});

const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

// Animate the logo image
tl.from('.loader-logo', {
    y: 300,
    skewY: 15,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  })
  .to('.loader-logo', {
    y: -600,
    skewY: 0,
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut',
  }, '+=0.3')
  // Morph SVG to curve
  .to(presvg, {
    attr: {
      d: curve
    },
    duration: 1,
    ease: 'power3.inOut',
  }, '-=0.6')
  // Morph SVG to flat
  .to(presvg, {
    attr: {
      d: flat
    },
    duration: 1,
    ease: 'power3.inOut',
  })
  // Slide loader up and out
  .to('.loader-wrap', {
    y: '-100vh',
    duration: 1.2,
    ease: 'expo.inOut',
  }, '+=0.3')
  // Hide loader after animation
  .to('.loader-wrap', {
    zIndex: -1,
    display: 'none',
    duration: 0,
  });
// END loader


// who we are
gsap.from(".about-content", {
  duration: 1.5,
  x: 100, // Changed from y: -100 to x: 100 for right side entry
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 90%",
    end: "bottom 50%",
    scrub: 1.5, // Increased for smoother animation
    markers: false,
    toggleActions: "play reverse play reverse",
  },
  ease: "power2.out" // Added easing for smoother motion
});


gsap.from(".gallery", {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 90%",
    end: "bottom 50%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  }
});

// services
gsap.from(".service .section-title", {
  duration: 1,
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".service .section-title",
    start: "top 90%",
    end: "bottom 50%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  }
});



// portfolio
// gsap.from(".portfolio-in .portfolio-items", {
//   duration: 1,
//   y: 50,
//   opacity: 0,
//   stagger: 0.5,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".portfolio-in .portfolio-items",
//     start: "top 80%",
//     toggleActions: "play none none reverse",
//   }
// });















gsap.to('.floating-element', {
  scrollTrigger: {
    trigger: '.about-section',
    start: 'top top',
    end: 'bottom center',
    scrub: 1,
    markers: false
  },
  x: -window.innerWidth, // Move left (negative value)
  y: window.innerHeight, // Move down, // Counter-clockwise rotation
  ease: 'none',
  duration: 3
});


gsap.to('.service .floating-element-2', {
    x: '100vw',
    y: '',
    duration: 3,
    ease: "none",
    scrollTrigger: {
        trigger: ".service",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
        toggleActions: "play none none reverse"
    }
});

gsap.set(['.floating-logos-m', '.floating-logos-i', '.floating-logos-x'], {
    clearProps: 'all'  // Clear any existing properties
});

gsap.to('.floating-logos-m', {
    scrollTrigger: {
        trigger: '.main-banner',
        start: 'top top',
        end: 'bottom center',
        scrub: 1.5,
        markers: false,
        toggleActions: "restart pause reverse pause"  // Added restart behavior
    },
    x: '-100vw',
    rotation: 360,
    ease: 'power1.inOut',
    duration: 3
});

gsap.to('.floating-logos-i', {
    scrollTrigger: {
        trigger: '.main-banner',
        start: 'top top',
        end: 'bottom center',
        scrub: 1,
        markers: false,
        toggleActions: "restart pause reverse pause"  // Added restart behavior
    },
    y: '',
    rotation: 360,
    ease: 'power1.inOut',
    duration: 3
});

gsap.to('.floating-logos-x', {
    scrollTrigger: {
        trigger: '.main-banner',
        start: 'top top',
        end: 'bottom center',
        scrub: .5,
        markers: false,
        toggleActions: "restart pause reverse pause"  // Added restart behavior
    },
    x: '100vw',
    rotation: 360,
    ease: 'power1.inOut',
    duration: 3
});









// footer


// footer
// gsap.from(".footer", {
//   duration: 1,
//   y: 300, 
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".footer",
//     start: "top bottom", 
//     end: "top center",  
//     scrub: true,
//     markers: false,
//     toggleActions: "play reverse play reverse",
//     onEnter: () => startCounting(),
//   }
// });