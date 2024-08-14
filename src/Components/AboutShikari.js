import React from 'react';

import img5 from '../images/img5.jpg'
const AboutShikari= () => {
  return (
    <div style={styles.container}>
        <img src={img5} alt="Travel" className={styles.heroImage} />
      <h1 style={styles.heading}><b>Welcome to Shikari </b></h1>
      <p style={styles.paragraph}>
        Shikari is a single-page application designed to provide you with the best experiences in food, travel, and hotels. Our user-friendly interface ensures that you can easily navigate through all our offerings and find exactly what you need to make your trip unforgettable.
      </p>
      <section style={styles.section}>
     <b>  <h2 style={styles.subheading}> <b>Best Food </b></h2></b> 
        <p style={styles.paragraph}>
          Discover the best culinary delights that your destination has to offer. From local delicacies to gourmet meals, Shikari has got you covered.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.subheading}><b>Best Travel </b></h2>
        <p style={styles.paragraph}>
          We provide the most reliable travel options to ensure your journey is smooth and comfortable. Explore new places with Shikari.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.subheading}> <b>Best Hotels </b></h2>
        <p style={styles.paragraph}>
          Find the best accommodations that suit your needs and preferences. Whether you're looking for luxury or budget options, Shikari has the best hotels for you.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'TimesNewRoman, sans-serif',
    backgroundColor: 'white',

    backgroundImage: 'url("C:\\Users\\KARISHMA SHAIK\\OneDrive\\Desktop\\Reactjs\\textutil\\src\\images\\img5.jpg")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    width:'100%',
    height:'700px'
  },
  heading: {
    fontSize: '2.5em',
    color: 'black',
    marginBottom: '20px'
  },
  subheading: {
    fontSize: '2em',
    color: 'Red',
    marginTop: '20px'
  },
  paragraph: {
    fontSize: '25px',
    color: 'black',
    marginBottom: '20px'
  },
  section: {
    margin: '20px 0'
  }

  ,
  heroImage: {
    width: '100%',
    height: '90vh',
    objectFit: 'cover',
    borderRadius: '2px',
    
    boxSshadow: '10px 10px 8px rgb(217, 223, 223)',
    marginBottom: '1rem'
  }
};

export default AboutShikari;
