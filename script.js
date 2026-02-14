let images = [
  "images/malenia.webp",
  "images/isshin.webp",
  "images/nameless.webp",
  "images/orphan.jpg",
  "images/radiance.webp",
];



let currentIndex = 0;
function nextImage() {
  let image = document.getElementById("Bosses");

  currentIndex = (currentIndex + 1) % images.length;

  image.src = images[currentIndex];
}
function backImage() {
  let image = document.getElementById("Bosses");

  currentIndex = (currentIndex - 1 + images.length) % images.length;

  image.src = images[currentIndex];
}
function updateGreeting() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("greeting").innerText = "Hello " + name + "!";
}

let darkButton = document.getElementById("darkModeBtn");

if (darkButton) {
  darkButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    let header = document.getElementById("headi");
    if (header) header.classList.toggle("darkheader");

    let nextArrow = document.getElementById("next-arrow");
    if (nextArrow) nextArrow.classList.toggle("darkimage");

    let backArrow = document.getElementById("back-arrow");
    if (backArrow) backArrow.classList.toggle("darkimage");
  });
}

function randomizeBoss() {
  let bosses = [
    "Malenia - Elden Ring",
    "Isshin - Sekiro",
    "Nameless King - Dark Souls III",
    "Orphan of Kos - Bloodborne",
    "Absolute Radiance - Hollow Knight"
  ];

  let randomIndex = Math.floor(Math.random() * bosses.length);

  document.getElementById("randomBoss").innerText =
    "Your opponent is: " + bosses[randomIndex];
}

function rateBoss() {
  let rating = document.getElementById("slider").value;

  if (rating >= 8) {
    document.getElementById("bossRating").innerText =
      "You think this boss is INSANELY hard!";
  } else if (rating >= 5) {
    document.getElementById("bossRating").innerText =
      "Pretty tough boss!";
  } else {
    document.getElementById("bossRating").innerText =
      "You got skills";
  }
}

function toggleFact() {
  let fact = document.getElementById("funFact");

  if (fact.style.display === "none") {
    fact.style.display = "block";
  } else {
    fact.style.display = "none";
  }
}