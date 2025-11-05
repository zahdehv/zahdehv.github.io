import React from 'react';

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 2L2 9.5l7.5 2.5L12 22l2.5-7.5L22 2zm-3.5 3.5L10 13.5 8 12l10.5-6.5z" />
  </svg>
);

export default TelegramIcon;
