// Show the recommendations based on the questionnaire
function showRecommendations(event) {
    event.preventDefault();

    // Collect user selections
    const petType = document.getElementById("petType").value;
    const petAge = document.getElementById("petAge").value;
    const temperament = document.getElementById("petTemperament").value;

    console.log("User Selections:", { petType, petAge, temperament });

    // Show recommendations section and hide questionnaire
    document.getElementById("questionnaire").style.display = "none";
    document.getElementById("recommendations").style.display = "block";
    document.getElementById("searchSection").style.display = "block";

    // Filter and display recommended pets based on questionnaire inputs
    const petCards = document.getElementsByClassName("pet-card");
    let hasMatches = false;
    Array.from(petCards).forEach((card) => {
        const matchesType = petType === "all" || card.dataset.type === petType;
        const matchesAge = petAge === "all" || card.dataset.age === petAge;
        const matchesTemperament = temperament === "all" || card.dataset.temperament === temperament;

        if (matchesType && matchesAge && matchesTemperament) {
            card.style.display = "block";
            hasMatches = true;
        } else {
            card.style.display = "none";
        }
    });

    console.log("Has matches in recommendations:", hasMatches);

    // Show the pet list only if there are matching pets
    document.getElementById("petList").style.display = hasMatches ? "flex" : "none";
}

// Filter pets based on search and filters
function filterPets() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase();
    const typeFilter = document.getElementById("typeFilter").value;
    const ageFilter = document.getElementById("ageFilter").value;
    const locationFilter = document.getElementById("locationFilter").value;

    console.log("Filtering Pets:", { searchValue, typeFilter, ageFilter, locationFilter });

    // Filter through pet cards based on the search and filter criteria
    const petCards = document.getElementsByClassName("pet-card");
    let hasMatches = false;
    Array.from(petCards).forEach((card) => {
        const matchesSearch = card.textContent.toLowerCase().includes(searchValue);
        const matchesType = typeFilter === "all" || card.dataset.type === typeFilter;
        const matchesAge = ageFilter === "all" || card.dataset.age === ageFilter;
        const matchesLocation = locationFilter === "all" || card.dataset.location === locationFilter;

        if (matchesSearch && matchesType && matchesAge && matchesLocation) {
            card.style.display = "block";
            hasMatches = true;
        } else {
            card.style.display = "none";
        }
    });

    console.log("Has matches in search:", hasMatches);

    // Show the pet list only if there are matching pets
    document.getElementById("petList").style.display = hasMatches ? "flex" : "none";
}
