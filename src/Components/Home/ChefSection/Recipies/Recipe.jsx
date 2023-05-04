import React, { useState } from "react";
import { toast } from "react-toastify";

const Recipe = ({ recipe }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  console.log(recipe);

  const handleClick = () => {
    // Disable the button
    setButtonDisabled(true);
    toast("recipe is your favorite");
  };
  return (
    <div>
      {/* <h1> {recipe.ingredients[1]}</h1> */}

      <div className="mt-10">
        <div className="card flex flex-wrap card-side bg-base-100 shadow-xl items-center ">
          <figure className="sm:w-full md:w-4/12 h-96 mx-auto ">
            <img src={recipe.picture} alt="Movie" />
          </figure>
          <div className="card-body">
            <div>
              <div>
                <h1 className="mb-5 text-2xl bg-blue-600 font-bold  text-white w-72 p-2 rounded-lg mx-auto">
                  {recipe.recipe_name}{" "}
                </h1>

                <div className="flex sm:flex-row-reverse md:flex-nowrap sm:flex-wrap gap-20  sm:w-full md:w-9/12  mx-auto ">
                  <div className="">
                    <div class="w-full mx-auto   max-h-96 sm:flex-row-reverse  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-100 dark:border-gray-100">
                      <h5 class="mb-4 text-xl font-medium text-white-500 dark:text-white-400">
                        COOKING METHOD
                      </h5>
                      <div class="flex items-baseline text-white-900 dark:text-blue-600">
                        <span class="text-3xl font-semibold">💙$</span>
                        <span class="text-5xl font-extrabold tracking-tight">
                          {recipe.rating}
                        </span>
                        <span class="ml-1 text-xl font-normal text-white-500 dark:text-white-400">
                          /Rating
                        </span>
                      </div>

                      <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                          <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Check icon</title>
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">
                            {recipe.cooking_method?.slice(0, 250)}
                          </span>
                        </li>
                      </ul>
                      <button
                        onClick={handleClick}
                        disabled={buttonDisabled}
                        type="button"
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                          buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        Choose Favourite
                      </button>
                    </div>
                  </div>
                  {/* ------- */}
                  <div className="">
                    <div class="w-full mx-auto  h-96 sm:flex-row-reverse  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-100 dark:border-gray-100">
                      <h5 class="mb-4 text-xl font-medium text-white-500 dark:text-white-400">
                        INGREDIENTS
                      </h5>
                      <div class="flex items-baseline text-white-900 dark:text-blue-600">
                        <span class="text-3xl font-semibold">💙$</span>
                        <span class="text-5xl font-extrabold tracking-tight">
                          {recipe.rating}
                        </span>
                        <span class="ml-1 text-xl font-normal text-white-500 dark:text-white-400">
                          /Rating
                        </span>
                      </div>

                      <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                          <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Check icon</title>
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">
                            {recipe.ingredients}
                          </span>
                        </li>
                      </ul>
                      {/* <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                      >
                        Choose plan
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
