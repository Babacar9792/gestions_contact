import { createList } from "./function.js";


const tbody = document.querySelector("tbody");
let contacts = [];
export async function getFetch(url){
     try {
        const response = await fetch(url);
        const data = await response.json();
        contacts = data["data"];
        tbody.innerHTML = "";
        createList(contacts, tbody);
        console.log(contacts);
        
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
}

export function addContact(){
    contacts.unshift({
        id : 22,
        prenom : "fghj",
        "nom" : "hjk",
        libelle : 1
    });
    console.log(contacts);
}