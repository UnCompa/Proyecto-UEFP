import React, { useRef, useEffect } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'; // Importa los estilos CSS de Plyr

const VideoPlayer = ({ videoSource, height, width }) => {
  const videoPlayer = useRef(null);

  useEffect(() => {
    const player = new Plyr(videoPlayer.current, {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    });

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const isYouTubeURL = videoSource.includes('youtube.com') || videoSource.includes('youtu.be');
    const isMP4URL = videoSource.endsWith('.mp4');

    if (isYouTubeURL) {
      // Si la fuente del vídeo es un enlace de YouTube
      if (videoPlayer.current) {
        // Destruye el reproductor de Plyr actual si existe
        videoPlayer.current.innerHTML = ''; // Limpia el contenido del reproductor
        // Extrae el ID del vídeo de la URL de YouTube
        const videoId = videoSource.match(/(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|watch\?.+\&v=))([^&\n?#]+)/)?.[1];
        if (videoId) {
          
          // Crea un iframe para incrustar el vídeo de YouTube
          const iframe = document.createElement('iframe');
          iframe.width = '100%';
          iframe.height = '100%';
          iframe.style.border = 'none'; // Elimina el borde del iframe
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          iframe.allowFullscreen = true;
          // Agrega el iframe al contenedor del reproductor
          videoPlayer.current.appendChild(iframe);
        }
      }
    } else if (isMP4URL) {
      // Si la fuente del vídeo es un archivo mp4
      console.log("Hola");
      if (videoPlayer.current) {
        // Destruye el reproductor de Plyr actual si existe
        videoPlayer.current.innerHTML = ''; // Limpia el contenido del reproductor
        // Crea un elemento de video para reproducir el archivo mp4
        const videoElement = document.createElement('video');
        videoElement.src = videoSource;
        videoElement.controls = true;
        videoElement.width = '100px';
        videoElement.height = '100%';
        // Agrega el elemento de video al contenedor del reproductor
        console.log(videoElement);
        videoPlayer.current.appendChild(videoElement);
      }
    }
  }, [videoSource]);

  return <div ref={videoPlayer} style={{ width: width, height: height, padding: '4em' }}></div>;
};

export default VideoPlayer;

