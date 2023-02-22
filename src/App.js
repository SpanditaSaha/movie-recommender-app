import "./styles.css";
import React from "react";
import { useState } from "react";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
</style>;

var movieGenre = {
  "Rom-Com": [
    { name: "You People (2023)", rating: "5.5" },
    { name: "Puss in Boots: The Last Wish (2022)", rating: "7.9" },
    { name: "Shotgun Wedding (2022)", rating: "5.4" },
    { name: "Your Place or Mine (2023)", rating: "5.6" },
    { name: "Somebody I Used to Know (2023)", rating: "5.7" },
    { name: "Rosaline (2022)", rating: "6.4" },
    { name: "Thor: Love and Thunder (2022)", rating: "6.3" },
    { name: "Ticket to Paradise (2022)", rating: "6.2" },
    { name: "La La Land (2016)", rating: "8.0" },
    { name: "Puss in Boots (2011)", rating: "7.9" }
  ],

  Thriller: [
    { name: "The Dark Knight (2008)", rating: "9.0" },
    { name: "Inception (2010)", rating: "8.8" },
    { name: "Seven (1995)", rating: "8.6" },
    { name: "The Silence of the Lambs (1991)", rating: "8.6" },
    { name: "Parasite (2019)", rating: "8.5" },
    { name: "The Departed (2006)", rating: "8.5" },
    { name: "The Prestige (2006)", rating: "8.5" },
    { name: "Leon (1994)", rating: "8.5" },
    { name: "The Usual Suspects (1995)", rating: "8.5" },
    { name: "Psycho (1960)", rating: "8.5" }
  ],

  Horror: [
    { name: "Knock at the Cabin (2023)", rating: "6.3" },
    { name: "The Menu (2022)", rating: "7.2" },
    { name: "M3gan (2022)", rating: "6.4" },
    { name: "Viking Wolf (2022)", rating: "5.1" },
    { name: "Infinity Pool (2023)", rating: "6.2" },
    { name: "Barbarian", rating: "7.0" },
    { name: "The Pale Blue Eye (2022)", rating: "6.6" },
    { name: " X (II) (2022)", rating: "6.6" },
    { name: "Smile (V) (2022)", rating: "6.6" },
    { name: "Pearl (2022)", rating: "7.0" }
  ],

  Action: [
    { name: "Teen Wolf: The Movie (2023)", rating: "5.6" },
    { name: "Top Gun (1986)", rating: "6.9" },
    { name: "Plane (2023)", rating: "6.5" },
    { name: "Everything Everywhere All at Once (2022)", rating: "8.0" },
    { name: "Plane (2023)", rating: "6.5" },
    { name: "Ant-Man and the Wasp: Quantumania (2023)", rating: "6.6" },
    { name: "Shotgun Wedding (2022)", rating: "5.4" },
    { name: "Bullet Train (2022)", rating: "7.3" },
    { name: "All Quiet on the Western Front (2022)", rating: "7.8" },
    { name: "Top Gun: Maverick (2022)", rating: "8.3" }
  ],

  "Sci-Fi": [
    { name: "Black Panther: Wakanda Forever (2022)", rating: "6.8" },
    { name: "Avatar: The Way of Water (2022)", rating: "7.8" },
    { name: "Everything Everywhere All at Once (2022)", rating: "8.0" },
    { name: "Black Panther (2018)", rating: "7.3" },
    { name: "Avatar (2009)", rating: "7.9" },
    { name: "Interstellar (2014)", rating: "8.6" },
    { name: "Jurassic World: Dominion (2022)", rating: "5.6" },
    { name: "The Hunger Games (2012)", rating: "7.2" },
    { name: "Nope (2022)", rating: "6.9" },
    { name: "Eternals (2021)", rating: "6.3" }
  ],

  Documentary: [
    { name: "Pamela: A Love Story (2023)", rating: "7.2" },
    { name: "All That Breathes (2022)", rating: "7.0" },
    {
      name: "Stolen Youth: Inside the Cult at Sarah Lawrence (2023)",
      rating: "7.2"
    },
    { name: "What Is a Woman? (2022)", rating: "8.4" },
    { name: "All the Beauty and the Bloodshed (2022)", rating: "7.8" },
    { name: "Stutz (2022)", rating: "7.8" },
    { name: "Planet Earth II (2016)", rating: "9.5" },
    { name: "Fire of Love (2022)", rating: "7.6" },
    { name: "Bill Russell: Legend (2023)", rating: "8.0" },
    { name: "Navalny (2022)", rating: "7.7" }
  ]
};
var genres = Object.keys(movieGenre);
export default function App() {
  var [genreItem, setItem] = useState("Rom-Com");

  function listItemClickHandler(item) {
    setItem(item);
  }
  var movieList = movieGenre[genreItem];
  var movies = movieList;

  return (
    <div className="App container-center">
      <h1>
        {" "}
        <span role="img" aria-label="">
          🎥
        </span>{" "}
        Movie Recommender Application
      </h1>
      <p style={{ fontSize: "smaller" }}>
        Get a list of movies by selecting respective genres
      </p>
      <ul>
        {genres.map((item) => (
          <button
            key={item}
            className="genre-button"
            onClick={() => listItemClickHandler(item)}
          >
            {item}
          </button>
        ))}
      </ul>

      <div className="container-center container">
        <hr />
        <ul>
          {movies?.map((moviesKey) => (
            <li key={moviesKey.name} className="movie-list-item">
              {" "}
              <div style={{ fontSize: "larger" }}>{moviesKey.name}</div>
              <div>{moviesKey.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
