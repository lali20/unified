// script.js
function navigateTo(page) {
    switch (page) {
        case 'schedule':
            window.location.href = 'schedule.html';
            break;
        case 'approve-appointment':
            window.location.href = 'approve-appointment.html';
            break;
        case 'view-messages':
            window.location.href = 'view-messages.html';
            break;
        case 'view-appointments':
            window.location.href = 'view-appointments.html';
            break;
        default:
            console.error(`Unknown page: ${page}`);
    }
}

function logout() {
    // Add logout functionality here
    alert("You have been logged out!");
    window.location.href = 'login.html';
}