import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-white p-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Church Inzwi Roruponeso</h1>
        <p className="mt-4 text-lg max-w-lg">
          "A place of worship, community, and love. Join us to celebrate faith and unity."
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
