import React from "react";

const Blog = () => {
  const questions = [
    {
      id: 1,
      question:
        "Tell us the differences between uncontrolled and controlled components?",
      ans: " In React, there are two ways to manage form inputs: controlled and uncontrolled components. Controlled components  In a controlled component, form data is handled by a React component. The value of the form element is controlled by React and is kept in the component s state. The state is then passed down to the input element as props. When the user interacts with the input element, an onChange event is triggered and the component s state is updated accordingly .Uncontrolled components  In an uncontrolled component form data is handled by the DOM itself value of the form element is not controlled by React, but is instead kept in the DOM's state. When the user interacts with the input element, the DOM updates its state accordingly. ",
    },
    {
      id: 2,
      question: "How to validate React props using PropTypes ?",
      ans: "",
    },
    {
      id: 3,
      question: "Tell us the difference between nodejs and express js?",
      ans: "",
    },
    {
      id: 4,
      question: "What is a custom hook, and why will you create a custom hook?",
      ans: "",
    },
  ];

  return (
    <div className="mt-4 grid grid-cols-1 gap-5">
      {questions.map((q) => (
        <article class="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
          <div class="flex items-start sm:gap-8">
            <div
              class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
              aria-hidden="true"
            >
              <div class="flex items-center gap-1">
                <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              </div>
            </div>

            <div>
              <strong class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                Episode #101
              </strong>

              <h3 class=" text-lg font-medium sm:text-xl ">
                <a href="" class="hover:underline">
                  {" "}
                  {q.question}{" "}
                </a>
              </h3>

              <p class="mt-1 text-sm text-gray-700">{q.ans}</p>

              <div class="mt-4 sm:flex sm:items-center sm:gap-2">
                <div class="flex items-center gap-1 text-gray-500">
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p class="text-xs font-medium">48:32 minutes</p>
                </div>

                <span class="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                  Featuring{" "}
                  <a href="#" class="underline hover:text-gray-700">
                    Barry
                  </a>
                  ,
                  <a href="#" class="underline hover:text-gray-700">
                    Sandra
                  </a>{" "}
                  and
                  <a href="#" class="underline hover:text-gray-700">
                    August
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Blog;
