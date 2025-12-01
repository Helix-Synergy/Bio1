import React from 'react'

const PanelMemberCard = ({image, name, about, from, link}) => {
  return (
    <div className='flex flex-col p-2 items-center rounded-lg'>
        <div className="border-2 border-one rounded-full inline-block">
      <img src={image} alt="ima" className='h-52 w-52 object-cover rounded-full m-2' loading="lazy"/>
      </div>
      <h2 className='text-black font-bold text-lg'>{name}</h2>
      <p className='text-one text-md font-semibold'>{about}</p>
      <p>{from}</p>
    </div>
  )
}

export default PanelMemberCard

