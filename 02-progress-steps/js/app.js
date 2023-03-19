const progress = document.querySelector(".progress");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Update the class in the circles
const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  let progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100;

  progress.style.width = `${progressWidth}%`;

  if (currentActive === 1) prevButton.disabled = true;
  else if (currentActive === circles.length) nextButton.disabled = true;
  else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
};

// Add click event to the nextButton
nextButton.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(currentActive);
  update();
});

// Add click event to the previous button
prevButton.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);
  update();
});
