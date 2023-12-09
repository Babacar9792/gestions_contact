import { addContact } from "./fetch.js";
import { getAllContact } from "./service.js";


console.log("main is workong");
const btnDelete = document.querySelector('#btn_delete');


btnDelete.addEventListener('click', ()=>{
  addContact();
})
// URL de l'API que vous souhaitez interroger
const url = 'http://localhost:8000/contact/contact';
getAllContact(url);


// Utilisation de la fonction fetch pour effectuer une requête GET

