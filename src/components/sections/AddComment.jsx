import React, { useState } from "react";
import { supabase } from "../../lib/supabase";
import { FaShare } from "react-icons/fa6";
import Loader from "../Ui/Loader";

const AddComment = ({ user, videoId }) => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment) return;

    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('comments')
        .insert([{ user_id: user, video_id: videoId, comment_text: comment }]);

      if (error) {
        throw error;
      }

      setComment("");
    } catch (error) {
      console.error('Error al agregar comentario:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleCommentSubmit} className="flex flex-col bg-zinc-300 dark:bg-zinc-900 rounded-lg p-2 font-Rubik font-bold gap-2">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe tu comentario..."
        className="p-2 rounded outline-none focus:ring-2 focus:ring-acent-2 font-light"
        rows="2"
        disabled={isLoading}
      />
      <button type="submit" className="border-2 rounded-full p-2 border-red-500 dark:border-red-300 flex justify-center items-center hover:bg-red-500 dark:hover:bg-red-300 dark:hover:text-black hover:text-white transition-all" disabled={isLoading}>
        {isLoading ? <Loader/> : <FaShare/>}
      </button>
    </form>
  );
};

export default AddComment;
