document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  const submit = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)")

  submit.addEventListener('click', (e) =>{
    e.preventDefault() //prevents the submit side-effect
    renderToDo(e.target.parentElement.children[1].value) //grabs the textfield value
    form.reset() //resets our form textfield.
  })

  // console.log("FORM: ", form, " \n\nSUBMIT: ", submit)
});

function renderToDo(task){
  const listItem = document.createElement('li')
  const btn = document.createElement('button')
  btn.addEventListener('click', (e) => {
    e.target.parentElement.remove() 
  })
  listItem.textContent = `${task} `
  btn.textContent = "X"
  listItem.append(btn)
  document.querySelector('#tasks').append(listItem)
}