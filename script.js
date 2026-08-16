document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Fitur Klik Kartu Kategori Satwa
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const namaSatwa = card.getAttribute('data-species');
            
        });
    });

    // 2. Smooth Scroll Navigasi Menu & Link Dropdown
    const menuLinks = document.querySelectorAll('.nav-links a, .dropdown-content a');
    menuLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // Memposisikan kartu target di tengah layar
                });

                // Menambahkan efek kilasan (highlight) pada kartu yang dituju
                targetSection.style.transform = "scale(1.05)";
                targetSection.style.transition = "transform 0.5s ease";
                setTimeout(() => {
                    targetSection.style.transform = "scale(1)";
                }, 600);
            }
        });
    });

    // 3. Kontrol Audio Pemutar Suara Satwa
    const audioButtons = document.querySelectorAll('.btn-audio');
    audioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const audioElement = document.getElementById(targetId);

            if (!audioElement.paused) {
                audioElement.pause();
                audioElement.currentTime = 0;
                this.innerHTML = "🔊 Putar Suara";
                this.classList.remove('playing');
            } else {
                document.querySelectorAll('audio').forEach(audio => {
                    audio.pause();
                    audio.currentTime = 0;
                });
                audioButtons.forEach(btn => {
                    btn.innerHTML = "🔊 Putar Suara";
                    btn.classList.remove('playing');
                });

                audioElement.play().catch(error => {
                    console.log("Pemutaran audio diblokir atau gagal:", error);
                });
                this.innerHTML = "⏱️ Berhentikan";
                this.classList.add('playing');
            }

            audioElement.onended = () => {
                this.innerHTML = "🔊 Putar Suara";
                this.classList.remove('playing');
            };
        });
    });
    
});
