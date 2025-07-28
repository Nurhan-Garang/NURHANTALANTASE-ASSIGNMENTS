import React from 'react';
import './styles.css';
// import {Button} from '@mui/material';
import { Button, Container, Row, Col } from 'react-bootstrap';


const UserCard = ({ user }) => {
  return (

    <>
    <Container>
      <Row>
        <Col><Button variant="primary">Primary</Button></Col>
        <Col><Button variant="secondary">Secondary</Button></Col>
      </Row>
    </Container>

    <div className="usercard">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      </div>
     <Button variant ="contained" color="primary">Click Me</Button>;
    </>
  );
};

export default UserCard;