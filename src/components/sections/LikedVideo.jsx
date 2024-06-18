import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa6";
import { supabase } from "../../lib/supabase";

const CommentUser = ({ user, video }) => {
  const [liked, setLiked] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Verificar si el usuario ya dio like al cargar el componente
    const checkLikeStatus = async () => {
      const { data: existingLikes, error } = await supabase
        .from('likes')
        .select('*')
        .eq('user_id', user)
        .eq('video_id', video);

      if (error) {
        console.error('Error al verificar el like:', error.message);
        return;
      }

      if (existingLikes.length > 0) {
        setLiked(true);
      }
    };

    checkLikeStatus();
  }, [user, video]);
  useEffect(()=> {
    const countLikes = async () => {
      const {data: likesData} = await supabase.from("videos_metadata").select("*").eq("id", video)
      const likesCount = likesData[0].likes
      setLikes(likesCount)
    }
    countLikes()
  }, [liked])
  const handleLike = async () => {
    if (liked || likeLoading) return;

    try {
      setLikeLoading(true);

      // Verificar si el usuario ya dio like
      const { data: existingLikes, error } = await supabase
        .from('likes')
        .select('*')
        .eq('user_id', user)
        .eq('video_id', video);

      if (error) {
        throw error;
      }

      if (existingLikes.length > 0) {
        console.log('Ya diste like a este video.');
        return;
      }

      // Registrar el like
      const { data: newLike, error: insertError } = await supabase
        .from('likes')
        .insert([{ user_id: user, video_id: video }]);

      if (insertError) {
        throw insertError;
      }

      // Actualizar el conteo de likes en videos_metadata
      const { data: videoData, error: videoError } = await supabase
        .from('videos_metadata')
        .select('likes')
        .eq('id', video)
        .single();

      if (videoError) {
        throw videoError;
      }

      const updatedLikes = videoData.likes + 1;

      const { data: updatedVideo, error: updateError } = await supabase
        .from('videos_metadata')
        .update({ likes: updatedLikes })
        .eq('id', video);

      if (updateError) {
        throw updateError;
      }

      console.log('Like registrado y conteo de likes actualizado correctamente.');
      setLiked(true);

    } catch (error) {
      console.error('Error al procesar el like:', error.message);
    } finally {
      setLikeLoading(false);
    }
  };

  return (
    <div className="flex justify-center font-Rubik items-center gap-2">
      <button
        id="like-btn"
        className={`text-2xl ${liked ? 'text-red-500' : 'text-gray-500'}`}
        onClick={handleLike}
        disabled={likeLoading || liked}
      >
        <FaHeart />
      </button>
      <span>
        {likes}
      </span>
    </div>
  );
};

export default CommentUser;
