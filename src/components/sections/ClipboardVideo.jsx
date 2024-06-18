import React, { useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard';
import { FaCopy } from 'react-icons/fa6';

const ClipboardVideo = ({ url }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const clipboard = new ClipboardJS(buttonRef.current, {
      text: () => url
    });

    clipboard.on('success', function (e) {
      console.log('Texto copiado:', e.text);
      alert('Texto copiado al portapapeles');
      e.clearSelection();
    });

    clipboard.on('error', function (e) {
      console.error('Error al copiar:', e);
      alert('Error al copiar al portapapeles');
    });

    return () => {
      clipboard.destroy();
    };
  }, [url]);

  return (
    <div className="text-zinc-500 text-2xl flex items-center justify-center">
      <button ref={buttonRef} id="btn-copy">
        <FaCopy />
      </button>
    </div>
  );
};

export default ClipboardVideo;
