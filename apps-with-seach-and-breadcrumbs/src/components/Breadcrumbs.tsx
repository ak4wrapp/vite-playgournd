// src/components/Breadcrumbs.tsx
import React from 'react';

interface BreadcrumbsProps {
  path: string[];
  onBreadcrumbClick: (index: number) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path, onBreadcrumbClick }) => {
  return (
    <nav>
      {path.map((part, index) => (
        <span key={index}>
          <span
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => onBreadcrumbClick(index)} 
          >
            {part}
          </span>
          {index < path.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
