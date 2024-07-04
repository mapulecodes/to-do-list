document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.querySelector('.add-btn');
  const sortButton = document.querySelector('.sort-btn');
  const todoInput = document.querySelector('.todo-input');
  const todoList = document.querySelector('.todo-list');

  addButton.addEventListener('click', addItem);
  sortButton.addEventListener('click', sortItems);

  function addItem() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const li = document.createElement('li');
      li.textContent = todoText;
      li.classList.add('todo-item');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', deleteItem);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
      todoInput.value = '';
    }
  }

  function deleteItem() {
    this.parentNode.remove();
  }

  function sortItems() {
    const itemsArray = Array.from(todoList.children);
    const sortedItems = itemsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
    todoList.innerHTML = '';
    sortedItems.forEach(item => todoList.appendChild(item));
  }
});
