import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/courses" className="text-gray-700 hover:text-indigo-600">
        Browse Courses
      </Link>
      <Link
        to="/login"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        Sign In
      </Link>
    </div>
  );
};

export default NavLinks;