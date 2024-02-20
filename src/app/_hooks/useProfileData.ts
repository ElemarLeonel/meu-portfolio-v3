import { useEffect, useState } from 'react';
import { getProfile } from '../_services/notion';

export function useProfileData() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchData();
  }, []);

  return profile;
}