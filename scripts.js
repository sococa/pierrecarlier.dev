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


/* smtp js */
/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
function sendEmail(){

    const email = document.getElementsByClassName('email')
    const message = document.getElementsByClassName('message')
     
    Email.send({
         Host: "smtp.elasticemail.com",
         Username: "pierrocarlier@gmail.com",
         Password: "DF3F9E88F1C9662578AA16EE8C6C6B7606C8",
         To: 'pierrocarlier@gmail.com',
         From: "pierrocarlier@gmail.com",
         Subject: "This is the subject",
         Body:'message'
     }).then(
         message => alert(message)
     )
 }


