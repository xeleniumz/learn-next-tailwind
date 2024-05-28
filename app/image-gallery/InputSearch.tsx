import React from 'react'

const InputSearch = () => {
  return (
    <>
        <div className="flex justify-between border-b">
          <input
              type="text"
              className='ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none'
              placeholder='Search for images'
          />
          <button>
             <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>  
          </button>
        </div>
    </>
  )
}

export default InputSearch