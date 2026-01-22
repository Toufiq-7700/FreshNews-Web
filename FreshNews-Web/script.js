const API_KEY = "d37906f4d7664dff849682245fb2cf23";
const newsContainer = document.getElementById("newsContainer");
const filterButtons = document.querySelectorAll(".filter-btn");
const themeToggle = document.getElementById("themeToggle");

let currentCategory = "general";

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  themeToggle.innerHTML = theme === "light" ? "🌙" : "☀️";
}

// News Fetching Logic
async function fetchNews(category = "general") {
  currentCategory = category;

  // Update active state of buttons
  filterButtons.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Show loading state
  newsContainer.innerHTML = `
    <div class="loading">
      <div class="loader"></div>
      <p>Fetching latest news...</p>
    </div>
  `;

  // Scroll to top of news container
  const filtersOffset = document.querySelector('.filters-container').offsetTop;
  window.scrollTo({ top: filtersOffset - 10, behavior: 'smooth' });

  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=12&apiKey=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status === "ok") {
      if (data.articles.length === 0) {
        newsContainer.innerHTML = "<p class='loading'>No news found for this category.</p>";
      } else {
        displayNews(data.articles);
      }
    } else {
      newsContainer.innerHTML = `<p class='loading'>Failed to load news: ${data.message || 'Unknown error'}</p>`;
    }
  } catch (error) {
    newsContainer.innerHTML = "<p class='loading'>Error fetching news. Please check your connection.</p>";
    console.error("Error:", error);
  }
}

function displayNews(articles) {
  newsContainer.innerHTML = "";

  articles.forEach(article => {
    if (!article.title) return;

    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${article.urlToImage || 'https://images.unsplash.com/photo-1504711432869-efd597cdd042?q=80&w=1000&auto=format&fit=crop'}" alt="${article.title}" loading="lazy">
      </div>
      <div class="news-content">
        <h3>${article.title}</h3>
        <p>${article.description || "Click 'Read More' to see the full story and stay updated with the latest developments on this topic."}</p>
        <a href="${article.url}" target="_blank">Read Full Article</a>
      </div>
    `;

    newsContainer.appendChild(card);
  });
}

// Event Listeners
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    if (category !== currentCategory) {
      fetchNews(category);
    }
  });
});

themeToggle.addEventListener("click", toggleTheme);

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  fetchNews("general");
});
