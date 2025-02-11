document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("lostPetForm");
    const lostPetsList = document.getElementById("lostPetsList");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        const petName = document.getElementById("petName").value;
        const lastSeen = document.getElementById("lastSeen").value;
        const contact = document.getElementById("contact").value;

        if (petName && lastSeen && contact) {
            // Create new list item
            const petItem = document.createElement("div");
            petItem.classList.add("pet-item");
            petItem.innerHTML = `
                <p><strong>Pet Name:</strong> ${petName}</p>
                <p><strong>Last Seen:</strong> ${lastSeen}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <hr>
            `;

            lostPetsList.appendChild(petItem);

            // Show success messages
            showSuccessMessage("Reported Successfully!");
            

            

            // Clear form fields
            form.reset();
        }
    });

    function showSuccessMessage(message) {
        const successMsg = document.createElement("div");
        successMsg.classList.add("success-message");
        successMsg.textContent = message;
        form.appendChild(successMsg);

        setTimeout(() => {
            successMsg.style.opacity = "0";
            setTimeout(() => successMsg.remove(), 500);
        }, 3000);
    }
});
