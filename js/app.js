/**
 * WEB222 – Assignment 06
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Majid Seifi Kashani
 *      Student ID: 181487232
 *      Date:       Dec 05, 2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// Function to format duration from seconds to mm:ss
function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

// Function to convert language codes to full names
function formatLanguages(langCodes) {
  const languageNames = new Intl.DisplayNames(["en"], { type: "language" });
  return langCodes.map((code) => languageNames.of(code)).join(", ");
}

// Function to show songs for a specific artist
function showArtist(artistId) {
  const selectedArtist = document.getElementById("selected-artist");
  const artistLinks = document.getElementById("artist-links");
  const songsContainer = document.getElementById("songs-container");

  // Find the selected artist
  const artist = artists.find((a) => a.artistId === artistId);
  if (!artist) return;

  // Update artist name
  selectedArtist.textContent = artist.name;

  // Clear and update artist links
  artistLinks.innerHTML = "";
  artistLinks.appendChild(document.createTextNode(" ( "));
  artist.links.forEach(({ url, displayName }, index) => {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = displayName;
    link.target = "_blank";
    artistLinks.appendChild(link);
    if (index < artist.links.length - 1) {
      artistLinks.appendChild(document.createTextNode(", "));
    }
  });
  artistLinks.appendChild(document.createTextNode(" )"));

  // Clear songs container
  songsContainer.innerHTML = "";

  // Filter songs: only shows artist's non-explicit songs
  const artistSongs = songs.filter(
    (song) => song.artistId === artistId && !song.explicit
  );

  // Create cards for each song
  artistSongs.forEach((song) => {
    // Create card div
    const card = document.createElement("div");
    card.className = "song-card";

    // Add song image that links to song
    const imageLink = document.createElement("a");
    imageLink.href = song.link;
    imageLink.target = "_blank";

    const img = document.createElement("img");
    img.src = song.imageUrl;
    img.alt = song.title;

    imageLink.appendChild(img);
    card.appendChild(imageLink);

    // Add song title
    const title = document.createElement("h3");
    title.textContent = song.title;
    card.appendChild(title);

    // Add song info
    const info = document.createElement("div");
    info.className = "song-info";
    info.innerHTML = `
            <p>Year: ${song.year}</p>
            <p>Duration: ${formatDuration(song.length)}</p>
            <p>Language: ${formatLanguages(song.lang)}</p>
        `;
    card.appendChild(info);

    // Add card to container
    songsContainer.appendChild(card);
  });
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Create artist buttons
  const menu = document.getElementById("menu");

  artists.forEach((artist) => {
    const button = document.createElement("button");
    button.textContent = artist.name;
    button.addEventListener("click", () => showArtist(artist.artistId));
    menu.appendChild(button);
  });

  // Add the Request New Artist link
  const requestLink = document.createElement("a");
  requestLink.href = "request-artist.html";
  requestLink.textContent = "Request New Artist";
  requestLink.style.marginLeft = "20px";
  menu.appendChild(requestLink);

  // Show the first artist by default
  if (artists.length > 0) {
    showArtist(artists[0].artistId);
  }
});
