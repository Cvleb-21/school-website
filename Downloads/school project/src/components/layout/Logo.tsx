import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="text-xl font-bold text-indigo-600">
      LearnHub
    </Link>
  );
};

export default Logo;