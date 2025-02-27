import React, { useState, useEffect } from "react";

const SidebarFilter = ({ setLocationFilter }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch(
        `https://api-us.storyblok.com/v2/cdn/datasource_entries?datasource=location&token=${process.env.REACT_APP_STORYBLOK_TOKEN}`
      );
      const data = await response.json();
      setLocations(data.datasource_entries);
    };

    fetchLocations();
  }, []);

  return (
    <aside className="sidebar">
      <h3 className="text-white">Filter by Location</h3>
      <select onChange={(e) => setLocationFilter(e.target.value)}>
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc.id} value={loc.value}>
            {loc.name}
          </option>
        ))}
      </select>
    </aside>
  );
};

export default SidebarFilter;
