const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
/*......................................................................Hamburger Bölümü Bitiş......................................................................*/

/*......................................................................Navbar Bölümü Başlangıç......................................................................*/
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});





window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
/*......................................................................Navbar Bölümü Bitiş......................................................................*/

/*......................................................................Calculate Bölümü Başlangıç......................................................................*/

function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("bmi-result").innerText = "";
    document.getElementById("pointer").style.display = "none";
    return;
  }

  const bmi = (weight / (height / 100) ** 2).toFixed(1);
  document.getElementById("bmi-result").innerText = `Your BMI is ${bmi}`;

  const pointer = document.getElementById("pointer");
  pointer.style.display = "block";

  if (bmi < 18.5) {
    pointer.style.left = "10px";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    pointer.style.left = "130px";
  } else if (bmi >= 25 && bmi <= 29.9) {
    pointer.style.left = "250px";
  } else if (bmi >= 30 && bmi <= 34.9) {
    pointer.style.left = "370px";
  } else {
    pointer.style.left = "490px";
  }
}
/*......................................................................Calculate Bölümü Bitiş......................................................................*/

/*......................................................................Map Bölümü Başlangıç......................................................................*/
function initMap() {
  const location = { lat: 41.40338, lng: 2.17403 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

/*......................................................................Map Bölümü Bitiş......................................................................*/

/*......................................................................Our Classes Bölümü Başlangıç......................................................................*/

const buttons = document.querySelectorAll(".class-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = button.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);

    const title = targetContent.querySelector("h2").textContent;
    const text = targetContent.querySelector("p").textContent;
    const scheduleTitle = targetContent.querySelector("h3").textContent;
    const scheduleItems = targetContent.querySelectorAll("p:nth-of-type(n+2)");
    const imageSrc = targetContent.querySelector("img").src;
    const imageAlt = targetContent.querySelector("img").alt;

    document.getElementById("dynamic-title").textContent = title;
    document.getElementById("dynamic-text").textContent = text;
    document.getElementById("dynamic-schedule-title").textContent =
      scheduleTitle;

    scheduleItems.forEach((item, index) => {
      document.getElementById(`dynamic-schedule-${index + 1}`).textContent =
        item.textContent;
    });

    document.getElementById("dynamic-image").src = imageSrc;
    document.getElementById("dynamic-image").alt = imageAlt;
  });
});

const button = document.querySelectorAll(".class-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    const targetId = button.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);

    const title = targetContent.querySelector("h2").textContent;
    const text = targetContent.querySelector("p").textContent;
    const scheduleTitle = targetContent.querySelector("h3").textContent;
    const scheduleItems = targetContent.querySelectorAll("p:nth-of-type(n+2)");
    const imageSrc = targetContent.querySelector("img").src;
    const imageAlt = targetContent.querySelector("img").alt;

    document.getElementById("dynamic-title").textContent = title;
    document.getElementById("dynamic-text").textContent = text;
    document.getElementById("dynamic-schedule-title").textContent =
      scheduleTitle;

    scheduleItems.forEach((item, index) => {
      document.getElementById(`dynamic-schedule-${index + 1}`).textContent =
        item.textContent;
    });

    document.getElementById("dynamic-image").src = imageSrc;
    document.getElementById("dynamic-image").alt = imageAlt;
  });
});

/*......................................................................Our Classes Bölümü Bitiş......................................................................*/

/*......................................................................Scroll Bölümü Başlangıç......................................................................*/
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/*......................................................................Scroll Bölümü Bitiş......................................................................*/

/*......................................................................Buton Bölümü Başlangıç......................................................................*/
const showContentBtn = document.querySelector(".show-content-btn");
const hiddenContent = document.querySelector(".hidden-content");

showContentBtn.addEventListener("click", () => {
  hiddenContent.style.display = "block";
  showContentBtn.style.display = "none";
});
/*......................................................................Buton Bölümü Bitiş......................................................................*/
