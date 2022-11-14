/* Intersection observer */
const navItems = document.querySelectorAll(".nav_item");
let formerId = 0;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
};

const observer = new IntersectionObserver(handleObserver, options);

const targets = document.querySelectorAll(".slider_bloc");

targets.forEach(target => {
    observer.observe(target);
})

const underline = id => {
    navItems[formerId].classList.remove('displayed');
    navItems[id].classList.add('displayed');
    formerId = id;
}

function handleObserver(entries, observer) {
    entries.forEach(entry => {
        entry.isIntersecting && underline(entry.target.dataset.id);
    })
}


/* Gestion de la arrow_top */
/* La flèche apparait quand la photo d'accueil n'est plus visible */
var observer_arrow = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
        document.getElementById("arrow_go_to_top").style.display = "none"
    }
    else {
        document.getElementById("arrow_go_to_top").style.display = "block"
    }
}, { 
    threshold: [1] 
})

observer_arrow.observe(document.querySelector("h1"))


/* Version anglaise ou française */
function languageSelected() {

    let frenchSelected = document.getElementById('french_selected')
    let frenchText = document.getElementsByClassName('french_text')
    let englishText = document.getElementsByClassName('english_text')

    let n = -1
    while (n < frenchText.length || n < englishText.length) {
        n++
        if(frenchSelected.checked === true) {
            frenchText[n].style.display = "block"
            englishText[n].style.display = "none"
        }
        else {
            englishText[n].style.display = "block"
            frenchText[n].style.display = "none"
        }
    }
}