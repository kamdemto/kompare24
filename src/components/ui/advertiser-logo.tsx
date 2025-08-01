import React from 'react';
import { Link } from 'react-router-dom';

interface AdvertiserLogoProps {
  name: string;
  logoUrl: string;
  href: string;
}

const AdvertiserLogo: React.FC<AdvertiserLogoProps> = ({ name, logoUrl, href }) => {
  return (
    <Link
      to={href}
      className="group flex items-center justify-center p-6 bg-white rounded-xl border transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 hover:border-primary/20"
    >
      <img
        src={logoUrl}
        alt={name}
        className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </Link>
  );
};

export default AdvertiserLogo;