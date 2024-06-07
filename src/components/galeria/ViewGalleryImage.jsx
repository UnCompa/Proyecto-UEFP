import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { supabase } from "../../lib/supabase";
export default function ViewGalleryImage() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImgs = async () => {
      try {
        const { data } = await supabase.storage.from("galeria").list("");
        const imgsUrl = data?.map((file) => {
          const data = supabase.storage.from("galeria").getPublicUrl(file.name);
          const { publicUrl } = data.data;
          return publicUrl;
        });
        console.log(imgsUrl);
        setImages(imgsUrl);
      } catch (e) {}
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
      <div className="container mx-auto w-[100%] md:w-[95%] lg:w-[80%] object-cover bg-zinc-800 p-2">
        <p className="text-center">No se encuentran imagenes disponibles</p>
      </div>
    </div>
  );
}
