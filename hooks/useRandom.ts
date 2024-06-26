// hooks/useRandomAvatar.ts
import { useState, useEffect } from 'react';

const useRandomAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        // Generate a random text string for fetching a random avatar
        const randomText = Math.random().toString(36).substring(7);
        const response = await fetch(`https://robohash.org/${randomText}.png`);
        setAvatarUrl(response.url);
      } catch (error) {
        console.error('Error fetching avatar:', error);
      }
    };

    fetchAvatar();
  }, []);

  return avatarUrl;
};

export default useRandomAvatar;
