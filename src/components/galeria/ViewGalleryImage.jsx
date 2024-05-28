import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export default function ViewGalleryImage() {
  const [images, setImages] = useState();
  useEffect(() => {
    const fetchImgs = async () => {
      try {
        const api = "https://compis.onrender.com/api/images";
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
        const images = data.map((img) => {
          return {
            original: img.url,
            thumbnail: img.url,
          };
        });
        console.log(images);
        setImages(images);
      } catch (e) {
        console.log(e);
      }
    };
    fetchImgs();
  }, []);
  if (images) {
    return (
      <div className="bg-gradient-to-tr from-black to-transparent w-full h-[90vh] grid place-content-center">
        <div className="container mx-auto w-[95%] md:w-[90%] lg:w-[80%] h-max bg-slate-800 p-2 rounded-lg">
          <ImageGallery
            items={images}
            autoPlay={false}
            thumbnailPosition="left"
            additionalClass="bg-black p-1"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-tr from-black to-transparent w-full h-[90vh] grid place-content-center">
      <div className="container mx-auto w-[100%] md:w-[95%] lg:w-[80%] object-cover bg-zinc-800 p-2"></div>
    </div>
  );
}
