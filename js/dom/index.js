const nameInput = document.getElementById('name')
const button = document.getElementById('clickBtn')
const para = document.getElementById('para')
const list = document.getElementById('color-list')

button.addEventListener('click', function () {
  console.log(nameInput.value)
  console.log('button clicked')
  para.style.textAlign = 'center'
  const listItem = document.createElement('p')
  listItem.innerText = nameInput.value
  listItem.style.color = nameInput.value
  para.style.color = nameInput.value
  // document.body.appendChild(listItem)
  list.appendChild(listItem)
})

