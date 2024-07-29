document.addEventListener('DOMContentLoaded', () => {
    const verseElement = document.getElementById('verse');

    async function fetchVerse() {
        try {
            const response = await fetch('https://www.abibliadigital.com.br/api/verses/nvi/random', {
                headers: { 'Authorization': 'Bearer SEU_TOKEN' }
            });
            const data = await response.json();
            verseElement.textContent = `${data.text} - ${data.book.name} ${data.chapter}:${data.number}`;
        } catch (error) {
            verseElement.textContent = 'Não foi possível carregar o versículo. Tente novamente mais tarde.';
        }
    }

    fetchVerse();

    const titheForm = document.getElementById('tithe-form');
    titheForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(titheForm);
        const data = Object.fromEntries(formData);

        // Aqui você pode adicionar o código para enviar os dados para um backend ou serviço de pagamento

        alert(`Obrigado, ${data.name}, pelo seu dízimo de R$${data.amount}.`);
    });
});

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
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function showStudyDetails(index) {
    const details = document.getElementById(`study${index}`);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

function toggleFAQ(index) {
    const answer = document.getElementById(`faq${index}`);
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}
