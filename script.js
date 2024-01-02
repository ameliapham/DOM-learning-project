// Styling element --------------------
const title = document.querySelector('#main-heading')
title.style.color = '#000000' 

const ul = document.querySelector('ul')
const li = document.createElement('li')
ul.append(li)

li.innerText = 'Sherlock Homes ss5'
// li.setAttribute('class', 'list-items')
li.classList.add('list-items') // Add element `li` to list `list-items`

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

const moreInfoButton = document.querySelector("#btn1")
const hiddenContent = document.querySelector(".hidden-content")
moreInfoButton.addEventListener('click', () => {
    hiddenContent.classList.toggle('show')
    if (hiddenContent.classList.contains('show')){
        moreInfoButton.innerText= 'Less information'
    } else {
        moreInfoButton.innerText= 'More information'
    }
})
