# FreshNews-Web
Fresh News is a modern, responsive news aggregator built with vanilla HTML, CSS, and JS. It features real-time headlines via NewsAPI, category-based filtering (Technology, Sports, etc.), and a persistent Dark/Light mode. Designed with a clean, premium aesthetic and smooth transitions for an optimal headlines reading experience.# Fresh News - Dynamic News Aggregator

A modern, responsive news aggregator that provides real-time headlines from around the world. Built with vanilla web technologies, it features a clean UI, category-based filtering, and a seamless Dark/Light mode experience.


## ✨ Features
- **Dynamic Fetching:** Fetches latest news headlines using the NewsAPI.
- **Category Filtering:** Easily browse news in categories like Technology, Business, Sports, Science, and more.
- **Dark/Light Mode:** Persistent theme toggle with a smooth transition.
- **Responsive Design:** Optimized for mobile, tablet, and desktop screens.
- **Modern UI:** Built with Google Fonts (Poppins), CSS variables, and glassmorphism-inspired elements.

## 🛠️ Tech Stack
- **HTML5:** Semantic structure.
- **CSS3:** Advanced styling, CSS variables, and responsive layouts.
- **JavaScript (Vanilla):** DOM manipulation, Fetch API, and theme persistence via `localStorage`.
- **API:** [NewsAPI.org](https://newsapi.org/)

## 📦 How to Download and Run

### 1. Download the Project
You can get the code in two ways:

- **Option A: Clone with Git (Recommended)**
  ```bash
  git clone https://github.com/Toufiq-7700/FreshNews-Web.git
  ```
- **Option B: Download ZIP**
  - Click the green **Code** button at the top of the GitHub repository.
  - Select **Download ZIP**.
  - Extract the files to a folder on your computer.

### 2. Setup your API Key
- Sign up at [NewsAPI.org](https://newsapi.org/) to get your free API key.
- Open `script.js` in a text editor.
- Find the line `const API_KEY = "your_key_here";` and replace it with your actual key.

### 3. Run the Project
> [!IMPORTANT]
> Because of NewsAPI security policies, this project **must** be run on a local server (localhost) to see the news.

- **Option A: VS Code (Easiest)**
  - Install the **Live Server** extension.
  - Right-click `index.html` and select **Open with Live Server**.
- **Option B: Python (Simple command)**
  - Open a terminal in the project folder and run:
    ```bash
    python -m http.server 8000
    ```
  - Open `http://localhost:8000` in your browser.
- **Option C: Node.js (serve package)**
  - Run `npx serve` in the project folder.

## 📸 Preview
<img width="1802" height="1365" alt="image" src="https://github.com/user-attachments/assets/885842d8-b8ae-48bc-8279-aa99e25d72c0" />

