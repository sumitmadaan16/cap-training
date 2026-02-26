var addBtn = document.getElementById("addbtn");
var newTaskInput = document.getElementById("newTask");
var tasksContainer = document.getElementById("tasks");
var searchInput = document.getElementById("search");
var titleElement = document.getElementById("title");
var editTitleBtn = document.getElementById("editTitle");
editTitleBtn.onclick = function () {
    var newTitle = prompt("Enter new title:", titleElement.textContent || "");
    if (newTitle && newTitle.trim() !== "") {
        titleElement.textContent = newTitle;
    }
};
function createTask(taskText) {
    var taskDiv = document.createElement("div");
    taskDiv.className = "task";
    var radioBtn = document.createElement("button");
    radioBtn.className = "radio";
    radioBtn.textContent = "○";
    radioBtn.onclick = function () {
        radioBtn.textContent = radioBtn.textContent === "○" ? "✔" : "○";
        taskDiv.classList.toggle("completed");
    };
    var taskLabel = document.createElement("span");
    taskLabel.textContent = taskText;
    var editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "edit";
    editBtn.onclick = function () {
        var newText = prompt("Edit task:", taskLabel.textContent || "");
        if (newText && newText.trim() !== "") {
            taskLabel.textContent = newText;
        }
    };
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "x";
    deleteBtn.onclick = function () {
        tasksContainer.removeChild(taskDiv);
    };
    taskDiv.append(radioBtn, taskLabel, editBtn, deleteBtn);
    tasksContainer.appendChild(taskDiv);
}
addBtn.onclick = function () {
    var taskText = newTaskInput.value.trim();
    if (taskText) {
        createTask(taskText);
        newTaskInput.value = "";
    }
};
newTaskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        var taskText = newTaskInput.value.trim();
        if (taskText) {
            createTask(taskText);
            newTaskInput.value = "";
        }
    }
});
searchInput.oninput = function () {
    var query = searchInput.value.toLowerCase();
    var tasks = tasksContainer.querySelectorAll(".task");
    tasks.forEach(function (task) {
        var _a;
        var text = (((_a = task.querySelector("span")) === null || _a === void 0 ? void 0 : _a.textContent) || "").toLowerCase();
        task.style.display = text.indexOf(query) !== -1 ? "flex" : "none";
    });
};
