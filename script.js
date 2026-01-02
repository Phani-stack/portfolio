const form = document.getElementById("contactForm");
const send = document.getElementById("send-message")
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    send.textContent = "Loading..." 
    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" }
        });

        if (response.ok) {
            alert("Message sent successfully!");
            send.textContent = "Send Message";
            form.reset();
        } else {
            alert("Failed to send message.");
            send.textContent = "Send Message"
        }
    } catch (error) {
        alert("Network error. Try again later.");
    }
});
