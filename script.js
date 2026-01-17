// Function to change the main image when a thumbnail is clicked
function changeImage(thumbnail, imageSrc) {
    // Update the main image source
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
    
    // Remove 'active' class from all thumbnails
    const allThumbnails = document.querySelectorAll('.thumbnail');
    allThumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Add 'active' class to the clicked thumbnail
    thumbnail.classList.add('active');
}

// Function to scroll thumbnails left or right
function scrollThumbnails(direction) {
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    const scrollAmount = 200; // Scroll 200px at a time
    
    if (direction === -1) {
        // Scroll left (previous thumbnails)
        thumbnailGrid.scrollLeft -= scrollAmount;
    } else {
        // Scroll right (next thumbnails)
        thumbnailGrid.scrollLeft += scrollAmount;
    }
}