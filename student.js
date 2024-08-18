// script.js
function navigateTo(page) {
    switch (page) {
        case 'register':
            window.location.href = 'register.html';
            break;
        case 'login':
            window.location.href = 'login.html';
            break;
        case 'search-teacher':
            window.location.href = 'search-teacher.html';
            break;
        case 'book-appointment':
            window.location.href = 'book-appointment.html';
            break;
        default:
            console.error(`Unknown page: ${page}`);
    }
}

function sendMessage() {
    // Add send message functionality here
    alert("Message sent successfully!");
}
