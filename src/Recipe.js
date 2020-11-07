import React from "react";

const Recipe = (props) => {
  return (
    <div className="item">
      <h2>{props.title}</h2>
      <img src={props.image} alt="" />
      <p>Calories: {Math.floor(props.calories)} KCAL</p>
      <ol>
        {props.ingredients.map((e) => (
          <li>{e.text}</li>
        ))}
      </ol>
    </div>
  );
};
export default Recipe;
