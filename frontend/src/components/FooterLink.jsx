import React from "react";

const FooterLink = ({ nome, href, ...props }) => {
  return (
    <a
      className="text-gr text-[12px] hover:text-white transition duration-200"
      href={href}
      {...props}
    >
      {nome}
    </a>
  );
};

export default FooterLink;
