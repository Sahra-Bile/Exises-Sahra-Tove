 import axios from 'axios'; 
import { ITodos } from './modules/todos';
console.log("hej"); 
const array: string[] = ["Sahra", "Tove", "Jasika", "Sebastian"];

 array.push("Liyana");
 console.log(array);
  

  const url = "https://jsonplaceholder.typicode.com/todos/1";
   axios.get(url).then(Response =>{
    const todo = Response.data as ITodos;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id,title, completed)
   });
   const logTodo  = (id:number, title:string, completed:boolean) =>{
    console.log(
     `The todo with Id: ${id} 
     has  title of: ${title} 
     It is finished? ${completed}
   `);
   
   }


    
     function printName(firstName:string, lastName:string):string{
       return ` my name is ${lastName} ${firstName} ,${lastName}`;

     }
    console.log( printName("Tove" , "Boson"));