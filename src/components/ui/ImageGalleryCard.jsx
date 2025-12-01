import React from "react";

const ImageGalleryCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* First row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://t4.ftcdn.net/jpg/03/79/92/53/360_F_379925357_jenHAU5G0bNJUVmM2w0fhsYKzzI504Ma.jpg"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://www.amsterdamsights.com/attractions/img/vondelpark.jpg"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/7d/9d/a8.jpg"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>

      {/* Second row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1589869571832-6db8facdad09?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFuJTIwZ29naCUyMG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://media.istockphoto.com/id/482272546/photo/i-amsterdam-slogan-with-crowd-of-tourists.jpg?s=612x612&w=0&k=20&c=2uNgcPWm_MKdqTBepAHyicqh7tKy8VKDUcQKlUhaOMg="
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageGalleryCard;
