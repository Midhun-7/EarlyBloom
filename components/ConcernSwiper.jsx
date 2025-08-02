'use client';

import React from 'react';
import ConcernCardsSection from './ConcernCardsSection';

const ConcernSwiper = ({ ageGroup, concerns }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-[#111518]">{ageGroup}</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {concerns.map((concern, index) => (
          <ConcernCardsSection key={index} concern={concern} />
        ))}
      </div>
    </div>
  );
};

export default ConcernSwiper;
