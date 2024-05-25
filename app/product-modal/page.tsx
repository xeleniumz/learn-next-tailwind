import React from 'react'

const page = () => {
    return (
    //   global container
        <div className="flex items-center justify-center  min-h-screen
                bg-slate-100
        ">
        {/* card container */}
            <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl 
                md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16
            ">
                {/* image div */}
                    <div>
                        <img
                            src="/images/headphone.png"
                            alt="product"
                            className="mx-auto hover:scale-105 duration-200 w-60"
                        />
                </div>
                
                {/* content */}
                <div className="flex flex-col space-y-6">
                    {/* label & description */}
                    <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                        <div>
                            <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                                free shipping
                            </div>
                        </div>

                        {/* title */}
                        <div className="max-w-sm text-2xl font-medium">
                            Razer Kraken Kitty Edt Gaming Headset Quartz
                        </div>
                        {/* price */}
                        <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                            <p className="line-through">$799</p>
                            <p className="text-5xl font-bold">$599</p>
                            <p className="text-sm font-light text-gray-400">
                                this offer is valid until 31st December as long as stock lasts
                            </p>
                        </div>
                        {/* button */}
                        <div className="group">
                            <button className='w-full bg-blue-700 text-white border-b-8 border-b-blue-700
                                rounded-lg 
                                transition-all duration-150
                                group:hover:border-t-8 group-hover:border-b-0 
                                group-hover:bg-blue-700
                                group-hover:border-t-blue-700 group-hover:shadow-lg
                            '>
                                <div className='duration-150 px-8 py-4 bg-blue-500 rounded-lg
                                    group-hover:bg-blue-700
                                '>
                                    Add to cart
                                </div>
                            </button>
                        </div>
                        {/* Stock */}
                        <div className="flex items-center space-x-3 group">
                            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                            <div className="text-sm">50+ pcs in stock.</div>
                        </div>
                        {/* bottom button container */}
                        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                            <button className='flex items-center justify-center py-3 px-5
                                space-x-3 border-2 border-bg-gray-200 rounded-lg
                                shadow-sm
                                hover:bg-opacity-30 hover:shadow-xl hover:translate-y-0.5
                                transition-all duration-150
                            '>
                                <img
                                    src="images/weight.png"
                                    alt=""
                                    className='w-8 '
                                />
                                <span>Add to cart</span>
                            </button>
                             <button className='flex items-center justify-center py-3 px-5
                                space-x-3 border-2 border-bg-gray-200 rounded-lg
                                shadow-sm
                                hover:bg-opacity-30 hover:shadow-xl hover:translate-y-0.5
                                transition-all duration-150
                            '>
                                <img
                                    src="images/heart.png"
                                    alt=""
                                    className='w-8 '
                                />
                                <span>Add to wishlist</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default page