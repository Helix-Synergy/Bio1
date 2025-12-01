import { Link } from 'react-router-dom';

const OraterCard = ({ image, name, about, from, link }) => {
  return (
    // <Link to={link} className="text-center">
      <div className='flex flex-col p-4 items-center rounded-lg'>
        <div className="border-2 border-one rounded-2xl inline-block">
          <img src={image} alt={name} className='h-52 w-52 object-cover rounded-2xl m-2' loading="lazy"/>
        </div>
        <h2 className='text-black font-bold text-md'>{name}</h2>
        <p className='text-one text-md font-semibold'>{about}</p>
        <p>{from}</p>
      </div>
    // </Link>
  );
};

export default OraterCard;
