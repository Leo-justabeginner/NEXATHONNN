function handleOption(option) {
    let response = "";

    switch (option) {
        case "Lost Pet":
            response = "I'm so sorry! 💔 Try searching in your neighborhood, post on social media, and check local shelters.";
            break;
        case "Pet Safety":
            response = "Keep your pet safe by using ID tags, securing your yard, and avoiding toxic foods!";
            break;
        case "Adopt a Pet":
            response = "You can adopt a pet from local shelters or online adoption websites! 🐾";
            break;
        case "Pet Diet":
            response = "It depends on the pet! Dogs love protein-rich diets, while cats need taurine in their food. 🥩";
            break;
        default:
            response = "I'm not sure about that, but I'd love to help!";
    }

    addMessage("bot", response);
}

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();

    if (message !== "") {
        addMessage("user", message);
        inputField.value = "";
        setTimeout(() => {
            addMessage("bot", "That's a great question! But I'm still learning. 🐶");
        }, 1000);
    }
}

function addMessage(sender, text) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
