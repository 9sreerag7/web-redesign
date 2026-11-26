
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const toast = document.getElementById("toast");

// Notification message
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// Wikipedia search
function searchWikipedia(term) {
  const query = term.trim();

  if (!query) {
    showToast("Type something you are curious about first.");
    searchInput.focus();
    return;
  }

  const url =
    "https://en.wikipedia.org/w/index.php?search=" +
    encodeURIComponent(query);

  window.open(url, "_blank", "noopener,noreferrer");
}

// Search form
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchWikipedia(searchInput.value);
});

// Popular searches
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    const term = button.dataset.search;
    searchInput.value = term;
    searchWikipedia(term);
  });
});

// Dark and light mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const dark = document.body.classList.contains("dark");

  document.getElementById("themeToggle").textContent =
    dark ? "☀" : "☾";

  showToast(dark ? "Dark mode enabled" : "Light mode enabled");
});

// Mobile navigation
document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");
});

// Close mobile navigation after clicking a link
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".main-nav").classList.remove("open");
  });
});

// Random Wikipedia article
document.getElementById("randomArticle").addEventListener("click", () => {
  window.open(
    "https://en.wikipedia.org/wiki/Special:Random",
    "_blank",
    "noopener,noreferrer"
  );
});

// Close announcement
document.querySelector(".announcement-close").addEventListener("click", () => {
  document.querySelector(".announcement").remove();
});
