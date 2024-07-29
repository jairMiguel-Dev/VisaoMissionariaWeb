        // Toggle menu on click
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menuItems = document.getElementById('menu-items');
            menuItems.classList.toggle('active');
            this.classList.toggle('active');
        });
    
        // Close menu when a menu item is clicked
        document.querySelectorAll('#menu-items a').forEach(item => {
            item.addEventListener('click', function() {
                const menuItems = document.getElementById('menu-items');
                const menuToggle = document.getElementById('menu-toggle');
                menuItems.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    
        function generatePixKey() {
    const pixKeys = [
        'igreja@gmail.com',
        '41993939393'
    ];
    return pixKeys[Math.floor(Math.random() * pixKeys.length)];
}

document.getElementById('generate-pix').addEventListener('click', () => {
    const pixKey = generatePixKey();
    document.getElementById('pix-key').textContent = pixKey;
    document.getElementById('pix-key-container').style.display = 'block';
});


    
        function toggleFAQ(index) {
            const answer = document.getElementById(`faq${index}`);
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        }
    
        function showStudyDetails(index) {
            const studyDetails = document.getElementById(`study${index}`);
            studyDetails.style.display = studyDetails.style.display === 'none' ? 'block' : 'none';
        }
    
        let slideIndex = 1;
        showSlides(slideIndex);
    
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
    
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
    
        function showSlides(n) {
            let i;
            const slides = document.getElementsByClassName("mySlides");
            const dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            if (slides[slideIndex - 1]) {
                slides[slideIndex - 1].style.display = "block";
            }
            if (dots[slideIndex - 1]) {
                dots[slideIndex - 1].className += " active";
            }
        }
    
        document.getElementById('toggle-images').addEventListener('click', function() {
        const moreImages = document.querySelector('.more-images');
        const button = this;

        if (moreImages.style.display === 'none' || moreImages.style.display === '') {
            moreImages.style.display = 'grid';
            button.textContent = 'Ver menos';
        } else {
            moreImages.style.display = 'none';
            button.textContent = 'Ver mais';
        }
    });