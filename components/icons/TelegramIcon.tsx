import React from 'react';

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.65 12c-.88-.25-.88-1.37 0-1.61l18.22-6.75c.79-.29 1.49.24 1.21 1.15l-3.67 17.15c-.29.83-1.01 1.05-1.72.53l-5.32-3.9z" />
  </svg>
);

export default TelegramIcon;