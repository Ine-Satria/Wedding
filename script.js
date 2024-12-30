// Mendapatkan elemen halaman dan tombol
const page1 = document.getElementById("wedding-card-1");
const page2 = document.getElementById("wedding-card-2");
const page3 = document.getElementById("wedding-card-3");
const page4 = document.getElementById("wedding-card-4");
const nextPageBtn = document.getElementById("next-page-btn");
const nextPage2Btn = document.getElementById("next-page-2-btn");
const nextPage3Btn = document.getElementById("next-page-3-btn");
const finishBtn = document.getElementById("finish-btn");
const googleMapsBtn = document.getElementById("google-maps-btn");

// Fungsi untuk berpindah halaman
nextPageBtn.addEventListener("click", () => {
  page1.classList.remove("active");
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  page2.classList.add("active");
});

nextPage2Btn.addEventListener("click", () => {
  page2.classList.remove("active");
  page2.classList.add("hidden");
  page3.classList.remove("hidden");
  page3.classList.add("active");
});

nextPage3Btn.addEventListener("click", () => {
  page3.classList.remove("active");
  page3.classList.add("hidden");
  page4.classList.remove("hidden");
  page4.classList.add("active");
});

// Fungsi untuk kembali ke halaman pertama
finishBtn.addEventListener("click", () => {
  page4.classList.remove("active");
  page4.classList.add("hidden");
  page1.classList.remove("hidden");
  page1.classList.add("active");
});

// Tombol Google Maps
googleMapsBtn.addEventListener("click", () => {
  window.open("https://goo.gl/maps/PU5118JaQJB1bFKA9");
});

document.getElementById("google-forms-btn").addEventListener("click", function () {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScJ0jNN7bNmHubgecNoicIwwsKlgt0UOOIzJannDW3UPqKZaQ/viewform?usp=header"; // Ganti dengan URL Google Forms Anda.
  window.location.href = formUrl; // Membuka Google Forms langsung.
});
