import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  console.log(chef);
  const {
    chefName,
    chef_picture,
    likes,
    num_recipes,
    short_bio,
    experience,
    chefPicture,
    _id,
  } = chef;
  return (
    <div>
      <div className="">
        <a href="#" className="group relative block bg-black ">
          <img
            alt="Developer"
            src={chefPicture}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative  ">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500 p-4 sm:p-16 lg:p-20  ">
                {" "}
                {/* {chefName} */}
              </p>

              <p className="text-xl mt-40 sm:mt-40 lg:mt-40 font-bold text-white sm:text-1xl">
                <span>
                  {" "}
                  <p className="text-sm text-red-500">{chefName}</p>
                </span>
                Experience {experience} Years
              </p>
            </div>

            <div className="">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">{chef.short_bio}</p>
              </div>
            </div>
          </div>
        </a>

        <div>
          <div className="card h-32  shadow-md ">
            <div className="flex justify-between  ">
              <div className="  ">
                <p className="text-red-500 font-bold">Likes {likes} </p>
                <p className="text-red-500 font-bold">Recipes {num_recipes} </p>
              </div>
              <button className="bg-green-600 text-white  px-4 rounded hover:bg-red-600">
                {" "}
                <Link to={`/chef/${_id}`}> View Details </Link>
              </button>
            </div>
            <div className="flex justify-between"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
