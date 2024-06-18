import React, { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { Divider } from '@nextui-org/react';

const AddRoles = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.from('profiles').select('*');
      setUsers(data);
    };
    fetchUser();
  }, []);

  const handleRoleChange = async (userId, role) => {
    const user = users.find((user) => user.id === userId);
    const roles = user.roles || [];
    const roleIndex = roles.indexOf(role);

    if (roleIndex > -1) {
      roles.splice(roleIndex, 1); // Remove role
    } else {
      roles.push(role); // Add role
    }

    const { data, error } = await supabase
      .from('profiles')
      .update({ roles })
      .eq('id', userId);

    if (error) {
      console.error('Error updating roles:', error);
    } else {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === userId ? { ...u, roles } : u))
      );
    }
  };

  return (
    <>
      {users.map((user) => {
        const roles = user.roles || [];
        const isAdmin = roles.includes('admin');
        const isModerator = roles.includes('moderator');

        return (
          <article key={user.id} className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 p-2 rounded-lg dark:bg-zinc-800 gap-2'>
            <img
              className='h-12 w-12 rounded-full'
              src={user.avatar_url ?? 'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg'}
              alt='Avatar'
            />
            <span>{user.username}</span>
            <span>{user.email ?? 'No email'}</span>
            <div className='flex gap-4 items-center'>
              <div className='flex gap-2 items-center'>
                <input
                className='checked:accent-red-500'
                  type='checkbox'
                  checked={isAdmin}
                  onChange={() => handleRoleChange(user.id, 'admin')}
                />
                <label>Administrador</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input
                className='checked:accent-red-500'
                  type='checkbox'
                  checked={isModerator}
                  onChange={() => handleRoleChange(user.id, 'moderator')}
                />
                <label>Moderador</label>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default AddRoles;
