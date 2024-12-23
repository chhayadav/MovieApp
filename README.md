# MovieApp

MovieApp is a web application that allows users to search, browse, and rate movies from the [TMDB API](https://developers.themoviedb.org/3).

## Features

- **Home page**: Displays a list of popular movies and a search bar to find movies by title.
- **Movie details page**: Shows the poster, title, overview, genres, release date, runtime, and rating of a selected movie. Users can also see the rating of the movie on a scale of 1 to 10.
- **Favorites page**: Shows the movies that the user has rated and added to their favorites list.
- **Genres page**: Shows the movies grouped by genre.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and lightweight frontend development tool.
- **Redux**: A state management library for React applications.

## Installation

To run the application locally, follow these steps:

1. Clone this repository: `git clone https://github.com/Rahul00154/MovieApp.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root directory and add your TMDB API key: `VITE_TMDB_API_KEY=your_api_key`
4. Start the development server: `npm run dev`
5. Open http://localhost:3000 in your browser.
