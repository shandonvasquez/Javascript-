//agregar una funcion que agregue lo que el clinete escriba en el input 
//a la lista de tareas

add.events.addEventListner('click', function(){
    var task = document.getElementById('task').value;
    addTask(task);
}                   
);



