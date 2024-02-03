import React from "react";
import SectionHeaders from "./SectionHeaders";

const ContactUs = () => {
  return (
    <section className="text-center pt-0">
      <SectionHeaders mainHeader={"Dont Hesitate"} subheader="Contact Us" />
      <p className="mt-6">
        {" "}
        <a className="text-4xl underline text-gray-500" href="tel:1234567890">
          +91 12345 67890
        </a>
      </p>
    </section>
  );
};

export default ContactUs;
