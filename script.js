document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let fbPageId = "100089788621796"; // Replace with your actual Facebook Page ID
    let flavor = document.getElementById("flavor").value;
    let size = document.getElementById("size").value;
    let message = document.getElementById("message").value;

    let text = `Hello! I'd like to order a ${size} ${flavor} cake. Custom message: "${message}".`;
    
    let messengerUrl = `https://m.me/${fbPageId}?text=${encodeURIComponent(text)}`;

    window.location.href = messengerUrl; // Redirect user to Messenger
});