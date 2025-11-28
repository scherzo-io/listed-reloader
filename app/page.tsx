'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts, getArtists, getContentfulImageUrl } from '@/lib/contentful';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image slides
const imageSlides = [
  'https://ucarecdn.com/f76fb93f-e0c5-4e5b-8170-e6ee78fb7d24/',
  'https://ucarecdn.com/efacb135-19a0-45e0-af94-33e9fe01b72f/-/crop/2000x1485/0,0/-/preview/',
  'https://ucarecdn.com/0eccca9b-467c-473f-950c-9f419503f636/',
  'https://ucarecdn.com/15d81712-a4ae-4154-b161-574b784c87c3/'
];

// Sample posts data (fallback when Contentful is not configured)
const samplePosts = [
  {
    sys: { 
      id: '1', 
      createdAt: '2021-11-19T00:00:00Z',
      updatedAt: '2021-11-19T00:00:00Z'
    },
    fields: {
      title: 'Art With Me Miami',
      slug: 'art-with-me-miami',
      excerpt: 'Listed Productions brings the underground vibe to Miami Beach.',
      featuredImage: {
        fields: {
          title: 'Art With Me Miami',
          file: { url: '/images/mainone.png' }
        },
        sys: { id: 'img1' }
      },
      category: 'News',
      publishDate: '2021-11-19T00:00:00Z'
    }
  },
  {
    sys: { 
      id: '2',
      createdAt: '2021-12-31T00:00:00Z',
      updatedAt: '2021-12-31T00:00:00Z'
    },
    fields: {
      title: 'Lee Coombs Live at The Cityfox Odyssey NYE',
      slug: 'lee-coombs-cityfox',
      excerpt: 'An unforgettable New Year\'s Eve performance.',
      featuredImage: {
        fields: {
          title: 'Lee Coombs',
          file: { url: '/images/Sinca.jpeg' }
        },
        sys: { id: 'img2' }
      },
      category: 'News',
      publishDate: '2021-12-31T00:00:00Z'
    }
  },
  {
    sys: { 
      id: '3',
      createdAt: '2021-09-29T00:00:00Z',
      updatedAt: '2021-09-29T00:00:00Z'
    },
    fields: {
      title: 'The Real Deal Party Feel Feat. Atish',
      slug: 'real-deal-atish',
      excerpt: 'A marathon session with Listed friends.',
      featuredImage: {
        fields: {
          title: 'Atish',
          file: { url: '/images/camea.png' }
        },
        sys: { id: 'img3' }
      },
      category: 'News',
      publishDate: '2021-09-29T00:00:00Z'
    }
  }
];

// Sample artists data (fallback when Contentful is not configured)
const sampleArtists = [
  { sys: { id: '1' }, fields: { name: 'Atish', slug: 'atish' } },
  { sys: { id: '2' }, fields: { name: 'Ben Annand', slug: 'ben-annand' } },
  { sys: { id: '3' }, fields: { name: 'Dory', slug: 'dory' } },
  { sys: { id: '4' }, fields: { name: 'Halo Varga', slug: 'halo-varga' } },
  { sys: { id: '5' }, fields: { name: 'Jay Tripwire', slug: 'jay-tripwire' } },
  { sys: { id: '6' }, fields: { name: 'Justin Marchacos', slug: 'justin-marchacos' } },
  { sys: { id: '7' }, fields: { name: 'KMLN', slug: 'kmln' } },
  { sys: { id: '8' }, fields: { name: 'Lovestruckk', slug: 'lovestruckk' } },
  { sys: { id: '9' }, fields: { name: 'M.O.N.R.O.E', slug: 'm-o-n-r-o-e' } },
  { sys: { id: '10' }, fields: { name: 'Mark Slee', slug: 'mark-slee' } },
  { sys: { id: '11' }, fields: { name: 'Maxi Storrs', slug: 'maxi-storrs' } },
  { sys: { id: '12' }, fields: { name: 'Mightykat', slug: 'mightykat' } },
  { sys: { id: '13' }, fields: { name: 'Mr. C', slug: 'mr-c' } },
  { sys: { id: '14' }, fields: { name: 'Naveen G', slug: 'naveen-g' } },
  { sys: { id: '15' }, fields: { name: 'Nico Stojan', slug: 'nico-stojan' } },
  { sys: { id: '16' }, fields: { name: 'Nikita', slug: 'nikita' } },
  { sys: { id: '17' }, fields: { name: 'Holmar', slug: 'holmar' } },
  { sys: { id: '18' }, fields: { name: 'Galen', slug: 'galen' } },
  { sys: { id: '19' }, fields: { name: 'Nitin', slug: 'nitin' } },
  { sys: { id: '20' }, fields: { name: 'Bilaliwood', slug: 'bilaliwood' } },
  { sys: { id: '21' }, fields: { name: 'H-Foundation', slug: 'h-foundation' } },
  { sys: { id: '22' }, fields: { name: 'Ray Zuniga', slug: 'ray-zuniga' } },
  { sys: { id: '23' }, fields: { name: 'Philipp Jung', slug: 'philipp-jung' } },
  { sys: { id: '24' }, fields: { name: 'Anja Schneider', slug: 'anja-schneider' } },
  { sys: { id: '25' }, fields: { name: 'Atnarko', slug: 'atnarko' } },
  { sys: { id: '26' }, fields: { name: 'Sinca', slug: 'sinca' } },
  { sys: { id: '27' }, fields: { name: 'N/UM', slug: 'n-um' } },
  { sys: { id: '28' }, fields: { name: 'Matt Caines', slug: 'matt-caines' } },
  { sys: { id: '29' }, fields: { name: 'Reza Safinia', slug: 'reza-safinia' } },
  { sys: { id: '30' }, fields: { name: 'Saqib', slug: 'saqib' } },
  { sys: { id: '31' }, fields: { name: 'Beauty & The Beast', slug: 'beauty-the-beast' } },
  { sys: { id: '32' }, fields: { name: 'Formerly', slug: 'formerly' } },
  { sys: { id: '33' }, fields: { name: 'Camea', slug: 'camea' } },
  { sys: { id: '34' }, fields: { name: 'Niki Sadeki', slug: 'niki-sadeki' } }
];

