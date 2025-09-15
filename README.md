📰 News Headlines App

A simple React-based application that fetches and displays news-like data using the JSONPlaceholder API.
The app initially shows the first 5 headlines, with functionality to show more (5 at a time) and hide back to the first 5.

🚀 Features

📦 Fetches posts dynamically from JSONPlaceholder API
.

🔄 Show/Hide functionality:

Displays 5 headlines at a time.

On clicking Show More, next 5 are displayed.

On clicking Hide, only the first 5 are shown again.

📱 Fully responsive UI (mobile, tablet, desktop).

⚠️ Error handling & loading states for better UX.

🎨 Styled with CSS (hover effects, button transitions, responsiveness).

🛠️ Tech Stack

React.js (functional components, hooks)

JavaScript (ES6+)

CSS3 (responsive + transitions)

Fetch API for data fetching

📂 Project Structure
news-headlines-app/
│
├── src/
│   ├── Components/
│   │   ├── List.jsx          # Displays single news item
│   │   ├── Button.jsx        # Reusable button component
│   │
│   ├── App.jsx               # Main app logic (fetch, state, UI)
│   ├── App.css               # Styling
│   ├── index.js              # Entry point
│
├── public/                   # Static files
├── package.json
└── README.md

⚡ How to Run Locally

Clone the repository:

git clone https://github.com/sayaliwagal/News-Feed.git


Navigate into the project:

cd news-headlines-app


Install dependencies:

npm install


Run the development server:

npm start


Open your browser at:

http://localhost:3000

📸 Screenshots

Desktop View


Mobile View