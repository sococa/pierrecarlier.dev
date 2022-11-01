/* Intersection observer */
const navItems = document.querySelectorAll(".nav_item")
let formerId = 0

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
}

const observer = new IntersectionObserver(handleObserver, options)

const targets = document.querySelectorAll(".slider_bloc")

targets.forEach(target => {
    observer.observe(target)
})

const underline = id => {
    navItems[formerId].classList.remove('displayed')
    navItems[id].classList.add('displayed')
    formerId = id
}

function handleObserver(entries, observer) {
    entries.forEach(entry => {
        entry.isIntersecting && underline(entry.target.dataset.id)
    })
}

/* smtp js */
function sendEmail(){

    const email = document.getElementsByClassName('email')
    const message = document.getElementsByClassName('message')

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "pierrocarlier@gmail.com",
        Password: "DF3F9E88F1C9662578AA16EE8C6C6B7606C8",
        To: email.value,
        From: "pierrocarlier@gmail.com",
        Subject: "This is the subject",
        Body: message.value
    }).then(
        message => alert(message)
    )
}

/* services page */
const img1 = document.getElementsByClassName('img1')
const img2 = document.getElementsByClassName('img2')
const img3 = document.getElementsByClassName('img3')
const img4 = document.getElementsByClassName('img4')
const img5 = document.getElementsByClassName('img5')
const img6 = document.getElementsByClassName('img6')

const paragraphe1 = document.getElementsByClassName('paragraphe1')
const paragraphe2 = document.getElementsByClassName('paragraphe2')
const paragraphe3 = document.getElementsByClassName('paragraphe3')
const paragraphe4 = document.getElementsByClassName('paragraphe4')
const paragraphe5 = document.getElementsByClassName('paragraphe5')
const paragraphe6 = document.getElementsByClassName('paragraphe6')
const h3 = document.getElementsByTagName('h3')
console.log(h3)

img1.addEventListener(
    "mouseover", 
    function(e){
        e.style.color = 'red'
    }
)