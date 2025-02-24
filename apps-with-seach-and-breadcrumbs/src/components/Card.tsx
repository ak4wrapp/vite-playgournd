// src/components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
