import React from 'react';

const Recursos = () => {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '20px'
    },
    box: {
      flex: '1 0 45%',  // Flex-grow, flex-shrink, flex-basis
      maxWidth: '45%',
      height: '350px',
      margin: '10px',
      backgroundColor: 'lightblue',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #000',
      borderRadius: '5px',
    },
    title: {
      margin: 0,
      fontSize: '16px',
      textAlign: 'center'
    },
    paragraph: {
      margin: '5px 0 0 0',
      fontSize: '14px',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h3 style={styles.title}>Caixa 1</h3>
        <p style={styles.paragraph}>Informações da Caixa 1</p>
      </div>
      <div style={styles.box}>
        <h3 style={styles.title}>Caixa 2</h3>
        <p style={styles.paragraph}>Informações da Caixa 2</p>
      </div>
      <div style={styles.box}>
        <h3 style={styles.title}>Caixa 3</h3>
        <p style={styles.paragraph}>Informações da Caixa 3</p>
      </div>
      <div style={styles.box}>
        <h3 style={styles.title}>Caixa 4</h3>
        <p style={styles.paragraph}>Informações da Caixa 4</p>
      </div>
    </div>
  );
};

export default Recursos;
