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
