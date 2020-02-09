const addButton = document.querySelector('.addButton')
const valueInput = document.querySelector('.input')

addButton.addEventListener('click', () => {
  const container = document.querySelector('.container')
  // Membuat Div Item 
  const itemBox = document.createElement('div')
  itemBox.setAttribute('class', 'item')

  // Membuat Input 
  const input = document.createElement('input')
  input.classList.add('item_input')
  input.setAttribute('value', valueInput.value)
  input.disabled = true

  // Membuat Button Edit
  const edit = document.createElement('button')
  edit.classList.add('editButton')
  const iEdit = document.createElement('i')
  iEdit.classList.add('fas')
  iEdit.classList.add('fa-edit')
  edit.appendChild(iEdit)

  // Membuat Button Remove
  const remove = document.createElement('button')
  remove.classList.add('removeButton')
  const iRemove = document.createElement('i')
  iRemove.classList.add('fas')
  iRemove.classList.add('fa-trash-alt')
  remove.appendChild(iRemove)


  itemBox.appendChild(input)
  itemBox.appendChild(edit)
  itemBox.appendChild(remove)
  
  container.appendChild(itemBox)

  //Clean Input
  valueInput.value = ''
})


const editButton = document.querySelectorAll('.editButton')

if (editButton.length > 0) {
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', function() {
      const editInput = document.querySelectorAll('.item_input')[i]

      editInput.disabled = false
      editInput.focus()
      editButton[i].addEventListener('click', function() {
        editInput.disabled = true  
      })
    })
  }
}