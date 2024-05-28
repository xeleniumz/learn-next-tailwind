import React from 'react'
import { Metadata } from 'next'
import Menu from './Menu'
import InputSearch from './InputSearch';
import UploadButton from './UploadButton';
import ImageContainer from './ImageContainer';

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Image Gallery built with Next.js",
};

const menu = [
    {
        name: 'Vector',
        href: '#'
    }, {
        name: 'Illustration',
        href: '#'
    }, {
        name: 'Images',
        href: '#'
    }, {
        name: 'Icons',
        href: '#'
    }
]

const page = () => {
  return (
      //   global container
      <div className="flex items-center justify-center min-h-screen bg-cyan-50">
        {/* card container */}
        <div className="bg-white p-6 m-3 space-y-10 shadow-2xl
          rounded-3xl md:p-40
          ">
            {/* menu container */}
            <div className="flex flex-col items-center justify-center space-y-3 
              md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end
            ">
                {/* Menu Items  */}
                {menu.map((item, index) => (
                      <Menu key={index} name={item.name} href={item.href} />
                ))}  
            </div>
            {/* Search Container */}
            <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
                <InputSearch />
                <UploadButton />
            </div>
          {/* Gallery Container */}
          <div className="grid gap-4 md:grid-cols-3">
            {
                Array.from({ length: 6 }, (_, index) => (
                  <ImageContainer key={index} name={`image${index+1}`} />
                ))
            }
          </div>
         </div>
        </div>
  
  )
}

export default page