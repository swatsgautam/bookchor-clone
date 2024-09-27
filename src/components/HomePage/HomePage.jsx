import React from 'react';
import Hero from '../Hero/Hero';
import CategorySlider from '../CategorySlider/CategorySlider';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategorySlider categoryTitle="India's Top Read" key="India's Top Read" />
      <CategorySlider categoryTitle="Book Sets" key="Book Sets" />
      <CategorySlider categoryTitle="Fiction" key="Fiction" />
      <CategorySlider categoryTitle="Tik-Tok" key="Tik-Tok" />
      <CategorySlider categoryTitle="Thrillers" key="Thrillers" />
    </>
  );
};

export default HomePage;
