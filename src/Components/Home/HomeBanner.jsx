import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const HomeBanner = () => {
  return (
    <div className="mt-5">
      <div className="flex  mx-auto flex-col md:flex-row bg-gray-100">
        <div className="md:w-1/2">
          <a href="#" className="group relative block bg-black">
            <img
              alt="Developer"
              src="https://images.healthshots.com/healthshots/en/uploads/2021/09/07143144/eating-with-hands-1-1600x900.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-green-500">
                BANGALIAN
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                FOOD BOOK{" "}
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
              <Player
                className=" rounded-lg mb-4 sm:w-[300px] sm:h-[200px]"
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_YnsM0o.json"
                // style={{ height: "500px", width: "700px" }}
              ></Player>
              <div>
                <h1 className="text-2xl font-bold text-green-600">
                  {" "}
                  Lorem ipsum dolor sit.
                </h1>
              </div>
            </div>
          </a>
        </div>

        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="text-center">
            <div>
              <Player
                className=" rounded-lg  sm:w-[400px] sm:h-[300px]"
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_tll0j4bb.json"
                // style={{ height: "500px", width: "700px" }}
              ></Player>
            </div>
            <h2 className="text-4xl font-bold mb-4  text-green-400">
              Welcome to our website
            </h2>
            <p className="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in eros in arcu luctus pretium vitae et turpis.
            </p>
            <a
              href="#"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
