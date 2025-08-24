const Games = document.getElementById("Games")

function setTheme(){
    Games.classList.toggle("home");
}

const slider = document.getElementById('slider');
    const slides = slider.children;
    let index = 0;

    setInterval(() => {
      index = (index + 1) % slides.length; // Loop back to first image
      slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);