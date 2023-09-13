import React from "react";

export default function Profile() {
  return (
    <div>
         
            {" "}
           
              {" "}
              <div class="flex items-center justify-center flex-wrap">
                {" "}
                <div class=" items-center justify-center flex flex-col  ">
                  {" "}
                  <div class="flex items-center justify-around h-60 w-full lg:text-left text-center ">
                    {" "}
                    <div class="flex flex-col md:flex-row items-center ">
                      {" "}
                      <img
                        src="https://source.unsplash.com/100x100/?man,boy"
                        alt=""
                        class="rounded-full"
                      />{" "}
                      <div>
                        {" "}
                        <div class="font-bold text-gray-600 mx-4">
                          John Doe
                        </div>{" "}
                        <div class="text-sm font-medium text-gray-500 hover:text-stone-500 mx-4">
                          <a href="#">SEO Executive, Tailblocks</a>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div class="text-gray-600 text-xl font-medium lg:text-left text-center mb-5">
                    {" "}
                    Tailblocks provides best Tailwind CSS Components and Blocks
                    to create an unique websites within minutes. It has upto 60+
                    free components for front-end Web Development.
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
     
   
  
  );
}
