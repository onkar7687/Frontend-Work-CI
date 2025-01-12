import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/profile/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfileData(response.data);
      } catch (error) {
        alert('Error fetching profile');
      }
    };
    fetchProfile();
  }, []);

  if (!profileData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {profileData.username}</p>
      <p>Email: {profileData.email}</p>
    </div>
  );
}

export default Profile;
