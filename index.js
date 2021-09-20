const nav = document.getElementById("nav_menu")
const burger = document.getElementById("burger")
let isActive = false
const arrRef = [
    ['🧙', '#top'],
    ['📰', '#personal'],
    ['📚', '#education'],
    ['💼', '#exp'],
    ['</>', '#code'],
    ['📋', '#project'],
    ['📢', '#lang']
];

function createRef(str) {
    let ref = document.createElement('a')
    ref.href = str[1]
    ref.innerText = str[0]
    return ref
}

function burgerClick() {
    if (isActive) {
        let arrA = nav.querySelectorAll('a')
        arrA.forEach((el) => { el.remove() })
        isActive = false
    } else {
        let fragment = document.createElement('div')
        arrRef.forEach((el) => { fragment.appendChild(createRef(el)) })
        nav.appendChild(fragment)
        isActive = true
    }


}
burger.addEventListener("click", burgerClick)