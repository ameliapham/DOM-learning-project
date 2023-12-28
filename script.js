// Styling element --------------------
const title = document.querySelector('#main-heading')
title.style.color = '#000000' 

const ul = document.querySelector('ul')
const li = document.createElement('li')
ul.append(li)

li.innerText = 'Sherlock Homes ss5'
// li.setAttribute('class', 'list-items')
li.classList.add('list-items')

const listItems = document.querySelectorAll('.list-items')
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '20px'
}

li.remove()

// Event Listeners --------------------
const eventBtn2 = document.querySelector("#btn2")
// const alertBtn = () => alert('Hello')
eventBtn2.addEventListener("click", () => alert('Hello Minimazing World'))

const newButtonColor = document.querySelectorAll(".button")
const changeColor = (event) => {
    event.target.style.backgroundColor = '#da8b4e',
    event.target.style.color = 'white'
}
const revertColor = (event) => {
    event.target.style.backgroundColor = ''
    event.target.style.color = ''
}
newButtonColor.forEach(button => {
    button.addEventListener("mouseover", changeColor)
    button.addEventListener('mouseout', revertColor)
})