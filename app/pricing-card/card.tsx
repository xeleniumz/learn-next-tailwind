import React from 'react'

type Props = {
    name: string;
    active: boolean;
    storage: string;
    price: string;
    details: string[];
}

const card = ({ name, storage, price, details, active }: Props) => {
    const cardColor = active ? 'bg-violet-600' : 'bg-slate-700'
    return (
        <>
            {/* col 1 */}
            <div className={`${cardColor} rounded-xl text-white`}>
                {/* upper container       */}
                    <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
                        <div className="text-center upper-case">
                            {name}
                        </div>
                        <div className="h2 mt-10 font-serif text-5xl text-center">
                            {storage}
                        </div>
                        <div className="mt-2 h3 text-center">{price}</div>
                        <div className="flex justify-center">
                            <a href="#" className='inline-block px-10 py-3 my-6 text-center duration-200 border   
                            border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800
                        
                            '
                            >Purchase</a>
                        </div>
                    </div>  
                    {/* Border */}
                    <div className="border-t border-slate-700 "></div>
                    {/* Lower container */}
                    <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                        {/* List container */}
                        {details.map((detail) => (
                            <div className="flex flex-col space-y-2" key="name">
                                <div className="flex justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                    <span className="text-sm ml-1">{detail}</span>
                                </div>
                            </div>
                            )
                        )}
                    </div>
            </div>
        </>
  )
}

export default card