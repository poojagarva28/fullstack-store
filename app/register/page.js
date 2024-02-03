import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <section className="mt-8 py-20">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or Login with Provider
        </div>
        <button className="flex justify-center items-center gap-2">
          <Image
            src="/google.png"
            alt="login with google"
            width="28"
            height="28"
          />
          Login with Google
        </button>
      </form>
      <div></div>
    </section>
  );
};

export default Register;
