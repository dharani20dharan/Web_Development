import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function BlogCard({ post, onReadMore }) {
  // post: { id, title, excerpt, body, author, date }
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2">{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>
          {post.author} • {post.date}
        </Card.Subtitle>
        <Card.Text className="card-desc mb-4" style={{ flex: '1 0 auto' }}>
          {post.excerpt}
        </Card.Text>
        <div className="mt-auto d-flex justify-content-end">
          <Button variant="primary" onClick={() => onReadMore(post)}>
            Read More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
