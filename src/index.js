

import '../styles.css';

import {Todo,TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';



export const todoList= new TodoList();
todoList.todos.forEach(todo=>crearTodoHtml(todo));  // cuando el argumento es el mismo que vas a madar se pueden oviar la flecha gorda y las llaves  ejemplo: todo.List.todos.forEach (crearTodoHtml);

console.log('todos',todoList.todos);

//const tarea = new Todo('Aprender Java Script!!');

//todoList.nuevoTodo(tarea);
//console.log(todoList);

//crearTodoHtml(tarea);


//localStorage.setItem('mi-key','ABC1234'); // esto es para crear un localStorage
//sessionStorage.setItem('mi-key','ABC123');   // estos irve para agregar un sesionStorage

//setTimeout(()=>{                           esto sirve para eliminar el localStorage
    //localStorage.removeItem('mi-key');
//},1500);