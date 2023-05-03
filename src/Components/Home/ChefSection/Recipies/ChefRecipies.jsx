import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import RecepeCategory from "./RecepeCategory";

const ChefRecipies = () => {
  const chefs = useLoaderData();
  //   console.log(chefs.recipes);
  const {
    chefName,
    chef_picture,
    likes,
    num_recipes,
    short_bio,
    experience,
    chefPicture,
    _id,
  } = chefs;
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col  md:flex-row bg-gray-100">
        <div className="md:w-1/2">
          <a href="" className="group relative block ">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 mx-auto transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <img
                  src={chefPicture}
                  alt="Your Image"
                  className="w-full h-96 md:h-96 md:object-cover"
                />
              </div>
              {/* --------- */}
              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <Player
                  className=" rounded-lg  sm:w-[400px] sm:h-[300px]"
                  autoplay
                  loop
                  src="https://assets6.lottiefiles.com/packages/lf20_tll0j4bb.json"
                  // style={{ height: "500px", width: "700px" }}
                ></Player>

                <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                  Go around the world
                </h3>

                <p className="mt-4 text-sm sm:text-base"></p>

                <p className="mt-8 font-bold">Read more</p>
              </div>
            </div>
          </a>
        </div>
        <div className="md:w-1/2 mx-auto p-8">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Player
                className=" rounded-lg  "
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_tll0j4bb.json"
                // style={{ height: "500px", width: "700px" }}
              ></Player>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            {chefName} <br />
            <span className="text-sm">Like {likes} +</span>{" "}
          </h2>
          <p className="text-xl mb-8">{short_bio}</p>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-600">
            Call to Action
          </button>
        </div>
      </div>

      <div className="mt-20">
        <RecepeCategory></RecepeCategory>
      </div>

      {/*  recepes */}
      <h1> Here is recipe</h1>

      {chefs.recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe._id}></Recipe>
      ))}
    </div>
  );
};

export default ChefRecipies;
