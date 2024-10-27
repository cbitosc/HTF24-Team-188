// Function to open the message modal
function openMessageModal(supplierEmail) {
    document.getElementById("supplierEmail").value = supplierEmail; // Set the email in the modal
    document.getElementById("messageModal").style.display = "block"; // Show the modal
}

// Function to close the message modal
function closeMessageModal() {
    document.getElementById("messageModal").style.display = "none"; // Hide the modal
}

// Function to send the message
function sendMessage(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const supplierEmail = document.getElementById("supplierEmail").value;
    const messageText = document.getElementById("messageText").value;

    // Here you can implement your logic to send the message
    // For example, you could use fetch to send this data to your server

    console.log(`Message sent to ${supplierEmail}: ${messageText}`);

    // Show a success message (you can replace this with a more user-friendly approach)
    alert("Message sent successfully!");

    // Close the modal
    closeMessageModal();

    // Optionally, you can clear the message textarea
    document.getElementById("messageText").value = ""; 
}


// Event listener for clicks outside the modal to close it
window.onclick = function(event) {
    const modal = document.getElementById("messageModal");
    if (event.target == modal) {
        closeMessageModal();
    }
};
