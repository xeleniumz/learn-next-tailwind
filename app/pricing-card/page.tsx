
import React from 'react'
import Card from './card'

const data = [
    {
        name: 'Basic',
        storage: '100 GB',
        price: '$1.99/month',
        active: false,
        details: [
            '100 GB of storage',
            'Option to add members',
            'Extra member benefits'
        ]
    },
    {
        name: 'Standard',
        storage: '200 GB',
        price: '$3.99/month',
        active: true,
        details: [
            '200 GB of storage',
            'Option to add members',
            'Extra member benefits'
        ]
    },
    {
        name: 'Premium',
        storage: '500 GB',
        price: '$7.99/month',
        active: false,
        details: [
            '500 GB of storage',
            'Option to add members',
            'Extra member benefits'
        ]
    }
]

const page = () => {
  return (
      <>
          {/* global container */}
        <div className="flex items-center justify-center  min-h-screen
            bg-slate-800
        ">
            {/* Innter container */}
            <div className="flex flex-col my-6 space-y-6 
              md:space-y-0 md:space-x-6 md:flex-row md:my-y-0
            ">
                {
                  data.map((cardData) => (
                      <Card {...cardData} key={cardData.name} />
                    ))
                }
            </div>
        </div>      
      </>
  )
}

export default page