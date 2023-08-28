const btnAddTask = document.querySelector("#addTask");
const modal = document.querySelector("#myModal") as HTMLDialogElement;

btnAddTask?.addEventListener('click', ()=>{
    modal?.classList.add("modal-show");
    modal.style.display = "flex";
})

const btnCancelModal = document.querySelector("#cancelModal");

const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay?.addEventListener('click', closeModal);

btnCancelModal?.addEventListener('click', ()=>{
    modal.classList.remove("modal-show");
    modal.classList.add("modal-hide");
    setTimeout(() => {
        modal.style.display ="none";
        modal.classList.remove("modal-hide");
    }, 800); 
})

function closeModal() {
    modal.classList.remove("modal-show");
    modal.classList.add("modal-hide");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("modal-hide");
    }, 800); 
}

type Task = {
    title:string,
    description:string,
    completed:string,
    important:string,
    custom:string,
    color:string
}

function printTask(task:Task){
    localStorage.getItem("titleTask");
    localStorage.getItem("descriptionTask");
    localStorage.getItem("completedTask");
    localStorage.getItem("importantTask");
    localStorage.getItem("customListTask");
    localStorage.getItem("colorTask");

    let mainCheck = document.querySelector("#checkMain");
    let maintitle = document.querySelector("#titleMainTask");
    let mainImportant = document.querySelector("#importantMain");
}


function getInfoTask(task:Task) {
    let titleTask = document.querySelector('#title') as HTMLInputElement;
    let descriptionTask = document.querySelector('#description') as HTMLTextAreaElement;
    let completedTask = document.querySelector('#completed') as HTMLInputElement;
    let importantTask = document.querySelector('#important') as HTMLInputElement;
    let customListTask = document.querySelector('#customList') as HTMLInputElement;
    let colorTask = document.querySelector('#taskColor') as HTMLSelectElement;
    
    localStorage.setItem("titleTask", titleTask.value);
    localStorage.setItem("descriptionTask", descriptionTask.value);
    localStorage.setItem("completedTask",completedTask.value);
    localStorage.setItem("importantTask",importantTask.value);
    localStorage.setItem("customListTask",customListTask.value);
    localStorage.setItem("colorTask", colorTask.value);
}


let submitTask = document.querySelector('#submitTask');

// submitTask?.addEventListener('click', getInfoTask);
function init(){
    printTask;
}