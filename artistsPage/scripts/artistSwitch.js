document.addEventListener("DOMContentLoaded", () => {
  const artists = [
    { name: "Sabrina Carpenter", page: "sabrina.html" },
    { name: "Tate McRae", page: "tate.html" }
  ];

  const currentPage = window.location.pathname.split("/").pop();
  const currentIndex = artists.findIndex(artist => artist.page === currentPage);
  const nextIndex = (currentIndex + 1) % artists.length;

  const switchLink = document.getElementById("switch-artist");
  if (switchLink) {
    switchLink.href = artists[nextIndex].page;
    switchLink.title = `Go to ${artists[nextIndex].name}`;
  }
});
