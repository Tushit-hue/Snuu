// Handle page transitions
function navigate(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    document.getElementById(pageId).classList.add('active');
}

// Handle the response to the proposal
function handleResponse(answer) {
    const responseMessage = document.getElementById('response-message');
    if (answer === 'Yes') {
        responseMessage.innerHTML = "<p>Yay! 💖 You’ve made me the happiest person alive! I can't wait to start this beautiful journey with you!</p>";
    } else {
        responseMessage.innerHTML = "<p>That's okay... I'll always cherish the memories we’ve made. No matter what, you'll always have a special place in my heart.</p>";
    }
}

// Initialize the first page to be active
document.getElementById('page1').classList.add('active');