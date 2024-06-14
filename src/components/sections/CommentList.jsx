import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

const CommentsList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      const { data: commentsData, error } = await supabase
        .from('comments')
        .select('*')
        .eq('video_id', videoId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error al obtener comentarios:', error.message);
        return;
      }

      setComments(commentsData);
      setLoading(false);
    };

    const fetchUser = async () => {
      const {data: user} = await supabase.auth.getUser();
      console.log(user);
      setCurrentUser(user.user);
    };

    fetchComments();
    fetchUser();
  }, [videoId]);

  const handleDelete = async (commentId) => {
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId);

    if (error) {
      console.error('Error al eliminar comentario:', error.message);
      return;
    }

    // Actualizar la lista de comentarios después de eliminar
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <div className="bg-zinc-300 dark:bg-zinc-900 rounded-lg p-2 my-2 flex flex-col gap-2">
      {loading ? (
        <p>Cargando comentarios...</p>
      ) : (
        comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="p-2 bg-zinc-50 dark:bg-zinc-950 rounded">
              <p>{comment.comment_text}</p>
              <small>By user: {comment.user_id}</small>
              <small> on {new Date(comment.created_at).toLocaleString()}</small>
              {currentUser && comment.user_id === currentUser.id && (
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                >
                  Borrar
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No hay comentarios.</p>
        )
      )}
    </div>
  );
};

export default CommentsList;
