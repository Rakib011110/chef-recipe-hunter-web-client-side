import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div class="flex flex-col md:flex-row bg-gray-100">
        <div class="md:w-1/2">
          <a href="#" class="group relative block bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="md:w-1/2 flex items-center justify-center p-8">
          <div class="text-center">
            <h2 class="text-4xl font-bold mb-4">Welcome to our website</h2>
            <p class="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in eros in arcu luctus pretium vitae et turpis.
            </p>
            <a
              href="#"
              class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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
