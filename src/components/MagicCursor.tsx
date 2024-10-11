import React, { useState, useEffect } from 'react';

interface MagicCursorProps {
  position: { x: number; y: number };
}

const MagicCursor: React.FC<MagicCursorProps> = ({ position }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`magic-cursor ${isActive ? 'active' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-20%, -20%)',
      }}
    />
  );
};

export default MagicCursor;