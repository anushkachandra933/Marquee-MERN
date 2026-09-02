let cursorBox = document.getElementById("animated-cursor-box");
let topSection = document.getElementById("top-section");
let cursorFollower = document.getElementById("follower");
let interestOptionItems = document.querySelectorAll(".interest-option-item");
let modeChangeText = document.getElementById("mode");
let menuText = document.getElementById("menu");
let overlayMenus = document.getElementById("overlay");
let overlayHeading = document.querySelectorAll(".overlay-item h3");
let isDarkMode = false;
let overlayIsOpen = false;
let contactText = document.getElementById("contact");
let contactFormOverlay = document.getElementById("contact-form-overlay");
let navbar = document.getElementById("nav-ribbon");

document.addEventListener("mousemove", (e) => {
  
  cursorFollower.style.left = `${e.clientX}px `;
  cursorFollower.style.top = `${e.clientY}px`;
  cursorFollower.style.transform = "translate(-30px,-30px)";
});

// Navbar
modeChangeText.addEventListener("click", (e) => {
  isDarkMode = !isDarkMode;
  e.target.textContent == "DARK MODE"
    ? (e.target.textContent = "LIGHT MODE")
    : (e.target.textContent = "DARK MODE");

  // To change the BG of html page
  this.document.body.classList.toggle("dark");

  overlayHeading.forEach((menu) => {
    if (isDarkMode) {
      document.getElementById("nav-ribbon").style.color = "white";
      topSection.style.backgroundColor = "black";
      overlayMenus.style.backgroundColor = "black";
      overlayMenus.style.color = "white";
    } else {
      document.getElementById("nav-ribbon").style.color = "black";
      topSection.style.backgroundColor = "#e4e4e4";
      overlayMenus.style.backgroundColor = "white";
      overlayMenus.style.color = "black";
    }
  });
});

// Top Section
topSection.addEventListener("mousemove", (e) => {
  cursorBox.style.opacity = 1;
  cursorBox.style.left = `${e.clientX}px`;
  cursorBox.style.top = `${e.clientY}px`;
  cursorBox.style.transition = `all linear .5s`;
});

topSection.addEventListener("mouseleave", (e) => {
  cursorBox.style.opacity = 0;
});

// Overlays Menu Text

menuText.addEventListener("mouseenter", (e) => {
  if(overlayIsOpen){
    e.target.textContent = "CLOSE";
  }else{
   e.target.textContent = "OPEN";
  }
});

menuText.addEventListener("mouseleave", (e) => {
  if(overlayIsOpen){
    e.target.textContent = "CLOSE";
  }else{
    e.target.textContent = "MENU";
  }
});

/*FIXME:  OVERLAY: STEP 1*/
menuText.addEventListener("click", (e) => {
  overlayIsOpen = !overlayIsOpen;

  if (overlayIsOpen) {
    e.target.textContent = "CLOSE";
    overlayMenus.style.opacity = 1;
    overlayMenus.style.top = "0%";
  } else {
    e.target.textContent = "MENU";
    overlayMenus.style.opacity = 1;
    overlayMenus.style.top = "-110%";
  }
  
});

// Move Left all the Heading of Overlays
// FIXME: Overlay Items
let overlayItems = document
  .querySelectorAll(".overlay-item")
  .forEach((item) => {
    console.log(item);
    item.addEventListener("mouseenter", (e) => {
      item.firstElementChild.style.width = "160px";
    });

    item.addEventListener("mouseleave", (e) => {
      item.firstElementChild.style.width = "0px";
      item.lastElementChild.style.transform = "translateX(0px)";
    });
  });

// Also handle cursor-box on overlay

overlayMenus.addEventListener("mouseenter", (e) => {
  cursorBox.style.display = "none";
});

overlayMenus.addEventListener("mouseleave", (e) => {
  cursorBox.style.display = "block";
});

// PopOut Area
//TODO: Explanation PopOut Area

const ImageTriggersBox = document.querySelectorAll('.highlight');

ImageTriggersBox.forEach((element) => {
  let interval;
  let index = 0;
  //NOTE: When Mouseenter
  element.addEventListener('mouseenter', () => {
    const images = element.querySelectorAll('.image-highlight');

    // Start from the first image
    index = 0;

    images[index].style.opacity = '1';

    interval = setInterval(() => {
      // Hide current image
      images[index].style.opacity = '0';
      index++;

      // Loop back to first image
      if (index >= images.length) {
        index = 0;
      }

      // Show next image
      images[index].style.opacity = '1';
    }, 300);
  });

  // NOTE: when mouseleave
  element.addEventListener('mouseleave', () => {
    // console.log(interval);

    // Stop the loop
    clearInterval(interval);

    const images = element.querySelectorAll('.image-highlight');

    // Hide all images
    images.forEach((image) => {
      image.style.opacity = '0';
    });

    index = 0;
  });
});

// Overlays Contact Text

contactText.addEventListener("mouseenter", (e) => {
  e.target.textContent = "CONTACT US";
});
contactText.addEventListener("mouseleave", (e) => {
  e.target.textContent = "LET'S TALK";
});

let contactOverlayIsOpen = false;
contactText.addEventListener("click", (e) => {
  contactOverlayIsOpen = !contactOverlayIsOpen;
  if (contactOverlayIsOpen) {
    e.target.textContent = "CONTACT US";
    contactFormOverlay.style.top = "0%";
    document.querySelector("#gif-heading img").style.width = "200px";
  } else {
    e.target.textContent = "LET'S TALK";
    contactFormOverlay.style.top = "-100%";
    document.querySelector("#gif-heading img").style.width = "0px";
  }
});

interestOptionItems.forEach((option) => {
  option.addEventListener("click", (e) => {
    interestOptionItems.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// TODO: Playgroud

let playgroundHeading = document.getElementById('playground-heading');
// let playgroundItem = ;

playgroundHeading.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;

  // FIXME: Move Item
  document.getElementById('playground-item').style.top = `${offsetY}px`;
  document.getElementById('playground-item').style.left = `${offsetX}px`;
});

playgroundHeading.addEventListener('mouseenter',()=>{
  document.getElementById('playground-item').style.display = 'block';
})

playgroundHeading.addEventListener('mouseleave',()=>{
  document.getElementById('playground-item').style.display = 'none';
})

//grid-video-items
document.querySelectorAll('.grid-vedio-items').forEach((item)=>{
  const follower = item.querySelector(".video-item-follower");
  item.addEventListener('mouseenter',(e)=>{
    e.target.firstElementChild.style.filter = "blur(3px) "
    e.target.style.transform = "scale(0.95)"
    e.target.lastElementChild.style.width = "80%";

  })

  item.addEventListener('mouseleave',(e)=>{
    follower.style.display = "none";
    e.target.firstElementChild.style.filter = "none";
    e.target.style.transform = "scale(1)";
    e.target.lastElementChild.style.width = "0";
  })

  //follower
  item.addEventListener('mousemove',(e)=>{
    follower.style.display = "block";
    const rect = item.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    follower.style.top = `${y}px`;
    follower.style.left = `${x}px`;
  })

  setTimeout(() => {
    item.style.transform = "translate(0% 0%)";
    item.style.transform = "rotate(0deg)"
  }, 400);
})