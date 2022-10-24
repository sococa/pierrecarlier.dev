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
console.log(targets)

targets.forEach(target => {
    console.log(target)
    observer.observe(target)
})

const underline = id => {
    navItems[formerId].classList.remove('displayed')
    navItems[id].classList.add('displayed')
    formerId = id
}

function handleObserver(entries, observer){
    entries.forEach(entry => {
      entry.isIntersecting && underline(entry.target.dataset.id)
    })
}