// Add an event listener to track scroll position
document.addEventListener("scroll", function() {
    // Get the scroll position
    var scrollPosition = window.scrollY;

    // Set a threshold value based on your design
    var threshold = 200;

    // Toggle the display property of the footer based on the scroll position
    if (scrollPosition > threshold) {
        document.querySelector('footer').style.display = 'none';
    } else {
        document.querySelector('footer').style.display = 'flex';
    }
    
});
