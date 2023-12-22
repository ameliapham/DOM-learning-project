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