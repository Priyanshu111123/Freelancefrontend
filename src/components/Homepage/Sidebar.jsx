// src/ClientProfile.js
import React, { useState } from 'react';
  const handleSearch = (query) => {
    console.log('Search query:', query);
    
    const exampleData = ['React', 'JavaScript', 'CSS', 'HTML'];
    const results = exampleData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

const Sidebar = (cl) => {
  return (
   <div className="bg-gray-700 text-white p-6 rounded-lg shadow-md border border-gray-400">
      <div className="flex items-center space-x-4 mb-4">
        <div>
          <h2 className="text-2xl font-bold"></h2>
          <p className="text-sm text-gray-400"></p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Search </h1> 
      <input
        type="text"
        value={""}
        onChange={""}
        placeholder="Search..."
        className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <p className="text-gray-300"></p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Availability of jobs</h3>
        <p><strong>skills</strong> </p>
        <p><strong>Domain</strong> </p>
      </div>
    </div>
  );
};

export default Sidebar;
