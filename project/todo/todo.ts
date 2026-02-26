const addBtn = document.getElementById("addbtn") as HTMLButtonElement;
const newTaskInput = document.getElementById("newTask") as HTMLInputElement;
const tasksContainer = document.getElementById("tasks") as HTMLDivElement;
const searchInput = document.getElementById("search") as HTMLInputElement;
const titleElement = document.getElementById("title") as HTMLHeadingElement;
const editTitleBtn = document.getElementById("editTitle") as HTMLButtonElement;

editTitleBtn.onclick = () => {
  const newTitle = prompt("Enter new title:", titleElement.textContent || "");
  if (newTitle && newTitle.trim() !== "") {
    titleElement.textContent = newTitle;
  }
};
function createTask(taskText: string) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  const radioBtn = document.createElement("button");
  radioBtn.className = "radio";
  radioBtn.textContent = "○";
  radioBtn.onclick = () => {
    radioBtn.textContent = radioBtn.textContent === "○" ? "✔" : "○";
    taskDiv.classList.toggle("completed");
  };

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;
  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.textContent = "edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskLabel.textContent || "");
    if (newText && newText.trim() !== "") {
      taskLabel.textContent = newText;
    }
  };
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "x";
  deleteBtn.onclick = () => {
    tasksContainer.removeChild(taskDiv);
  };
  taskDiv.append(radioBtn, taskLabel, editBtn, deleteBtn);
  tasksContainer.appendChild(taskDiv);
}

addBtn.onclick = () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    createTask(taskText);
    newTaskInput.value = "";
  }
};
newTaskInput.addEventListener("keypress", (event: KeyboardEvent) => {
    if (event.key === "Enter") { 
        const taskText = newTaskInput.value.trim();
        if (taskText) { 
            createTask(taskText); newTaskInput.value = ""; 
        } 
    }
});

searchInput.oninput = () => {
  const query = searchInput.value.toLowerCase();
  const tasks = tasksContainer.querySelectorAll(".task");
  tasks.forEach(task => {
    const text = (task.querySelector("span")?.textContent || "").toLowerCase();
    (task as HTMLElement).style.display = text.indexOf(query) !== -1 ? "flex" : "none";
  });
};
