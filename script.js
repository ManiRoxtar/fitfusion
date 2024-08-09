document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-tab');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            tabs.forEach(t => t.classList.remove('active'));
            
            document.getElementById(target).classList.add('active');
            this.classList.add('active');
        });
    });

    // Default Active Tab
    document.querySelector('.tab[data-tab="home"]').click();

    // Personalization Toggle
    const toggle = document.getElementById('toggle-personalization');
    const cardContainer = document.getElementById('card-container');

    const zaynCards = [
        { img: 'images/zayn1.jpg', link: 'Product Link 1', brand: 'Brand A' },
        { img: 'images/zayn2.jpg', link: 'Product Link 2', brand: 'Brand B' },
        { img: 'images/zayn3.jpg', link: 'Product Link 3', brand: 'Brand C' }
    ];

    const ananyaCards = [
        { img: 'images/ananya1.jpg', link: 'Product Link 1', brand: 'Brand D' },
        { img: 'images/ananya2.jpg', link: 'Product Link 2', brand: 'Brand E' },
        { img: 'images/ananya3.jpg', link: 'Product Link 3', brand: 'Brand F' }
    ];

    function generateCards(cards) {
        cardContainer.innerHTML = '';
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <img src="${card.img}" alt="Product Image">
                <p>${card.link}</p>
                <p>${card.brand}</p>
            `;
            cardContainer.appendChild(cardElement);
        });
    }

    toggle.addEventListener('change', function() {
        if (this.checked) {
            generateCards(ananyaCards);
        } else {
            generateCards(zaynCards);
        }
    });

    // Default Personalization State
    generateCards(zaynCards);

    // Fitting Section
    const sizeButtons = document.querySelectorAll('.size-btn');
    const fittingImage = document.getElementById('fitting-image');

    const sizeImages = {
        S: 'images/size-s.jpg',
        M: 'images/size-m.jpg',
        L: 'images/size-l.jpg',
        XL: 'images/size-xl.jpg',
        XXL: 'images/size-xxl.jpg'
    };

    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const size = this.getAttribute('data-size');
            fittingImage.src = sizeImages[size];
        });
    });
});
