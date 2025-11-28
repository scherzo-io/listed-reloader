'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPosts, getContentfulImageUrl } from '@/lib/contentful';

export default function NewsPage() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div className="container-custom" style={{ marginTop: '80px' }}>
      <h1>NEWS</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {posts.map((post) => (
          <Link key={post.id} href={`/news/${post.attributes.slug}`} style={{ textDecoration: 'none' }}>
            <article style={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              padding: '1.5rem',
              borderRadius: '8px',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}>
              <h2 style={{ color: 'white', marginBottom: '1rem' }}>{post.attributes.title}</h2>
              <p style={{ color: '#ccc' }}>{post.attributes.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