const listedMixLink = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1187392201&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

export default function HomePage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [artists, setArtists] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getPosts().then(data => setPosts(data.length > 0 ? data : samplePosts)).catch(() => setPosts(samplePosts));
    getArtists().then(data => setArtists(data.length > 0 ? data : sampleArtists)).catch(() => setArtists(sampleArtists));
  }, []);

  const sliderSettings = {
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2800,
    speed: 2800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };

  const getArtistLinkColorClass = (index: number) => {
    return `artist-link-${index % 7}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <main className="Blog" style={{ marginTop: isMobile ? '60px' : '70px' }}>
      {/* Image Slider */}
      <div className="fixcenter" style={{ 
        margin: 'auto', 
        width: isMobile ? '100%' : '83%', 
        padding: '10px' 
      }}>
        <div style={{
          width: isMobile ? '100%' : '75%',
          position: 'relative',
          paddingTop: isMobile ? '56.25%' : '42.1875%',
          marginTop: isMobile ? '-56.25%' : '-42.1875%',
          marginRight: 'auto',
          marginLeft: 'auto'
        }}>
          <Slider {...sliderSettings}>
            {imageSlides.map((url, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <div style={{ paddingTop: '56.25%' }}></div>
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Buzz Section */}
      <h1 className="Buzz" style={{ 
        marginTop: isMobile ? '20px' : '60px', 
        marginBottom: isMobile ? '0' : '60px' 
      }}>
        Buzz
      </h1>

      {/* Posts Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="PostSection--Grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '4rem',
            marginTop: '-60px'
          }}>
            {posts.slice(0, visiblePosts).map((post) => (
              <Link 
                key={post.sys.id} 
                href={`/news/${post.fields.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article className="PostCard" style={{
                  background: 'rgba(0,0,0,0.7)',
                  padding: '2rem',
                  borderRadius: '8px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  {post.fields.featuredImage && (
                    <div style={{
                      width: '100%',
                      height: '200px',
                      marginBottom: '1rem',
                      overflow: 'hidden',
                      borderRadius: '4px'
                    }}>
                      <img
                        src={getContentfulImageUrl(post.fields.featuredImage)}
                        alt={post.fields.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  )}
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    marginBottom: '1rem',
                    color: '#ffffff' 
                  }}>
                    {post.fields.title}
                  </h3>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '1.2rem',
                    marginBottom: '1rem' 
                  }}>
                    {formatDate(post.fields.publishDate || post.sys.createdAt)}
                  </p>
                  <p style={{ 
                    flexGrow: 1,
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1.4rem',
                    lineHeight: '1.6' 
                  }}>
                    {post.fields.excerpt}
                  </p>
                  <div style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <span style={{
                      color: '#f8ec21',
                      fontSize: '1.2rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Read More →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SoundCloud Embed */}
      <div className="container-custom" style={{ marginTop: '60px' }}>
        <h1 style={{ marginBottom: '20px' }}>
          {isMobile ? 'Playlists' : 'Listed Winter Playlists'}
        </h1>
        <iframe
          title="listed-playlist"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={listedMixLink}
          style={{ backgroundColor: 'black' }}
        />
      </div>

      {/* Artists Links */}
      <div className="home-artists-links container-custom" style={{ 
        textAlign: 'center', 
        marginTop: '60px',
        marginBottom: '60px' 
      }}>
        <h1 style={{ marginBottom: '20px' }}>Artists</h1>
        <p style={{ 
          fontFamily: "'dinBoldFont', sans-serif", 
          fontSize: '2.6rem', 
          marginLeft: isMobile ? '0' : '69px', 
          marginRight: isMobile ? '0' : '69px' 
        }}>
          {artists.map((artist, index) => (
            <Link
              key={artist.sys.id}
              href={`/artists/${artist.fields.slug}`}
              className={getArtistLinkColorClass(index)}
              style={{ marginRight: '1em', textDecoration: 'none' }}
            >
              {artist.fields.name.trim()}
            </Link>
          ))}
        </p>
      </div>

      {/* Newsletter Form (placeholder) */}
      <div
        className="ctct-inline-form"
        data-form-id="77fa4a78-f78b-4c9b-9057-b015694f8ed3"
        style={{ minHeight: '100px' }}
      />
    </main>
  );
}
