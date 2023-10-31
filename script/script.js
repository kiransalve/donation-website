// number counter animation

// Function to animate counting numbers
function animateNumberCounter(counter, target) {
  const duration = 2000; // Duration in milliseconds
  const step = Math.ceil(target / (duration / 10));

  let current = 0;

  const updateCounter = () => {
    current += step;

    if (current < target) {
      counter.innerText = current.toLocaleString();
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target.toLocaleString(); //
    }
  };

  updateCounter();
}

// Function to start the animation when the element is in the viewport
function startAnimationWhenVisible(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const numbersElement = entry.target.querySelector(".numbers");
      const targetNumber = parseInt(numbersElement.innerText.replace(/,/g, ""));
      animateNumberCounter(numbersElement, targetNumber);
      observer.unobserve(entry.target); // Stop observing once animation has started
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(startAnimationWhenVisible, {
  threshold: 0.5,
});

// Observe each numbers_statistics element
document.querySelectorAll(".numbers_statistics").forEach((element) => {
  observer.observe(element);
});

// Accordian
let accordian = document.querySelectorAll(".accordian .accordian_container");

accordian.forEach((acco) => {
  acco.onclick = () => {
    if (acco.classList.contains("active")) {
      acco.classList.remove("active");
    } else {
      accordian.forEach((subAcco) => {
        subAcco.classList.remove("active");
      });
      acco.classList.add("active");
    }
  };
});

let overlay = document.querySelector(".overlay");
let cancel_icon = document.querySelector(".cancel_icon");
// show donate button
document.addEventListener("DOMContentLoaded", function () {
  const donateButton = document.querySelector(".donate_btn");
  const stripeForm = document.querySelector("#stripe-card");
  donateButton.addEventListener("click", function () {
    overlay.style.display = "block";
  });
  cancel_icon.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const donateButton = document.querySelector(".faq_btn");
  const stripeForm = document.querySelector("#stripe-card");
  donateButton.addEventListener("click", function () {
    stripeForm.style.display = "block";
  });
});

// show menu bar for mobile device
const showMenuBar = () => {
  const menuBar = document.querySelector(".menubar");
  const menu = document.querySelector(".menu");
  menuBar.addEventListener("click", function () {
    if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });
};
