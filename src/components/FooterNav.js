import React from 'react';
import {Nav} from 'react-bootstrap';

const Item = (props) => {
    return (
        <Nav.Item style={{fontWeight: "bold"}}>
          <Nav.Link target="_blanck" href={props.url} style={{color: "#385185"}}>{props.name}</Nav.Link>
        </Nav.Item>
    );
}

const FooterNav = () => {
    return (
      <Nav className="mx-auto" style={{width: "90%", justifyContent: "center", alignItems: "center", fontSize: 12}}>
        <Item name="ABOUT" url="https://about.instagram.com/" />
        <Item name="HELP" url="https://help.instagram.com/" />
        <Item name="PRESS" url="https://about.instagram.com/blog" />
        <Item name="API" url="https://www.instagram.com/developer/" />
        <Item name="JOBS" url="https://www.instagram.com/about/jobs/" />
        <Item name="PRIVACY" url="https://help.instagram.com/519522125107875" />
        <Item name="TERMS" url="https://help.instagram.com/581066165581870" />
        <Item name="LOCATIONS" url="https://www.instagram.com/explore/locations/" />
        <Item name="TOP ACCOUNTS" url="https://www.instagram.com/directory/profiles/" />
        <Item name="HASHTAGS" url="https://www.instagram.com/directory/hashtags/" />
        <Item name="LENGUAGE" url="" />
        <Nav.Item className="ml-5" style={{fontWeight: "bold", textAlign: "center"}}>
            © 2020 INSTAGRAM FROM FACEBOOK
        </Nav.Item>
      </Nav>
    );
}

export default FooterNav
