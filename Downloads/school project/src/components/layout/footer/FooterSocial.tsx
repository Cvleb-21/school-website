import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' }
];

const FooterSocial = () => {
  return (
    <div className="flex space-x-6">
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">{item.name}</span>
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocial;