// Array of artists and their details
const artists = [
  {
    name: "Tate McRae",
    desc: "Canadian singer known for hits like “greedy” and “she’s all i wanna be.”",
    img: "artistImages/tatemcrae.jpg"
  },
  {
    name: "Olivia Rodrigo",
    desc: "American singer-songwriter known for her emotional lyrics and hits like “vampire.”",
    img: "artistImages/oliviarodrigo.jpg"
  },
  {
    name: "Ariana Grande",
    desc: "Pop powerhouse known for her incredible vocal range and chart-topping hits.",
    img: "artistImages/arianagrande.jpg"
  }
];

// Keep track of which artist is showing
let currentArtist = 0;

// Function to update the display
function showArtist(index) {
  const artist = artists[index];
  document.getElementById("artistName").textContent = artist.name;
  document.getElementById("artistDesc").textContent = artist.desc;
  document.getElementById("artistImg").src = artist.img;
}

// Event listener for the arrow button
document.getElementById("nextArtistBtn").addEventListener("click", () => {
  currentArtist = (currentArtist + 1) % artists.length; // loop back to start
  showArtist(currentArtist);
});
