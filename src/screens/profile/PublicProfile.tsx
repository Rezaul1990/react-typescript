import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as Templates from './templates';
import { ProfileData } from '../../models/Profile';

const TEMPLATE_MAP: { [key: string]: React.ComponentType<{ profile: ProfileData }> } = {
  template1: Templates.Template1,
  template2: Templates.Template2,
  template3: Templates.Template3,
  template4: Templates.Template4,
};

const PublicProfile: React.FC = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/profile/' + username)
      .then(res => setProfile(res.data))
      .catch(() => setProfile(null));
  }, [username]);

  if (!profile) return <p>Loading...</p>;

  const SelectedTemplate = TEMPLATE_MAP[profile.template] || Templates.Template1;

  return <SelectedTemplate profile={profile} />;
};

export default PublicProfile;