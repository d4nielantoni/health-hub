import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import supabase from '../../utils/client'; // Certifique-se de que o caminho para a sua configuração do Supabase esteja correto
import PostCard from './PostCard'; // Certifique-se de que o caminho para o seu componente PostCard esteja correto
import PostForm from './PostForm';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [postsPerPage] = useState(6); // Ajuste o número de posts por página conforme necessário

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const start = (page - 1) * postsPerPage;
                const end = start + postsPerPage;

                let { data: posts, error } = await supabase
                    .from('posts')
                    .select('*')
                    .range(start, end - 1);
                
                if (error) throw error;
                
                setPosts(posts);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [page, postsPerPage]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handlePreviousPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <Container>
            <h1 style={{fontSize:20}}>Postagens</h1>
            <div className="d-flex justify-content-between my-4">
                <Button onClick={handlePreviousPage} disabled={page === 1}>
                    Anterior
                </Button>
                <Button onClick={handleNextPage} disabled={posts.length < postsPerPage}>
                    Próximo
                </Button>
            </div>
            <Row>
                {posts.map((post) => (
                    <Col key={post.id} md={4}>
                        <PostCard post={post} />
                    </Col>
                ))}
            </Row>
            
        </Container>
    );
}