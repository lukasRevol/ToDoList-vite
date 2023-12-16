import './style.scss';

// ---------- VARIABLES
// inputs
const addInput = document.querySelector('.add_box_input');
const editInput = document.querySelector('.popup_input');

// buttons
const addBtn = document.querySelector('.add_box_btn');
const editAcceptBtn = document.querySelector('.popup-accept-btn');
const editCancelBtn = document.querySelector('.popup-decline-btn');

// containers
const taskBox = document.querySelector('.list_box');
const popup = document.querySelector('.popup');

// content
let taskListItem, taskTitle

// ---------- FUNCTIONS
// clear inputs
const clrInputs = () => {
	addInput.value = '';
	editInput.value = '';
};

//function creates new 'DIV' in DOM inside taskBox
const addTask = () => {
	if (addInput.value !== '') {
		const taskItem = document.createElement('div');
		taskItem.classList.add('list_box_item');
		taskItem.innerHTML = `<p class="item-title">${addInput.value}</p>
  <div class="item_btn-box">
    <button class="item-btn add-btn">doned</button>
    <button class="item-btn edit-btn">edit</button>
    <button class="item-btn delete-btn">delete</button>
  </div>`;
		taskBox.appendChild(taskItem);
		clrInputs();
		addInput.placeholder = 'Great job! add MORE!';
	} else {
		addInput.placeholder = 'you must add task title';
	}
};

const showPopup = () => {
  popup.classList.add('popup-show')
};
const hidePopup = () => {
  popup.classList.remove('popup-show')
};

const taskItemMenu = (e) => {
  hidePopup();
	if (e.target.matches('.add-btn')) {
    taskListItem = e.target.closest('.list_box_item');
    taskTitle = taskListItem.querySelector('.item-title');
    taskTitle.classList.toggle('doned')
	}
	if (e.target.matches('.edit-btn')) {
    showPopup();
    taskListItem = e.target.closest('.list_box_item');
    taskTitle = taskListItem.querySelector('.item-title');
    editInput.value = taskTitle.textContent
	}
	if (e.target.matches('.delete-btn')) {
    hidePopup();
		e.target.closest('.list_box_item').remove();
	}
};

const changeTitle = () => {
  taskTitle.textContent = editInput.value
  hidePopup();
}

// ---------- LISTENERS
// add button listener
addBtn.addEventListener('click', addTask);

// listner on task list container - function looking for item with specific class
taskBox.addEventListener('click', taskItemMenu);

editAcceptBtn.addEventListener('click', changeTitle);
editCancelBtn.addEventListener('click', hidePopup);