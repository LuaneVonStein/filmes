// Film Database
const filmes = [
    {
        title: "Cosmic Journey",
        description: "An epic adventure across the stars. A team of astronauts embarks on a dangerous mission to save humanity.",
        image: "public/space-movie-poster.jpg", // Changed from absolute to relative path
        background: "public/cosmic-space-nebula-stars.jpg"
    },
    {
        title: "City Lights",
        description: "A crime thriller set in the neon-lit streets of a metropolis. Follow Detective Maria as she uncovers a conspiracy.",
        image: "public/noir-city-movie-poster.jpg",
        background: "public/city-lights-neon-noir.jpg"
    },
    {
        title: "Ocean's Secret",
        description: "Dive deep into an underwater mystery. A marine biologist discovers an ancient civilization beneath the waves.",
        image: "public/ocean-underwater-movie.jpg",
        background: "public/ocean-blue-underwater.jpg"
    },
    {
        title: "Last Frontier",
        description: "Survival in the Arctic. When a research station loses contact, a rescue team must brave the harsh elements.",
        image: "public/arctic-survival-movie.jpg",
        background: "public/snowy-arctic-landscape.jpg"
    },
    {
        title: "Time Echo",
        description: "A scientist discovers she can communicate through time. Unravel the mystery before reality collapses.",
        image: "public/sci-fi-time-movie.jpg",
        background: "public/time-dimension-abstract.jpg"
    },
    {
        title: "Fire Heart",
        description: "A firefighter's redemption. Against all odds, one woman fights to save her city from a devastating inferno.",
        image: "public/action-fire-movie.jpg",
        background: "public/intense-fire-flames.jpg"
    },
    {
        title: "Silent Forest",
        description: "In a world gone quiet, one survivor must find the truth. A haunting tale of isolation and discovery.",
        image: "public/mystery-forest-movie.jpg",
        background: "public/dark-mysterious-forest.jpg"
    },
    {
        title: "Aurora Rising",
        description: "When the sky turns green, humanity faces its greatest test. A story of hope and resilience.",
        image: "public/aurora-lights-movie.jpg",
        background: "public/placeholder.svg?height=900&width=1600"
    }
];

let currentFilmeIndex = 0;

// Initialize the page
function init() {
    populateCarousel();
    setHero(0);
}

// Populate carousel with film posters
function populateCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    filmes.forEach((filme, index) => {
        const poster = document.createElement('div');
        poster.className = 'filme-poster' + (index === 0 ? ' active' : '');
        poster.style.backgroundImage = `url('${filme.image}')`;
        poster.addEventListener('click', () => setHero(index));
        carousel.appendChild(poster);
    });
}

// Update hero section
function setHero(index) {
    currentFilmeIndex = index;
    const filme = filmes[index];

    // Update background
    const hero = document.getElementById('hero');
    hero.style.backgroundImage = `linear-gradient(to top, rgba(13, 13, 15, 0.8), rgba(0, 0, 0, 0.5)), url('${filme.background}')`;

    // Update text content with fade animation
    const titleElement = document.getElementById('heroTitle');
    const descriptionElement = document.getElementById('heroDescription');

    titleElement.style.animation = 'none';
    descriptionElement.style.animation = 'none';

    // Trigger reflow to restart animation
    void titleElement.offsetWidth;
    void descriptionElement.offsetWidth;

    titleElement.textContent = filme.title;
    descriptionElement.textContent = filme.description;

    titleElement.style.animation = 'fadeIn 0.6s ease-out';
    descriptionElement.style.animation = 'fadeIn 0.8s ease-out';

    // Update active poster
    updateActivePosters();
}

// Update active state on posters
function updateActivePosters() {
    const posters = document.querySelectorAll('.filme-poster');
    posters.forEach((poster, index) => {
        poster.classList.toggle('active', index === currentFilmeIndex);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        setHero((currentFilmeIndex - 1 + filmes.length) % filmes.length);
    } else if (e.key === 'ArrowRight') {
        setHero((currentFilmeIndex + 1) % filmes.length);
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
