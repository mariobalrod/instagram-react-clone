import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

// components
import Logout from './Logout';

const Container = styled.div`
  margin: 0px;
  border-bottom: 1px solid lightgray;
  background: #ffffff;
  padding: 10px;
`;

const Header = (props) => {

  const { name } = props;

  const upper = name.toUpperCase();

  return (
    <Container>
      <img
        className="ml-5"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="logo"
      />
      <div className="mr-5" style={{display: "flex", alignItems: "center", float: "right", background: "#ffffff"}}>
        <Avatar
          style={{width: 30, height: 30 }}
          alt={upper}
          src="/static/images/avatar/1.jpg"
        />
        <Logout/>
      </div>
    </Container>
  );
}

export default Header;

