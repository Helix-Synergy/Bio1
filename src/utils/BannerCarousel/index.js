// src/utils/bannerCarousel/index.js

function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    const name = key.replace('./', '').replace(/\.[^/.]+$/, ''); // remove './' and file extension
    images[`banner_${name}`] = r(key);
  });
  return images;
}

// Load all .jpg/.png/.webp files from the carouselBanners folder
const banner_images = importAll(
  require.context('../../assets/CarouselBanners', false, /\.(png|jpe?g|webp)$/)
);

export default banner_images;
