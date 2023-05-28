import React from 'react';

import "./HighlightedString.css"

export const HighlightedString = ({ text, substring="" }) => {
  const parts = text.split(new RegExp(`(${substring})`, 'gi'));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === substring.toLowerCase() ? (
          <mark key={index} className='highlighted-text'>
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};