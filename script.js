const inputAgregarTarea = document.querySelector("#nueva-tarea");
const inputNumeroTareaBuscar = document.querySelector("#num-tarea");

const inputNumActualizar = document.querySelector("#num-tarea-actualizar"); 
const inputTxtActualizar = document.querySelector("#txt-tarea-actualizar"); 

const inputTareaEliminar = document.querySelector("#num-tarea-eliminar");

const CLAVE_TAREAS= "Tarea";
let listaTareas= "lista vacia";


 /**
  * Inicia la lista de tareas contado al localstorage
  */
function iniciarListaTareas(){
 listaTareas = JSON.parse(localStorage.getItem(CLAVE_TAREAS));
console.log(listaTareas);
if (listaTareas === null) {
    listaTareas = [];
    localStorage.setItem(CLAVE_TAREAS,JSON.stringify(listaTareas));
}

    crearListaTareas();

}

function actualizarLocalStorage() {
    localStorage.setItem(CLAVE_TAREAS,JSON.stringify(listaTareas));
}
/**
 * genera la lista de tareas en la pagina
 */
function crearListaTareas() {
    document.querySelector("ol").innerHTML = "";
    listaTareas.forEach(tarea => {
        document.querySelector("ol").innerHTML += `
    <li> ${tarea} </li>
   `;
    });
}

/**
 * añade una tarea a una lista ordenada
 */
function agregarTarea(){ 
    
    let nuevaTarea = inputAgregarTarea.value;
    document.querySelector("ol").innerHTML += `
     <li> ${nuevaTarea} </li>
    `;

   
    listaTareas.push(nuevaTarea);
    localStorage.setItem(CLAVE_TAREAS, JSON.stringify(listaTareas));
}
/**
 * Busca por numero y imprime la tarea 
 */
function buscar() {
    document.querySelector("#tarea-buscada").innerHTML = `
    <span>Tarea buscada</span>
            <h4>${listaTareas[inputNumeroTareaBuscar.value - 1]} </h4>
    `;
    
}

/**
 * Actualiza una tarea dependiendo el numero que se elija
 */
function actualizar() {
    let posTarea = inputNumActualizar.value;
    let txtNuevaTarea = inputTxtActualizar.value;

    listaTareas[posTarea - 1] = txtNuevaTarea;

    crearListaTareas();    
    actualizarLocalStorage();
}

/**
 * elimina una tarea
 */
function eliminar() {
    let posTareaEliminar = inputTareaEliminar.value - 1;
    listaTareas.splice(posTareaEliminar,1);

    crearListaTareas();    
    actualizarLocalStorage();
}

/**
 * Elimina toda la lista de tareas
 */
function eliminarTodo() {
listaTareas = [];
crearListaTareas();    
actualizarLocalStorage();

}

iniciarListaTareas();