const todoList = [
	{ name: "make dinner", dueDate: "2025-02-25" },
	{ name: "wash dishes", dueDate: "2025-02-25" },
];

renderTodoList();

function renderTodoList() {
	let todoListHTML = "";

	todoList.forEach((todoObject, index) => {
		const name = todoObject.name;
		const dueDate = todoObject.dueDate;
		const html = `
		<div>${name}</div>
			<div>${dueDate} </div>
			<button onclick="
			todoList.splice(${index}, 1);
			renderTodoList();
			" class="delete-todo-button js-delete-todo-button">Delete</button>
		`;

		todoListHTML += html;
	});

	console.log(todoList);
	document.querySelector(".js-todo-list").innerHTML = todoListHTML;

	document.querySelectorAll(".js-delete-todo-button");
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
	addTodo();
});

function addTodo() {
	const inputElement = document.querySelector(".js-name-input");
	inputElement.value;
	const name = inputElement.value;

	const dateInputElement = document.querySelector(".js-due-date");

	const dueDate = dateInputElement.value;

	todoList.push({
		name: name,
		dueDate: dueDate,
	});
	console.log(todoList);

	inputElement.value = "";

	renderTodoList();
}
