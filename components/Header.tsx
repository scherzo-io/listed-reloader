'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { href: '/artists', label: 'Artists', id: 'navc1' },
    { href: '/news', label: 'News', id: 'navc2' },
    { href: '/events', label: 'Events', id: 'navc3' },
    { href: '/productions', label: 'Productions', id: 'navc4' },
    { href: '/contact', label: 'Contact', id: 'navc5' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: isMobile ? '60px' : '70px',
      backgroundColor: 'black',
      zIndex: 1000,
      borderBottom: '1px solid black'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        marginLeft: isMobile ? '20px' : '69px',
        marginRight: isMobile ? '20px' : '69px'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}>
          <Image
            src="/images/llogo.png"
            alt="Listed Productions"
            width={isMobile ? 100 : 140}
            height={isMobile ? 36 : 50}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav style={{
            display: 'flex',
            gap: '35px',
            alignItems: 'center'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                id={item.id}
                style={{
                  fontFamily: "'dinBoldFont', sans-serif",
                  fontSize: '2.2rem',
                  color: '#ffffff',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  transition: 'color 0.3s ease',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px'
            }}
          >
            <span style={{
              display: 'block',
              width: '30px',
              height: '3px',
              backgroundColor: '#ffffff',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(45deg) translateY(8px)' : 'none'
            }} />
            <span style={{
              display: 'block',
              width: '30px',
              height: '3px',
              backgroundColor: '#ffffff',
              opacity: isOpen ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }} />
            <span style={{
              display: 'block',
              width: '30px',
              height: '3px',
              backgroundColor: '#ffffff',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
            }} />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div style={{
          position: 'absolute',
          top: '60px',
          left: 0,
          right: 0,
          backgroundColor: 'black',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                id={item.id}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "'dinBoldFont', sans-serif",
                  fontSize: '1.8rem',
                  color: '#ffffff',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'color 0.3s ease'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
