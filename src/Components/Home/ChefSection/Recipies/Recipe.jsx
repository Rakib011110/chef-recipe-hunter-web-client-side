import React from "react";

const Recipe = ({ recipe }) => {
  console.log(recipe);
  return (
    <div>
      {/* <h1> {recipe.ingredients[1]}</h1> */}

      <div className="mt-10">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-5/12">
            <img src={recipe.picture} alt="Movie" />
          </figure>
          <div className="card-body">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
