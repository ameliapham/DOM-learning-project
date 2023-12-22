const title = document.querySelector('#main-heading')
title.style.color = '#000000' 

const listItems = document.querySelectorAll('.list-items')
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '20px'
}

const ul = document.querySelector('ul')
const li = document.createElement('li')

ul.append(li)