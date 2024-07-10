import React from 'react';

const DashboardCard = () => {
  // Define the inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    // backgroundColor: '#f4f4f4', // Light grey background
  };

  const cardStyle = {
    width: '300px', // Adjust width as needed
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    // backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: '8px',
  };

  const logoStyle = {
    width: '100px', // Adjust size as needed
    height: 'auto',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img
          src='/logo/logo.5fd235f1.svg'
          // src='https://oktopuce.com/build/images/logo.5fd235f1.svg'
          alt='Company Logo'
          style={logoStyle}
        />
        <h1>Bienvenue dans votre tableau de bord personnalisé</h1>
        <p>
          Il s'agit d'une page de tableau de bord personnalisée pour votre
          panneau Oktopuce.
        </p>
        <p>Il sera développé dans une page plus utile</p>
      </div>
    </div>
  );
};

export default DashboardCard;
