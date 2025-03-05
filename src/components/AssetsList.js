import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssetList = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const SPACE_ID = '1023316';//process.env.REACT_APP_STORYBLOK_SPACE_ID;
  const OAUTH_TOKEN = "rrxWeQ6oLdYJ2XowYfQQUwtt-279445-VzxEmtQLRYtPoGQMqyin"; //process.env.REACT_APP_STORYBLOK_OAUTH_TOKEN;

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get(
          `https://api-us.storyblok.com/v1/spaces/${SPACE_ID}/assets`,
          {
            headers: {
              'Authorization': `${OAUTH_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const assets = response.data.assets || [];
        const filteredImages = assets.filter(asset => {
          if (asset.filename) {
            const lowerFilename = asset.filename.toLowerCase();
            return lowerFilename.endsWith('.jpg') ||
              lowerFilename.endsWith('.jpeg') ||
              lowerFilename.endsWith('.png') ||
              lowerFilename.endsWith('.gif');
          }
          return false;
        });

        setImages(filteredImages);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, [SPACE_ID, OAUTH_TOKEN]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Images from Storyblok</h2>
      {images.length ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {images.map(img => (
            <li key={img.id} style={{ marginBottom: '20px' }}>
              <img src={img.filename} alt={img.name || 'Storyblok asset'} style={{ maxWidth: '300px' }} />
              <p>{img.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found.</p>
      )}
    </div>
  );
};

export default AssetList;