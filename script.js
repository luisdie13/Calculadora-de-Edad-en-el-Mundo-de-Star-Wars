document.getElementById("ageForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener la edad ingresada por el usuario
    const humanAge = parseInt(document.getElementById("humanAge").value);

    // Obtener la esperanza de vida de la especie seleccionada
    const speciesLifeExpectancy = parseInt(document.getElementById("species").value);
    const speciesName = document.getElementById("species").selectedOptions[0].text;

    // Calcular la edad equivalente
    const equivalentAge = (humanAge * speciesLifeExpectancy) / 80;

    // Mostrar el resultado
    document.getElementById("selectedSpecies").textContent = speciesName;
    document.getElementById("equivalentAge").textContent = equivalentAge.toFixed(2);
    document.getElementById("result").classList.remove("hidden");
});