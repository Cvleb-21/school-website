import React from 'react';
import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press', href: '/press' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' }
    ]
  },
  {
    title: 'Community',
    links: [
      { label: 'Student Success', href: '/success-stories' },
      { label: 'Teaching', href: '/teach' },
      { label: 'Partners', href: '/partners' },
      { label: 'Blog', href: '/blog' }
    ]
  }
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      {FOOTER_SECTIONS.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            {section.title}
          </h3>
          <ul className="mt-4 space-y-4">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-base text-gray-300 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;