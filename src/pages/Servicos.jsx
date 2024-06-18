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
      flex: '1 0 45%', 
      maxWidth: '55%',
      height: '350px',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid #000',
      borderRadius: '5px',
      padding: '20px'

    },
    title: {
      alignSelf: 'flex-start',  //h3 na esquerda
      margin: 0,
      fontSize: '22px'
    },
    paragraph: {
      margin: '5px 0 0 0',
      fontSize: '17px',
      textAlign: 'center'
    },
    button: {
      alignSelf: 'center',
      padding: '10px 20px',
      fontSize: '14px',
      cursor: 'pointer'
    }
    
  };

  const boxStyles = [
    { backgroundColor: 'lightblue' },
    { backgroundColor: 'lightgreen' },
    { backgroundColor: 'lightcoral' },
    { backgroundColor: 'lightgoldenrodyellow' }
  ];

  return (
    <div style={styles.container}>
      <div style={{ ...styles.box, ...boxStyles[0] }}>
        <h3 style={styles.title}>Grupo de Apoio</h3>
        <p style={styles.paragraph}>Você não precisa passar por isso sozinho(a). Nossa plataforma oferece grupos de 
suporte online moderados, proporcionando um espaço seguro e acolhedor para se 
conectar com pessoas que estão enfrentando situações semelhantes.</p>
        <button style={styles.button}>Saiba Mais</button> 
      </div>
      <div style={{ ...styles.box, ...boxStyles[1] }}>
        <h3 style={styles.title}>Ferramenta de Monitoramento</h3>
        <p style={styles.paragraph}>Autoconhecimento é fundamental para cuidar da saúde mental. Pensando nisso, 
                                    oferecemos uma variedade de ferramentas para te ajudar a monitorar seu 
                                    bem-estar emocional e identificar padrões ao longo do tempo.</p>
        <button style={styles.button}>Saiba Mais</button> 
      </div>
      <div style={{ ...styles.box, ...boxStyles[2] }}>
        <h3 style={styles.title}>Blog de Apoio</h3>
        <p style={styles.paragraph}>Encontre pessoas que estão em situações similiares que você, assim como você
                                    elas estão precisando de ajuda com algum problema ou observação e sua ajuda
                                    pode ser de extrema importância.</p>
        <button style={styles.button}>Saiba Mais</button> 
      </div>
      <div style={{ ...styles.box, ...boxStyles[3] }}>
        <h3 style={styles.title}>Sessão ao vivo</h3>
        <p style={styles.paragraph}>Encontre pessoas que estão em situações similiares que você, assim como você
                                    elas estão precisando de ajuda com algum problema ou observação e sua ajuda
                                    pode ser de extrema importância.</p>
        <button style={styles.button}>Saiba Mais</button> 
      </div>
    </div>
  );
};

export default Recursos;
