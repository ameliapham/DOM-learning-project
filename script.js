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
const changeColor = () => {
    newButtonColor.style.backgroundColor = '#da8b4e',
    newButtonColor.style.color = 'white'
}
const revertColor = () => {
    newButtonColor.style.backgroundColor = ''
    newButtonColor.style.color = ''
}
for (i=0; i<newButtonColor.length; i++ ){
    newButtonColor.addEventListener("mouseover", changeColor)
    newButtonColor.addEventListener('mouseout', revertColor)
}

