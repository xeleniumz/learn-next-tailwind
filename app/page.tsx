import Image from "next/image";

export default function Home() {
  return (
    //  Background container 
    <div className="flex items-center justify-center h-screen 
      bg-zinc-700">
      {/* Card */}
      <div className="bg-zinc-800 p-2 mx-10 rounded-2xl">
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row rounded-l-xl">
          {/* Image */}
          <img
            src="/images/image.jpg"
            alt="logo"
            className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl
              md:rounded-r-none transform hover:scale-105 hover:rounded-xl
              duration-200
            "
          />
          {/* Content */}
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips delivered to your inbox
            </h2>
            <p className="max-w-xs my-5 text-xs leading-5 tracking-wide text-center text-white
              md:text-left
            ">
              Eat better and exercise more with our free email newsletter.
            </p>
            {/* Form */}
            <div className="flex flex-col mt-5 space-y-4 md:flex-row md:space-x-3 md:space-y-0">
              <input type="text"
                className="p-2 px-4 tex-center text-white bg-zinc-700 border border-zinc-600 
                placeholder:text-xs 
                placeholder:text-center md:text-left 
                placeholder:md:text-left
                focus:outline-none
                "
                placeholder="Enter your email address"
              />
              <button
                className="px-5 py-3 text-xs rounded-md text-zinc-800
                  bg-lime-500 hover:bg-lime-700 hover:text-white
                  duration-500
                "
              >Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
