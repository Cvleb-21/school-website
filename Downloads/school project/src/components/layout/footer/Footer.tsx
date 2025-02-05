import React from 'react';
import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import FooterSocial from './FooterSocial';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo />
            <p className="text-gray-300 text-base">
              Making education accessible to everyone.
              Learn from industry experts and advance your career.
            </p>
            <FooterSocial />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterLinks />
            </div>
            <FooterNewsletter />
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} LearnHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;