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

/* Pagination my work */
const paginationNumbers = document.getElementById("pagination_numbers");
const paginatedList = document.getElementById("paginated_list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next_button");
const prevButton = document.getElementById("prev_button");

const paginationLimit = 6;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

//Rend les flèches cliquables ou non cliquables
const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

//bouton désactivé si pas possible de naviguer vers page précédente ou suivante
const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

// mise en évidence du numéro de page actuellement affiché e
const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination_number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

//Crée les numéros de page (button)
const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination_number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

// génère les boutons de pagination en fonction du nombre total de pages et les ajoute au conteneur
const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

// permet de définir la page actuelle et met à jour l'affichage des éléments paginés, les boutons de pagination et les boutons "Précédent" et "Suivant".
const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination_number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
