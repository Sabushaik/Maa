import React from 'react';
import { useLocation } from 'react-router-dom';
const ThankYouPage = () => {

    const location = useLocation();
  const receivedData = location.state?.data;
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank you   {receivedData.cardname+" "} You for Trusting Us!</h1>
      <p style={styles.paragraph}>We will make your trip into a beautiful memory.</p>
      <p style={styles.paragraph} >Kindly check your email for further Communications </p>
    </div>
  );
};

const styles = {
  container: {

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff', // Light blue background color
    textAlign: 'center',
    padding: '20px',
    
  },
  heading: {
    fontSize: '2.5em',
    color: '#333'
  },
  paragraph: {
    fontSize: '1.5em',
    color: '#666'
  }
};

export default ThankYouPage;
