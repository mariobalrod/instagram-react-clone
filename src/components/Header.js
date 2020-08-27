import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

const Container = styled.div`
  margin: 0px;
  border-bottom: 1px solid lightgray;
  background: #ffffff;
  padding: 10px;
`;

const Header = (props) => {
    return (
      <Container>
        <img
          className="ml-5"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />

        {
            (props.token) ? (
                <Avatar
                    className="mr-5"
                    style={{float: "right", width: 30,  height: 30}}
                    alt="Mariobalrod"
                    src="/static/images/avatar/1.jpg"
                />
            ) : ''
        }
        
      </Container>
    );
}

export default Header;

