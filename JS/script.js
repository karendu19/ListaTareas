
function agregarTarea(){
    // obtenemos el valor del campo de la tarea
    let nuevaTareaTexto=document.getElementById("nuevaTarea").value;
    // validamos que el valor no sea vacio
    if(nuevaTareaTexto===""){
        alert("Ingrese una tarea");
        return;
    }
    // crear elemento en la lista
    let nuevaTarea=document.createElement("li");

    nuevaTarea.textContent = nuevaTareaTexto +" ";

    //crear boton eliminar
    let botonEliminar=document.createElement("button");
    botonEliminar.textContent="Eliminar";
    botonEliminar.onclick =function(){
        nuevaTarea.remove();
    }

    //agregar boton de eliminar a elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //agregar el elemento/la tarea a ala lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    // limpiar el cuadro tecto del nombre de la tarea
    document.getElementById("nuevaTarea").value="";
}