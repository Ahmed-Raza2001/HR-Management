"use client";
import React from 'react';

function ViewButton({ url }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white bg-[#16f2b3] border border-[#16f2b3] hover:bg-[#13d1a0] text-base lg:text-lg px-2 py-1 rounded transition-colors"
    >
      View
    </a>
  );
}

export default ViewButton;