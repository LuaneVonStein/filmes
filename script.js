const FILMS = [
  {
    titulo: "Barbie (2023)",
    descricao: "Barbie vive uma aventura inspiradora e cheia de cor.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
    background: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
  },
  {
    titulo: "Oppenheimer",
    descricao: "Biografia de J. Robert Oppenheimer, pai da bomba atômica.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg",
    background: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg"
  },
  {
    titulo: "Interestelar",
    descricao: "Uma viagem épica através do espaço e do tempo para salvar a humanidade.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Interstellar_Filme.png/250px-Interstellar_Filme.png",
    background: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Interstellar_Filme.png/250px-Interstellar_Filme.png"
  },
{
  titulo: "A Origem",
  descricao: "Um ladrão habilidoso entra nos sonhos das pessoas para roubar segredos e implantar ideias.",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/84/AOrigemPoster.jpg/250px-AOrigemPoster.jpg",
  background: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/84/AOrigemPoster.jpg/250px-AOrigemPoster.jpg"
},

{
  titulo: "Meu Malvado Favorito",
  descricao: "Alguém rouba umas das pirâmides do Egito, e isso instiga Gru, o protagonista, ou melhor vilão, a realizar um roubo maior do que esse.",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/7f/Despicable_Me_poster.jpg/250px-Despicable_Me_poster.jpg",
  background: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/7f/Despicable_Me_poster.jpg/250px-Despicable_Me_poster.jpg"
},

{
  titulo: "Perdido em Marte",
  descricao: "Um astronauta é deixado para trás em Marte e precisa usar sua engenhosidade para sobreviver.",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e7/Martian_poster_2015.jpg/250px-Martian_poster_2015.jpg",
  background: "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e7/Martian_poster_2015.jpg/250px-Martian_poster_2015.jpg"
},

{
  titulo: "Blade Runner 2049",
  descricao: "Um novo blade runner descobre um segredo capaz de mergulhar a sociedade no caos.",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/af/Blade_Runner_2049.png/250px-Blade_Runner_2049.png",
  background: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/af/Blade_Runner_2049.png/250px-Blade_Runner_2049.png"
}

];

let currentIndex = 0;

function renderCarousel() {
  const carousel = document.getElementById('carousel');
  carousel.innerHTML = '';

  FILMS.forEach((film, index) => {
    const poster = document.createElement('div');
    poster.className = 'filme-poster' + (index === 0 ? ' active' : '');
    poster.style.backgroundImage = `url('${film.imagem}')`;
    poster.addEventListener('click', () => updateHero(index));
    carousel.appendChild(poster);
  });
}

function updateHero(index) {
  currentIndex = index;
  const film = FILMS[index];
  const hero = document.getElementById('hero');
  const title = document.getElementById('heroTitle');
  const desc = document.getElementById('heroDescription');

  hero.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.4)), url('${film.background}')`;

  title.style.opacity = 0;
  desc.style.opacity = 0;

  setTimeout(() => {
    title.textContent = film.titulo;
    desc.textContent = film.descricao;
    title.style.opacity = 1;
    desc.style.opacity = 1;
  }, 150);

  updateActivePoster();
}

function updateActivePoster() {
  document.querySelectorAll('.filme-poster').forEach((poster, index) => {
    poster.classList.toggle('active', index === currentIndex);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    updateHero((currentIndex - 1 + FILMS.length) % FILMS.length);
  } else if (event.key === 'ArrowRight') {
    updateHero((currentIndex + 1) % FILMS.length);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderCarousel();
  updateHero(0);
});
