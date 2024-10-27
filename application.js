document.getElementById('adoptionForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    const occupation = document.getElementById('occupation').value;
    const location = document.getElementById('location').value;
    const Breedselected = document.getElementById('Breed selected').value;
    const anyqueries = document.getElementById('anyqueries').value;
    
    

    // Create a new application entry
    const applicationEntry = document.createElement('div');
    applicationEntry.innerText = Name ,{name}, Age,{age}, Gender,{gender}, Contact,{contact},occupation,{occupation},location,{location},Breedselected,{Breedselected},anyqueries,{anyqueries};

    // Append the entry to the applications list
    document.getElementById('applicationsList').appendChild(applicationEntry);

    // Clear the form
    document.getElementById('adoptionForm').reset();
    
     
    closeAdpotionFormModal();
    alert("Your application has been submitted successfully!");
    setTimeout(() => {
        window.location.href="newhtml";
    },2000);
    
});