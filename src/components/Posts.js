import React from 'react';
import styled from 'styled-components';

// Components
import Post from './Post';

const PostList = styled.div`
    max-width: 935px;
`;

const Posts = (props) => {
    return (
        <PostList className="mx-auto mb-5">
            {
                props.posts.map(({id, post}) => <Post key={id} post={post} />)
            }
        </PostList>
    )
}

export default Posts;
