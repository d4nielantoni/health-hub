import React, { useEffect, useState } from 'react';
import { Card, Button, ListGroup, ListGroupItem, Spinner, Form } from 'react-bootstrap';
import supabase from '../../utils/client.js'; // Certifique-se de que o caminho para a sua configuração do Supabase esteja correto
import { IoMdSend } from "react-icons/io";

export default function PostCard({ post }) {
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [loadingNewComment, setLoadingNewComment] = useState(false);
    const [error, setError] = useState(null);

    const fetchComments = async () => {
        try {
            let { data: comments, error } = await supabase
                .from('comments')
                .select('*')
                .eq('post_id', post.id);
            
            if (error) throw error;
            
            setComments(comments);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoadingComments(false);
        }
    };

    useEffect(() => {
        if (showComments) {
            fetchComments();
        }
    }, [showComments, post.id]);

    const handleToggleComments = () => {
        setShowComments(!showComments);
    };

    const handleNewCommentSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoadingNewComment(true);

        try {
            const { data, error } = await supabase
                .from('comments')
                .insert([{ post_id: post.id, content: newComment, usuario: 'Anonymous' }]); // Ajuste o autor conforme necessário

            if (error) throw error;

            setNewComment('');
            fetchComments(); // Refresh the comments after a new comment is added
        } catch (error) {
            setError(error.message);
        } finally {
            setLoadingNewComment(false);
        }
    };

    return (
        <Card className="mb-4" style={{minHeight:200}}>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Button onClick={handleToggleComments}>
                    {showComments ? 'Esconder comentários' : 'Mostrar comentários'}
                </Button>
                {showComments && (
                    <>
                        {loadingComments ? (
                            <Spinner animation="border" />
                        ) : (
                            <ListGroup className="mt-3">
                                {comments.map((comment) => (
                                    <ListGroupItem key={comment.id}>
                                        <strong>{comment.usuario}</strong>: {comment.content}
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        )}
                        <hr />
                        {error && <div style={{color:"red"}}>Error: {error}</div>}
                        <Form onSubmit={handleNewCommentSubmit} className="mt-3" style={{display:"flex", gap:"5px", justifyContent:"start", alignItems:"end"}}>
                            <Form.Group controlId="newComment">
                                <Form.Label>New Comment</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter your comment" 
                                    value={newComment} 
                                    onChange={(e) => setNewComment(e.target.value)} 
                                    required 
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={loadingNewComment}>
                                {loadingNewComment ? 'Posting...' : <IoMdSend />}
                            </Button>
                        </Form>
                    </>
                )}
            </Card.Body>
        </Card>
    );
}
