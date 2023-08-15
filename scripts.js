/* Gestion du surlignage de la navbar */
const navItems = document.querySelectorAll(".nav_item");
let formerId = 0;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

const observerForNavbar = new IntersectionObserver(
  handleObserverForNavbar,
  options
);

const targets = document.querySelectorAll(".slider_bloc");

targets.forEach((target) => {
  observerForNavbar.observe(target);
});

const underline = (id) => {
  navItems[formerId].classList.remove("displayed");
  navItems[id].classList.add("displayed");
  formerId = id;
};

function handleObserverForNavbar(entries, observerForNavbar) {
  entries.forEach((entry) => {
    entry.isIntersecting && underline(entry.target.dataset.id);
  });
}

/* Gestion de la arrow_top */
/* La flèche apparait quand la photo d'accueil n'est plus visible */
var observerForArrow = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      document.getElementById("arrow_go_to_top").style.display = "none";
    } else {
      document.getElementById("arrow_go_to_top").style.display = "block";
    }
  },
  {
    threshold: [1],
  }
);

observerForArrow.observe(document.querySelector(".first_part"));

/* Version anglaise ou française */
let frenchSelected = document.getElementById("french_selected");
let englishSelected = document.getElementById("english_selected");

let frenchText = document.querySelectorAll(".french_text");
let englishText = document.querySelectorAll(".english_text");

let frenchFlagImg = document.getElementById("french_flag_img");
let englishFlagImg = document.getElementById("english_flag_img");

function languageSelected() {
  let n = 0;
  while (n < frenchText.length || n < englishText.length) {
    if (frenchSelected.checked === true) {
      frenchText[n].style.display = "block";
      englishText[n].style.display = "none";

      frenchFlagImg.style.display = "none";
      englishFlagImg.style.display = "block";

      n++;
    } else {
      englishText[n].style.display = "block";
      frenchText[n].style.display = "none";

      englishFlagImg.style.display = "none";
      frenchFlagImg.style.display = "block";

      n++;
    }
  }
}

if (englishSelected.checked === true) {
  frenchFlagImg.style.display = "block";
  englishFlagImg.style.display = "none";
} else {
  frenchFlagImg.style.display = "none";
  englishFlagImg.style.display = "block";
}

if (englishSelected.checked === true) {
  frenchFlagImg.style.display = "block";
  englishFlagImg.style.display = "none";
} else {
  frenchFlagImg.style.display = "none";
  englishFlagImg.style.display = "block";
}

/*EmailJS*/
function sendMail(params) {
  let templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send(EMAILJS_SERVICE_KEY, EMAILJS_TEMPLATE_KEY, templateParams)
    .then(function (res) {
      console.log("success", res.status);
    });

  alert("Message envoyé avec succès !");
}
