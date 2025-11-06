import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/NavbarComponent';
import Home from './pages/Home';
import PostsPage from './pages/PostPage';
import './App.css';


export default function App() {
  return (
    <>
      <AppNavbar />
      <main style={{ paddingTop: '72px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </main>
    </>
  );
}
