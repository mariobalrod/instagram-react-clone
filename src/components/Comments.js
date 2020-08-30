import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 20px;
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

const Comments = (props) => {
    return (
        <div className="mt-3 mb-3">
            {
                props.comments.map((comment) => {
                    return (
                        <Box key={comment.id}>
                            <Username className="mr-3">{comment.username}</Username>
                            <Caption>{comment.text}</Caption>
                        </Box>
                    )
                })
            }
        </div>
    )
}

export default Comments
