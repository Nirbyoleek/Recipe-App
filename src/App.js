import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "a7e78864";
  const APP_KEY = "ca17290c898f5bf088b8ef73b109ccd9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("tomato");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipe();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>
          TVRL <i className="fas fa-drumstick-bite "></i>
        </h1>
        <h2 className="jumbo">
          SEARCH FOR YOUR FAVOURITE FOODS AND GET THEIR RECIPE!
        </h2>
      </div>
      <form onSubmit={getSearch} className="search-form" action="">
        <input
          className="search-bar "
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="submit-button" type="submit">
          Search{" "}
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe, index) => {
          return (
            <Recipe
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
