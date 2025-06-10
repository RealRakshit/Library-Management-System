import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-800 text-white px-8 py-4">
      <h1 className="text-xl font-semibold text-center">
        &copy; {new Date().getFullYear()}, Made With Love By Rakshit Hinduja
      </h1>
    </div>
  );
};

export default Footer;
