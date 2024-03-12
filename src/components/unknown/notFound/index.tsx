import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div>
      Not found <Link to="/">to main</Link>
    </div>
  );
};

export default NotFound;
