document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let fbPageId = "61571030908344"; // Replace with your actual Facebook Page ID
    let flavor = document.getElementById("flavor").value;
    let size = document.getElementById("size").value;
    let message = document.getElementById("message").value;

    let text = `Hello! I'd like to order a ${size} ${flavor} cake. Custom message: "${message}".`;
    
    let messengerUrl = `https://m.me/${fbPageId}?text=${encodeURIComponent(text)}`;

    window.location.href = messengerUrl; // Redirect user to Messenger
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            document.getElementById("success-message").style.display = "block";
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    }).catch(error => alert("Error: " + error));
});