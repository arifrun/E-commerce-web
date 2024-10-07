import React from "react";
import { Link } from "react-router-dom";

const CardButton = ({ title, path }) => {
  return (
    <Link to={path} className="py-2 px-8 border rounded-full border-secodary font-primary font-normal text-xs text-black inline-block">
      {title}
    </Link>
  );
};

export default CardButton;
