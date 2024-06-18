import React from 'react';
import { Container } from 'react-bootstrap';

export default function Recursos(){
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column', // Alinhamento vertical para incluir a nova div abaixo
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    },
    topSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginBottom: '20px',
    },
    imageContainer: {
      flex: '1 1 auto',
      maxWidth: '40%',
      padding: '10px',
    },
    textContainer: {
      flex: '2 1 auto',
      maxWidth: '60%',
      padding: '10px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    title: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    text: {
      fontSize: '18px',
    },
    bottomSection: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: '20px',
    },
    column: {
      flex: '1',
      maxWidth: '45%',
    },
    box: {
      marginBottom: '20px',
      padding: '20px',
      border: '1px solid #000',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    link: {
      fontSize: '18px',
      color: 'blue',
      textDecoration: 'none',
    },
    boxTitle: {
      fontSize: '20px',
      marginBottom: '10px',
    },
  };

  return (
    <Container>
      <div style={styles.container}>
      <div style={styles.topSection}>
        <div style={styles.imageContainer}>
          <img
            src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22028_16430272124432966.jpg"
            alt="Example"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Recursos</h1>
          <p style={styles.text}>
            Sabemos que a jornada do bem-estar emocional envolve aprendizado e autocuidado. 
            É por isso que criamos a nossa página de Recursos, repleta de materiais educativos para te auxiliar 
            em sua jornada.
          </p>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <div style={styles.column}>
          <div style={styles.box}>
            <h2 style={styles.boxTitle}>Como Melhorar sua Saúde Mental</h2>
            <a href="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1806-69762018000200007" style={styles.link}>Leia o artigo completo</a>
          </div>
          <div style={styles.box}>
            <h2 style={styles.boxTitle}>Como Reduzir o Estresse no Trabalho</h2>
            <a href="https://www.scielo.br/j/reeusp/a/QfTCHCJQHLYQBZ7wC8wZ9sK/?format=pdf&lang=pt" style={styles.link}>Leia o artigo completo</a>
          </div>
          <div style={styles.box}>
            <h2 style={styles.boxTitle}>Alimentação Saudável para a Mente</h2>
            <a href="https://www.nucleodoconhecimento.com.br/saude/saude-mental-no-brasil" style={styles.link}>Leia o artigo completo</a>
          </div>
        </div>
        <div style={styles.column}>
          <div style={styles.box}>
            <h2 style={styles.boxTitle}>Vamos falar sobre saúde mental?</h2>
            <a href="https://www.youtube.com/watch?v=UU-bd1lj3Kg" style={styles.link}>Assista ao vídeo</a>
          </div>
          <div style={styles.box}>
            <h2 style={styles.boxTitle}>Como Gerenciar Sua Saúde Mental</h2>
            <a href="https://www.youtube.com/watch?v=rkZl2gsLUp4" style={styles.link}>Assista ao vídeo</a>
          </div>
          <div style={styles.box}>
            <h2 style={styles.boxTitle}>4 DICAS PARA MELHORAR SUA SAÚDE MENTAL</h2>
            <a href="https://example.com/mindfulness-daily" style={styles.link}>Assista ao vídeo</a>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

