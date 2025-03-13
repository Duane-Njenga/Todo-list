document.addEventListener("DOMContentLoaded", () => {
    form = document.querySelector('#create-task-form')
    formInput = document.querySelector('#new-task')
    taskList = document.querySelector('#tasks')
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      buildToDo(formInput.value);
      form.reset();
    })
});
  
function buildToDo(todo){
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let clearBtn = document.getElementById("clear-tasks");
    let checkbox =  document.createElement('input')

    checkbox.type = 'checkbox'
    checkbox.className = 'check'

    // Delete Button
    btn.addEventListener('click', deleteTodo)
    btn.textContent = "Delete❌"

    // List
    li.textContent = `${todo} `;
    li.appendChild(btn);
    li.appendChild(checkbox);
    taskList.appendChild(li);

    // Clear all
    clearBtn.addEventListener('click', clearAll)

    // Checkbox
    checkbox.addEventListener('change', done)
};
  
function deleteTodo(e){
    e.target.parentNode.remove();
};
  
function  clearAll(){
  let list = document.querySelectorAll('li')
  for(let item of list){
    item.remove();
  }
};


function done(e){
  let obj = e.target.parentNode
  if (e.target.checked) {
    obj.style.color ='green';
    obj.style.textDecoration = 'line-through';
  } else {
    obj.style.color ='';
    obj.style.textDecoration = '';
  }


}

