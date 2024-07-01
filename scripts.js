document.addEventListener('DOMContentLoaded', (event) => {
    const likeButton = document.querySelector('.my-button');
    likeButton.addEventListener('click', () => {
        alert('Thank you for liking!');
        likeButton.textContent = 'Liked';
        likeButton.style.backgroundColor = '#ff467e';
        likeButton.style.cursor = 'default';
        likeButton.disabled = true;
    });
});
