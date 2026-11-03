import React from 'react';

const positions = {
  crop: { tomato:'0% 0%', wheat:'100% 0%', cotton:'0% 100%', sugarcane:'100% 100%' },
  soil: { clay:'0% 0%', loam:'100% 0%', sand:'0% 100%', silt:'100% 100%' }
};

export default function TypeImage({ kind, name, className = '' }) {
  const key = (name || '').trim().toLowerCase();
  const position = positions[kind]?.[key];
  if (!position) return <span className={`type-image type-image-fallback ${className}`} aria-hidden="true">✳</span>;
  return <span className={`type-image ${className}`} aria-hidden="true" style={{ backgroundImage: `url(/images/${kind}-types.webp)`, backgroundPosition: position }} />;
}
