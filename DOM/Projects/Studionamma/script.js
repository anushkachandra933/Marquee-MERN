let cursorBox = document.getElementById("animated-cursor-box");
let topSection = document.getElementById("top-section");
let cursorFollower = document.getElementById("follower");
let interestOptionItems = document.querySelectorAll(".interest-option-item");
let titleText = document.querySelector("#title");
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
  cursorFollower.style.transform = "translate(-20px,-20px)";
});

// Navbar
modeChangeText.addEventListener("click", (e) => {
  isDarkMode = !isDarkMode;
  e.target.textContent == "DARK MODE"
    ? (e.target.textContent = "LIGHT MODE")
    : (e.target.textContent = "DARK MODE");

  document.body.classList.toggle("dark", isDarkMode); //if isDarkMode is true,then add dark class
  
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

/*  OVERLAY: STEP 1*/
menuText.addEventListener("click", (e) => {
  overlayIsOpen = !overlayIsOpen;

  if (overlayIsOpen) {
    e.target.textContent = "CLOSE";
    overlayMenus.style.top = "0%";
    overlayMenus.style.transform = "rotate(0deg)";
    document.querySelectorAll(".overlay-item").forEach((item)=>{
      item.style.transform = "scaleY(1.4)";
    })
  } else {
    e.target.textContent = "MENU";
    overlayMenus.style.top = "-135%";
    overlayMenus.style.transform = "rotate(20deg)";
    document.querySelectorAll(".overlay-item").forEach((item)=>{
      item.style.transform = "scaleY(0)";
    })
  }
  
});

// Move Left all the Heading of Overlays
let overlayItems = document
  .querySelectorAll(".overlay-item")
  .forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      item.firstElementChild.style.width = "160px";
    });

    item.addEventListener("mouseleave", (e) => {
      item.firstElementChild.style.width = "0px";
    });
  });

// Also handle cursor-box on overlay

overlayMenus.addEventListener("mouseenter", (e) => {
  cursorBox.style.display = "none";
});

overlayMenus.addEventListener("mouseleave", (e) => {
  cursorBox.style.display = "block";
});


// Overlays Contact Text

let contactOverlayIsOpen = false;

contactText.addEventListener("mouseenter", (e) => {
  if(contactOverlayIsOpen){
    e.target.textContent = "CLOSE";
  }else{
    e.target.textContent = "CONTACT US";
  }
});

contactText.addEventListener("mouseleave", (e) => {
  if(contactOverlayIsOpen){
    e.target.textContent = "CLOSE";
  }else{
    e.target.textContent = "LET'S TALK"
  }
});

contactText.addEventListener("click", (e) => {
  contactOverlayIsOpen = !contactOverlayIsOpen;
  if (contactOverlayIsOpen) {
    modeChangeText.style.display = "none";
    titleText.style.display = "none";
    menuText.style.display = "none";
    contactText.style.transform = "translateX(450px)";
    e.target.textContent = "CLOSE";
    contactFormOverlay.style.top = "0%";
    document.querySelector("#contact-form-overlay-heading img").style.width = "180px";
  } else {
    modeChangeText.style.display = "block";
    titleText.style.display = "block";
    menuText.style.display= "block";
    contactText.style.transform = "none";
    e.target.textContent = "LET'S TALK";
    contactFormOverlay.style.top = "-100%";
    document.querySelector("#contact-form-overlay-heading img").style.width = "0px";
  }
});

