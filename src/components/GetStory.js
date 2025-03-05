import React, { useState, useEffect } from 'react';

const GetStory = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const SPACE_ID = process.env.REACT_APP_STORYBLOK_SPACE_ID;
  const OAUTH_TOKEN = process.env.REACT_APP_STORYBLOK_OAUTH_TOKEN;

  useEffect(() => {
    const fetchExport = async () => {
      try {
        const response = await fetch(
          `https://api-us.storyblok.com/v1/spaces/${SPACE_ID}/stories/23997824/export.json`,
          {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${OAUTH_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExport();
  }, [OAUTH_TOKEN]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Exported Story (pt-br)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default GetStory;
