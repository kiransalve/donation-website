// show donate button
document.addEventListener("DOMContentLoaded", function () {
  const donateButton = document.querySelector(".donate_btn");
  const stripeForm = document.querySelector("#stripe-card");
  donateButton.addEventListener("click", function () {
    if (stripeForm.style.display === "none") {
      stripeForm.style.display = "block";
    } else {
      stripeForm.style.display = "none";
    }
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
// number counter animation

// Function to animate counting numbers
function animateNumberCounter(counter, target) {
  const duration = 2000; // Duration in milliseconds
  const step = Math.ceil(target / (duration / 10)); // Calculate the step size

  let current = 0;

  const updateCounter = () => {
    current += step;

    if (current < target) {
      counter.innerText = current.toLocaleString(); // Add commas back to the displayed number
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target.toLocaleString(); // Ensure the final number is formatted with commas
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
