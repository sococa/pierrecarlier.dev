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

/* My work page */

// let appearOnHover = document.querySelectorAll(".appear_on_hover");

// document.getElementById("test").addEventListener(
//     "click",
//     function(){

//     }
// );

/* smtp js */
// function sendEmail(){

//     const email = document.getElementsByClassName('email')
//     const message = document.getElementsByClassName('message')

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "pierrocarlier@gmail.com",
//         Password: "DF3F9E88F1C9662578AA16EE8C6C6B7606C8",
//         To: email.value,
//         From: "pierrocarlier@gmail.com",
//         Subject: "This is the subject",
//         Body: message.value
//     }).then(
//         message => alert(message)
//     )
// }


