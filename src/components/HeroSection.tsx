// src/components/HeroSection.tsx
import React from 'react';
import heroBg from '../assets/images/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="hero">
      <img src={heroBg} alt="Hero Background" className="hero-bg" />
      <div className="hero-content">
        <h1>Genshin Impact</h1>
        <button>Tải Ngay</button>
      </div>
    </section>
  );
};
