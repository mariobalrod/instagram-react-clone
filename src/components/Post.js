import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

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
`;

const Username = styled.h4`
    margin: 0px;
    font-size: 14px;
`;

const Caption = styled.p`
    font-size: 14px;
    margin: 0px;    
`;

const PostImage = styled.img`
    width: 100%;
    object-fit: contain;
    border-top: 1px solid lightgray;  
    border-bottom: 1px solid lightgray;  
`;

const Post = (props) => {
    const { post } = props;

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

        </PostCard>
    )
}

export default Post;
