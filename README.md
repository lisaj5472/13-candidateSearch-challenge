# Candidate Search Challenge - LJ

## Description
This project is a **React + TypeScript** application developed as part of a coding challenge. It demonstrates core front-end concepts including **API integration**, **component-based design**, **state management**, and **localStorage**. The goal of this challenge was to build a dynamic interface that pulls data from GitHub's public API, allows users to interact with candidates, and persist selections across sessions.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Installation
To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   git clone https://github.com/lisaj5472/13-candidateSearch-challenge.git

2. **Navigate into the project directory:**
   cd React-Challenge-LJ

3. **Install dependencies:**
   npm install

4. **Start the development server:**
   npm start

5. **Create a .env fie at the root of the project and add your GitHub token:**
    VITE_GITHUB_TOKEN=your_github_token_here

6. **Start the development server:**
    npm run dev

   The application will be available at `http://localhost:5173/`.

## Usage
- Visit the Candidate Search page to view one GitHub user at a time.
- Use the "+" button to save a candidate to your list.
- Use the "-" button to skip to the next candidate.
- Navigate to the Saved Candidates page to view a table of your saved profiles.
- Remove candidates using the 🗑️ icon.
- Data is stored in localStorage and persists across page refreshes.

## Technologies Used
- **React.js**
- **TypeScript**
- **Vite**
- **HTML5 & CSS3**
- **GitHub REST API**
- **Node.js & npm**

## Features
- GitHub API integration with secure environment variables.
- Candidate data rendered one profile at a time.
- Save/remove candidate functionality with real-time UI updates.
- Persistent state using localStorage.
- Fully responsive and accessible UI using semantic HTML.

## Future Enhancements
- Add filtering or tagging to organize saved candidates.
- Include loading indicators or animations.
- Improve styling using Tailwind CSS or CSS Modules.
- Integrate a backend database for long-term persistence.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the **MIT License**.

## Acknowledgements
I would like to express my gratitude to the **University of Denver Software Development Bootcamp** – for providing a strong foundation in full-stack development and for the starter code used in this project.

## Contact
For any questions or feedback, feel free to reach out:
**GitHub: lisaj5472**
**Email: lisaj5472@gmail.com**