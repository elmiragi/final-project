document.addEventListener('DOMContentLoaded', function() {
    const hiddenImg = document.getElementById('hiddenImg');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hiddenImg.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });


    const viewCollectionBtn = document.getElementById('viewCollectionBtn');
    const cardsContainer = document.getElementById('cardWrapper');

    viewCollectionBtn.addEventListener('click', () => {

    const clonedCards = cardsContainer.cloneNode(true);

    cardsContainer.parentNode.insertBefore(clonedCards, viewCollectionBtn);

    viewCollectionBtn.classList.add('hidden');
    });

    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const errorElement = document.getElementById('error-message');
        
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailRegex.test(email)) {
          errorElement.textContent = 'Введите корректный email';
          errorElement.style.display = 'block';
        } else {
          errorElement.style.display = 'none';
        }
      });
});
