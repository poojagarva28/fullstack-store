import Image from "next/image";
import React from "react";
import MenuItems from "./MenuItems";
import SectionHeaders from "./SectionHeaders";

const HomeMenu = () => {
  return (
    <section>
      <div className="relative -z-10">
        <div className="absolute -left-14 -top-20 w-48 h-48">
          <Image
            src="/sallad1.png"
            alt="salad"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute -right-14 -top-20 w-48 h-48">
          <Image
            src="/sallad2.png"
            alt="salad"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="text-center mt-10 mb-10">
        <SectionHeaders mainHeader={" Check out"} subheader="Menu" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <MenuItems key={index} />
          ))}
      </div>
    </section>
  );
};

export default HomeMenu;
