import React from 'react';

const ConcernCard = ({ concern }) => {
  return (
    <div className="min-w-[280px] flex-shrink-0 rounded-lg border p-4 shadow">
      <h4 className="text-md font-semibold text-[#111518]">{concern.question}</h4>
      <p className="text-sm text-[#60798a] mt-2">{concern.flag}</p>
      <p className="text-sm text-[#60798a] mt-1 italic">{concern.comfort}</p>
      <p className="text-sm text-[#60798a] mt-1">{concern.advice}</p>
      <button className="mt-2 rounded-full bg-[#34a3f3] px-4 py-1 text-sm text-white font-medium">
        {concern.cta}
      </button>
    </div>
  );
};

export default ConcernCard;