interestOptionItems.forEach((option) => {
  option.addEventListener("click", (e) => {
    interestOptionItems.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// PopOut Area

const ImageTriggersBox = document.querySelectorAll('.highlight');

ImageTriggersBox.forEach((element) => {
  let interval;
  let index;

  //When Mouseenter
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


// Playgroud

let playgroundHeading = document.getElementById('playground-heading');

playgroundHeading.addEventListener('mouseenter', (e) => {
  //  follower changed to portfolio 
  cursorFollower.innerText = "PORTFOLIO";
  cursorFollower.style.width = "120px";
  cursorFollower.style.height = "50px";
  cursorFollower.style.color = "white";
  cursorFollower.style.borderRadius = "10px";
  cursorFollower.style.fontSize = "1.9rem";
  cursorFollower.style.fontFamily = "'Bebas Neue', sans-serif";
  cursorFollower.style.padding = "9px";
  cursorFollower.style.fontWeight = "800";
});

playgroundHeading.addEventListener('mouseleave',()=>{
  cursorFollower.innerHTML = "";
  cursorFollower.style.width = "20px";
  cursorFollower.style.height = "20px";
  cursorFollower.style.borderRadius = "50%";
})

//grid-video-items

document.querySelectorAll('.grid-vedio-items').forEach((item)=>{
  const follower = item.querySelector(".video-item-follower");
  item.addEventListener('mouseenter',(e)=>{
    e.target.firstElementChild.style.filter = "blur(3px) "
    e.target.style.transform = "scale(0.95)"
    e.target.lastElementChild.style.width = "80%";
  })

  setTimeout(() => {
    item.style.transform = "translate(0% 0%)";
    item.style.transform = "rotate(0deg)"
  }, 400);
})

//follower changed to matera
let gridImageOne = document.querySelector('#grid-image-1');
gridImageOne.addEventListener('mouseenter', (e) => {
  
  cursorFollower.innerText = "MATERA";
  cursorFollower.style.width = "90px";
  cursorFollower.style.height = "50px";
  cursorFollower.style.color = "white";
  cursorFollower.style.borderRadius = "10px";
  cursorFollower.style.fontSize = "1.9rem";
  cursorFollower.style.fontFamily = "'Bebas Neue', sans-serif";
  cursorFollower.style.padding = "9px";
  cursorFollower.style.fontWeight = "800";
});

gridImageOne.addEventListener('mouseleave',(e)=>{
  e.target.firstElementChild.style.filter = "none";
  e.target.style.transform = "scale(1)";
  e.target.lastElementChild.style.width = "0";
  cursorFollower.innerHTML = "";
  cursorFollower.style.width = "20px";
  cursorFollower.style.height = "20px";
  cursorFollower.style.borderRadius = "50%";
})

//follower changed to matera
let gridImageTwo = document.querySelector('#grid-image-2');
gridImageTwo.addEventListener('mouseenter', (e) => {
  
  cursorFollower.innerText = "CHANCE";
  cursorFollower.style.width = "90px";
  cursorFollower.style.height = "50px";
  cursorFollower.style.color = "white";
  cursorFollower.style.borderRadius = "10px";
  cursorFollower.style.fontSize = "1.9rem";
  cursorFollower.style.fontFamily = "'Bebas Neue', sans-serif";
  cursorFollower.style.padding = "9px";
  cursorFollower.style.fontWeight = "800";
});

gridImageTwo.addEventListener('mouseleave',(e)=>{
  e.target.firstElementChild.style.filter = "none";
  e.target.style.transform = "scale(1)";
  e.target.lastElementChild.style.width = "0";
  cursorFollower.innerHTML = "";
  cursorFollower.style.width = "20px";
  cursorFollower.style.height = "20px";
  cursorFollower.style.borderRadius = "50%";
})

let gridImageThree = document.querySelector('#grid-image-3');
gridImageThree.addEventListener('mouseenter', (e) => {
  //  Move follower
  cursorFollower.innerText = "SILVR";
  cursorFollower.style.width = "70px";
  cursorFollower.style.height = "50px";
  cursorFollower.style.color = "white";
  cursorFollower.style.borderRadius = "10px";
  cursorFollower.style.fontSize = "1.9rem";
  cursorFollower.style.fontFamily = "'Bebas Neue', sans-serif";
  cursorFollower.style.padding = "9px";
  cursorFollower.style.fontWeight = "800";
});

gridImageThree.addEventListener('mouseleave',(e)=>{
  e.target.firstElementChild.style.filter = "none";
  e.target.style.transform = "scale(1)";
  e.target.lastElementChild.style.width = "0";
  cursorFollower.innerHTML = "";
  cursorFollower.style.width = "20px";
  cursorFollower.style.height = "20px";
  cursorFollower.style.borderRadius = "50%";
})

let gridImageFour = document.querySelector('#grid-image-4');
gridImageFour.addEventListener('mouseenter', (e) => {
  //  Move follower
  cursorFollower.innerText = "INTRAMUROS";
  cursorFollower.style.width = "140px";
  cursorFollower.style.height = "50px";
  cursorFollower.style.color = "white";
  cursorFollower.style.borderRadius = "10px";
  cursorFollower.style.fontSize = "1.9rem";
  cursorFollower.style.fontFamily = "'Bebas Neue', sans-serif";
  cursorFollower.style.padding = "9px";
  cursorFollower.style.fontWeight = "800";
});

gridImageFour.addEventListener('mouseleave',(e)=>{
  e.target.firstElementChild.style.filter = "none";
  e.target.style.transform = "scale(1)";
  e.target.lastElementChild.style.width = "0";
  cursorFollower.innerHTML = "";
  cursorFollower.style.width = "20px";
  cursorFollower.style.height = "20px";
  cursorFollower.style.borderRadius = "50%";
})

