import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import BlogCard from '../components/BlogCard';

const initialPosts = [
  {
    id: 1,
    title: 'AI and the Future of Work',
    author: 'Dharani',
    date: 'Oct 2025',
    excerpt:
      'A concise look at how AI is transforming job roles, the skills that will be most valuable, and how individuals can prepare.',
    body:
      'Full article content: \n\nArtificial intelligence is rapidly changing workplaces across industries. In this article we explore automation, the augmentation of human skills, reskilling strategies, and case studies showing how companies are integrating AI responsibly.'
  },
  {
    id: 2,
    title: 'Building with React Hooks',
    author: 'Dharani',
    date: 'Sep 2025',
    excerpt:
      'Practical guidance on using useState, useEffect and custom hooks to write clean and reusable React code.',
    body:
      'Full article content: \n\nReact hooks allow function components to hold state and side effects. This post covers patterns for data fetching, performance optimization with useMemo/useCallback, and when to extract logic into custom hooks.'
  },
  {
    id: 3,
    title: 'Data Visualization Techniques',
    author: 'Dharani',
    date: 'Aug 2025',
    excerpt:
      'A quick primer on choosing the right chart and tools to communicate insights effectively.',
    body:
      'Full article content: \n\nData visualization is about storytelling. We discuss chart choice, handling noisy data, color use, accessibility, and libraries like D3, Chart.js, and Vega-Lite.'
  },
  {
    id: 4,
    title: 'Cloud Basics for Developers',
    author: 'Dharani',
    date: 'Jul 2025',
    excerpt:
      'An introductory guide to cloud services, deployment models, and best practices for small projects.',
    body:
      'Full article content: \n\nUnderstanding IaaS, PaaS, and serverless options helps pick the right tool. This post covers deployments, CI/CD, secrets management, and cost awareness.'
  }
];

export default function PostsPage() {
  const [posts] = useState(initialPosts);
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const handleReadMore = (post) => {
    setSelected(post);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelected(null);
  };

  return (
    <Container>
      <section style={{ marginBottom: '1rem' }}>
        <h2 className="header-title">Latest Posts</h2>
        <p className="header-sub">A small selection of articles demonstrating cards, grid layout, and modal details.</p>
      </section>

      <Row xs={1} sm={2} lg={3} className="g-4">
        {posts.map((post) => (
          <Col key={post.id}>
            <BlogCard post={post} onReadMore={handleReadMore} />
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted small">
            {selected?.author} • {selected?.date}
          </p>
          <p>{selected?.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
