import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { db } from '../firebase/Config';
import styled from 'styled-components';
import { Form , Button} from 'react-bootstrap';
import firebase from 'firebase';

// Components
import Comments from './Comments';

const PostCard = styled.div`
    margin-top: 50px;
    max-width: 614px;
    background: #ffffff;
    border: 1px solid lightgray;    
`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

const PostFooter = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    background: #ffffff;
`;

const Username = styled.h4`
    margin: 0px;
    font-size: 14px;
    background: #ffffff;
`;

const Caption = styled.p`
    font-size: 14px;
    margin: 0px;    
    background: #ffffff;
`;

const PostImage = styled.img`
    width: 100%;
    object-fit: contain;
    border-top: 1px solid lightgray;  
    border-bottom: 1px solid lightgray;  
`;

const Line = styled.span`
    margin: 12px;
    display: block;
    width: 80%;
    border-top: 1px solid black;
`;

const Post = (props) => {
    const { post, postId, username } = props;

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;
        if(postId) {
            unsubscribe = db
                .collection('posts')
                .doc(postId)
                .collection('comments')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }

        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (e) => {
        e.preventDefault();

        db.collection('posts').doc(postId).collection('comments').add({
            text: comment,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setComment('');
    }

    return (
        <PostCard className="mx-auto">

            {/* Header -> avatar + usenarme */}
            <PostHeader>
                <Avatar 
                    className="mr-2"
                    alt="Mariobalrod"
                    src="/static/images/avatar/1.jpg"
                />

                <Username>{post.username}</Username>
            </PostHeader>

            {/* Image */}
            <PostImage 
                src={post.imageUrl}
                alt="imagePost"
            />

            {/* username + caption */}
            <PostFooter>
                <Username className="mr-3">{post.username}</Username>
                <Caption>{post.caption}</Caption>
            </PostFooter>

            <div style={{background: "#ffffff"}}>
                <Line className="mx-auto"/>
            </div>
            
            <Comments comments={comments} />

            <Form onSubmit={postComment} style={{display: "flex", background: "transparent"}}>
                <Form.Control as="textarea" rows="1" placeholder="Enter your comment ..." value={comment} name="comment" onChange={(e) => { setComment(e.target.value) }} required/>
                <Button variant="dark" type="submit">Post</Button>
            </Form>

        </PostCard>
    )
}

export default Post;
