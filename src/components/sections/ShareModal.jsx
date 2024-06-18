import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaClipboard } from "react-icons/fa6";
import ClipboardJS from "clipboard";
import { Toaster, toast } from "sonner";

const ShareModal = ({ url }) => {
  const [openModal, setOpenModal] = useState(false);

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent("Texto que quieres compartir");
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnLinkedIn = () => {
    const title = encodeURIComponent("Título del contenido");
    const summary = encodeURIComponent("Resumen del contenido");
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${title}&summary=${summary}`;
    window.open(linkedInUrl, '_blank');
  };

  const copyToClipboard = () => {
    const clipboard = new ClipboardJS('.btn-copy', {
      text: () => url
    });

    clipboard.on('success', function (e) {
      console.log('Texto copiado:', e.text);
      toast.success('Texto copiado al portapapeles');
      e.clearSelection();
      clipboard.destroy(); // Destroy the instance after copying
    });

    clipboard.on('error', function (e) {
      console.error('Error al copiar:', e);
      toast.error('Error al copiar al portapapeles');
      clipboard.destroy(); // Destroy the instance on error
    });

    document.querySelector('.btn-copy').click(); // Programmatically click the button
  };

  return (
    <>
      <Toaster richColors position="bottom-center" />
      <button
        onClick={() => setOpenModal(true)}
        className="w-full h-12 py-8 border-2 border-green-500 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors"
      >
        <span className="text-xl text-green-500">
          <FaClipboard />
        </span>
      </button>
      {openModal ? (
        <div className="bg-black/30 h-full w-full fixed top-0 left-0 z-10 flex items-center justify-center">
          <div className="bg-zinc-200 dark:bg-zinc-900 flex flex-col h-max w-2/3 p-2">
            <h2 className="text-center text-2xl font-bold">Compartir</h2>
            <div className="social-buttons flex justify-around my-4">
              <button onClick={shareOnFacebook} className="btn-facebook text-blue-600">
                <FaFacebook size={32} />
              </button>
              <button onClick={shareOnTwitter} className="btn-twitter text-blue-400">
                <FaTwitter size={32} />
              </button>
              <button onClick={shareOnLinkedIn} className="btn-linkedin text-blue-700">
                <FaLinkedin size={32} />
              </button>
              <button className="btn-copy text-gray-600" onClick={copyToClipboard}>
                <FaClipboard size={32} />
              </button>
            </div>
            <div className="flex gap-2 my-2">
              <button
                onClick={() => setOpenModal(false)}
                className="flex-1 bg-red-600 hover:bg-red-700 active:bg-red-800 px-2 py-1 rounded transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShareModal;
