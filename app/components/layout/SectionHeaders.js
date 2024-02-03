import React from "react";

const SectionHeaders = ({ mainHeader, subheader }) => {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {mainHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{subheader}</h2>
    </>
  );
};

export default SectionHeaders;
