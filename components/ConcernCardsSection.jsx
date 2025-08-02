import React from 'react';
import ConcernSwiper from './ConcernSwiper';
import { concernData } from './concernData';

const ConcernCardsSection = () => {
  return (
    <section className="mt-6 flex flex-col gap-8">
      {Object.entries(concernData).map(([ageGroup, concerns]) => (
        <ConcernSwiper key={ageGroup} ageGroup={ageGroup} concerns={concerns} />
      ))}
    </section>
  );
};

export default ConcernCardsSection;
