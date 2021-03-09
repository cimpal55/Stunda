const list = document.querySelector('#book-list ul');
const forms = document.forms;

list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});