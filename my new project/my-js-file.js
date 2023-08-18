const taskContainer = document.querySelector(".task__container");
const globalStore =[];
console.log(taskContainer);
const saveChanges = () => {
  const taskData = {
  id: `${Date.now()}`,
  imageurl:document.getElementById("image_url").value,
  tasktitle:document.getElementById("task_title").value,
  tasktype:document.getElementById("task_type").value,
  taskdescription:document.getElementById("task_description").value,
}

const newCard = `
     <div class="col col-lg-4 col-md-6 col-sm-12 "  id = ${taskData.id} >
         <div class="card">
             <div class="card-header d-flex justify-content-end gap-2">
                 <button type="button" class="btn btn-success"><i class="fa-solid fa-pencil"></i></button>
                 <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
             </div>
             <div class="card-body">
                <img src="${taskData.imageurl}" class="image_card">
                <br>
               <h5 class="card-title fw-bold text-primary">${taskData.tasktitle}</h5>
               <p class="card-text">${taskData.tasktype}</p>
               <a href="#" class="btn btn-primary">${taskData.taskdescription}</a>
             </div>
           </div>
     </div>
  </div>;
  `;

taskContainer.insertAdjacentHTML("beforeend",newCard);
globalStore.push(taskData);
//localStorage.setItem("tasky",globalStore);//this is objec and object now we have to convert object into arrays for which we use json
localStorage.setItem("tasky", JSON.stringify({card:globalStore}));
};