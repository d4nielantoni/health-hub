import React from 'react';
import { Container} from 'react-bootstrap';
import PostForm from './PostForm';

export default function PostagensForm() {


    return (
        <Container>
            <h1 style={{fontSize:20}}>Adicione suas postagens</h1>
            <PostForm />
        </Container>
    );
}