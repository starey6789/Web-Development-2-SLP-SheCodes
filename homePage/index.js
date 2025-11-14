document.addEventListener('DOMContentLoaded', () => {
    const artistContainer = document.getElementById("artist").getElementsByClassName("scrollmenu")[0];
    const venueContainer = document.getElementById("venue").getElementsByClassName("scrollmenu")[0];

    function populate(){
        if (!artistContainer || !venueContainer) return;
        for (let i = 0; i < 10; i++){
            artistContainer.innerHTML += `<div class="card">Artist...</div>`;
            venueContainer.innerHTML += `<div class="card">Venue...</div>`;
        }
    }

    populate();
});

let bg = document.getElementById("background");
let crowd = document.getElementById("crowd");
let header = document.getElementById("text");

let rates = {
    bg: 0.05,
    crowd:0.5,
  }

  const handleScroll = () => {
    let scrollDistance = window.scrollY;
  
    bg.style.top = scrollDistance * rates.bg + 'px';
    crowd.style.top = scrollDistance * rates.crowd + 'px';
  }

  window.addEventListener('scroll', handleScroll)