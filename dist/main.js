"use strict";
const btnAddTask = document.querySelector("#addTask");
const modal = document.querySelector("#myModal");
btnAddTask === null || btnAddTask === void 0 ? void 0 : btnAddTask.addEventListener('click', () => {
    modal === null || modal === void 0 ? void 0 : modal.classList.add("modal-show");
    modal.style.display = "flex";
});
const btnCancelModal = document.querySelector("#cancelModal");
const modalOverlay = document.querySelector(".modal-overlay");
modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.addEventListener('click', closeModal);
btnCancelModal === null || btnCancelModal === void 0 ? void 0 : btnCancelModal.addEventListener('click', () => {
    modal.classList.remove("modal-show");
    modal.classList.add("modal-hide");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("modal-hide");
    }, 800);
});
function closeModal() {
    modal.classList.remove("modal-show");
    modal.classList.add("modal-hide");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("modal-hide");
    }, 800);
}
let submitTask = document.querySelector('#submitTask');
submitTask === null || submitTask === void 0 ? void 0 : submitTask.addEventListener('click', getInfoTask);
function getInfoTask() {
    let titleTask = document.querySelector('#title');
    let descriptionTask = document.querySelector('#description');
    let completedTask = document.querySelector('#completed');
    let importantTask = document.querySelector('#important');
    let customListTask = document.querySelector('#customList');
    let colorTask = document.querySelector('#taskColor');
    localStorage.setItem("titleTask", titleTask.value);
    localStorage.setItem("descriptionTask", descriptionTask.value);
    localStorage.setItem("completedTask", completedTask.value);
    localStorage.setItem("importantTask", importantTask.value);
    localStorage.setItem("customListTask", customListTask.value);
    localStorage.setItem("colorTask", colorTask.value);
}
