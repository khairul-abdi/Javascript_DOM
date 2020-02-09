const addButton = document.querySelector('.addButton')
let input = document.querySelector('.input')
const container = document.querySelector('.container')

class item {
  constructor(itemName) {
    // Create the item div
    this.createDiv(itemName)
  }

  createDiv(itemName) {
    let input = document.createElement('input') 
    input.value = itemName
    input.disabled = true
    input.classList.add('item_input')
    input.type = "text"

    let itemBox = document.createElement('div')
    itemBox.classList.add('item')
    
    let editButton = document.createElement('button')
    editButton.classList.add('editButton')
    let iEdit = document.createElement('i')
    iEdit.classList.add('fas')
    iEdit.classList.add('fa-edit')
    editButton.appendChild(iEdit)


    let removeButton  = document.createElement('button')
    removeButton.classList.add('removeButton')
    let iRemove = document.createElement('i')
    iRemove.classList.add('fas')
    iRemove.classList.add('fa-trash-alt')
    removeButton.appendChild(iRemove)

    container.appendChild(itemBox)

    itemBox.appendChild(input)
    itemBox.appendChild(editButton)
    itemBox.appendChild(removeButton)

    editButton.addEventListener('click', () => this.edit(input))
  
    removeButton.addEventListener('click', () => this.remove(itemBox))
  }

  edit(input) {
    input.disabled = !input.disabled
    input.focus()
  }

  remove(item) {
    container.removeChild(item)
  }
}

function check() {
  if (input.value != "") {
    new item(input.value)
    input.value = ""
  }
}

addButton.addEventListener('click', check)

window.addEventListener('keydown', (e) => {
  if(e.which === 13) {
    check()
  }
})