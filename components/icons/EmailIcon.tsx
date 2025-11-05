import React from 'react';

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v.511l8.5 6.375a1 1 0 0 0 1 0L21 5.511V5H3zm0 12h18V7.333l-8.412 6.309a2 2 0 0 1-2.176 0L3 7.333V17z" />
  </svg>
);

export default EmailIcon;
