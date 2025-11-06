import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from './BlogCard';

const Dashboard = () => {
  const posts = [
    {
      title: 'AI and the Future of Work',
      description: 'Exploring how artificial intelligence is reshaping industries and job markets.'
    },
    {
      title: 'Building with React Hooks',
      description: 'A quick guide to mastering useState and useEffect for better React apps.'
    },
    {
      title: 'Understanding Cloud Computing',
      description: 'A beginner’s overview of cloud services, deployment, and scalability.'
    },
    {
      title: 'Data Visualization Techniques',
      description: 'Learn how to represent data effectively using modern visualization tools.'
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Latest Blog Posts</h2>
      <Row>
        {posts.map((post, index) => (
          <Col key={index} md={6} lg={4}>
            <BlogCard title={post.title} description={post.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
