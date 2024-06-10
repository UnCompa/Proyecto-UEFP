import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { supabase } from "../../lib/supabase";
import "react-image-gallery/styles/css/image-gallery.css"
import Loader from "../Ui/Loader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const ViewGalleryImage = ({lang = "es"}) => {
  const [images, setImages] = useState()
  useEffect(() => {
    const loadImage = async () => {
      const {data} = await supabase.storage.from("galeria").list("")
      const imgsUrl = data?.map((file) => {
        const data = supabase.storage.from("galeria").getPublicUrl(file.name);
        const { publicUrl } = data.data;
        const newData = {
          publicUrl,
        };
        return newData;
      });
      const images = imgsUrl.map((imgs) => {
        return {
          original: imgs.publicUrl,
          thumbnail: imgs.publicUrl
        }
      })
      setImages(images)
    }
    loadImage()
  }, [])
  
  const renderLeftNav = (onClick, disabled) => {
    return (
      <button
        type="button"
        className="image-gallery-left-nav image-gallery-icon text-white hover:fill-red-500 text-3xl md:text-6xl"
        disabled={disabled}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <FaArrowLeft/>
      </button>
    );
  };
  const renderRightNav = (onClick, disabled) => {
    return (
      <button
        type="button"
        className="image-gallery-right-nav image-gallery-icon text-white hover:fill-red-500 text-3xl md:text-6xl"
        disabled={disabled}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <FaArrowRight/>
        
      </button>
    );
  };
  if(images) {
    return (
      <div className="h-full w-full bg-gradient-to-b from-white dark:from-black to-transparent py-2">
        <ImageGallery items={images}
        autoPlay
        showPlayButton={false}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        thumbnailPosition="left"
        />
      </div>
    )
  }

  return (
    <div className="h-screen w-full grid place-content-center">
      <h3 className="font-Rubik text-3xl">
        {lang === "es" ? "Cargando" : "Loading"}
      </h3>
        <div className="flex justify-center my-2">
        <Loader/>
        </div>
    </div>
  );
};

export default ViewGalleryImage;
