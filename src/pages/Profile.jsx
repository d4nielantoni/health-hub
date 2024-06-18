import { Container } from "react-bootstrap";


function Profile() {
    const estilo = {width:2000, height: 1000, backgroundColor:'#D3D3D3', border: 2, borderRadius: 8, margin: 20, padding: 10, color: '#fff', textAlign:'center', lineHeight:10}
  return (
    <>
    <Container style={{maxWidth:2000}}>

        <a href="editarperfil"><button style={{borderRadius:10, backgroundColor:'pink'}}>Editar Perfil</button></a>
        <h1>Historico de consultas</h1>
        <div style={estilo}>

        </div>
    </Container>
    </>
  );
}

export default Profile;