import React from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <header style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h1 className="header-title">Welcome to My Blog Dashboard</h1>
        <p className="header-sub">
          Example dashboard built with React, React Router and React Bootstrap. Browse posts and open any to read more.
        </p>
      </header>
    </Container>
  );
}
