 function creatLine(tbody, contact) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
   
    <td>
        <input type="checkbox" name="" id="${contact['id']}">
    </td>
    <td>${contact['prenom']}</td>
    <td>${contact['nom']}</td>
    <td>${contact["libelle"]}</td>
    <td>1</td>
`;
    tbody.appendChild(tr);
}

export function createList(data, tbody){
    data.forEach(element => {
        creatLine(tbody, element);
    });

}
