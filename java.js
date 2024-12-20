document.getElementById("registrationForm1").addEventListener("submit", function(event) {
    event.preventDefault();

    const Name = document.getElementById("Name").value;
    const Correo = document.getElementById("Correo").value;
    const Mensaje = document.getElementById("Mensaje").value;

    console.log(Name, Correo, Mensaje);

    const tableBody1 = document.getElementById("tableBody1");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${Name}</td>
        <td>${Correo}</td>
        <td>${Mensaje}</td>
    `;
    
    tableBody1.appendChild(newRow);

    document.getElementById("confirmationTable1").style.display = "block";

    document.getElementById("registrationForm1").reset();
});