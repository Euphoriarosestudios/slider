document.querySelector('.main-image').onclick = function() {
    const popOutContainer = this.parentElement;
    const popOutImage = this.nextElementSibling;

    // Toggle the active class
    popOutContainer.classList.toggle('active');

    if (popOutContainer.classList.contains('active')) {
        popOutImage.style.display = 'block'; // Show the pop-out
        setTimeout(() => {
            popOutImage.style.opacity = '1'; // Make it fully visible
        }, 10); // Small delay for smooth transition
    } else {
        popOutImage.style.opacity = '0'; // Fade out the pop-out
        setTimeout(() => {
            popOutImage.style.display = 'none'; // Hide it after fade out
        }, 100); // Wait for the transition to finish
    }
};
<script>
    function changeSlide(slideIndex) {
        console.log("Slide changed to:", slideIndex);
    }

    // JavaScript to change the image on hover
    const button = document.querySelector('.image-button');
    const img = button.querySelector('.swap-img');

    button.addEventListener('mouseenter', function() {
        img.src = "images/(P12) Carnation.png"; // Change image on hover
    });

    button.addEventListener('mouseleave', function() {
        img.src = "images/buttons png.png"; // Change back on mouse leave
    });
</script>
