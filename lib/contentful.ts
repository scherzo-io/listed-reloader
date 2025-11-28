import { createClient, ContentfulClientApi } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Check if Contentful is configured
const isConfigured = !!(
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID && 
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
);

// Initialize Contentful client only if configured
let client: ContentfulClientApi<any> | null = null;

if (isConfigured) {
  client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master'
  });
}

// Type definitions for Contentful content
export interface ContentfulImage {
  fields: {
    title: string;
    file: {
      url: string;
      details?: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
    };
  };
  sys: {
    id: string;
  };
}

export interface Artist {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    slug: string;
    bio?: string | Document;
    image?: ContentfulImage;
    soundcloud?: string;
    video?: string;
    instagram?: string;
    facebook?: string;
    spotify?: string;
    residentAdvisor?: string;
  };
}

export interface Post {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content?: Document;
    featuredImage?: ContentfulImage;
    category?: string;
    publishDate?: string;
  };
}

export interface Event {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    description?: string | Document;
    date: string;
    venue: string;
    image?: ContentfulImage;
    artists?: Artist[];
  };
}

// Helper function to get full image URL
export function getContentfulImageUrl(image: ContentfulImage | undefined): string {
  if (!image?.fields?.file?.url) {
    return '/images/logo.png'; // Default image
  }
  
  const url = image.fields.file.url;
  
  // Add protocol if missing
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  
  return url;
}

// Optimize image URL with Contentful Image API
export function getOptimizedImageUrl(
  image: ContentfulImage | undefined, 
  options?: { width?: number; height?: number; quality?: number; format?: string }
): string {
  const baseUrl = getContentfulImageUrl(image);
  
  if (baseUrl === '/images/logo.png' || !options) {
    return baseUrl;
  }
  
  const params = new URLSearchParams();
  if (options.width) params.append('w', options.width.toString());
  if (options.height) params.append('h', options.height.toString());
  if (options.quality) params.append('q', options.quality.toString());
  if (options.format) params.append('fm', options.format);
  
  return `${baseUrl}?${params.toString()}`;
}

// Fetch functions with error handling
export async function getArtists(): Promise<Artist[]> {
  if (!client) {
    console.log('Contentful not configured, returning empty array');
    return [];
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'artist',
      order: ['fields.name'] as any,
      limit: 100
    });
    return response.items as any as Artist[];
  } catch (error) {
    console.error('Error fetching artists from Contentful:', error);
    return [];
  }
}

export async function getArtistBySlug(slug: string): Promise<Artist | null> {
  if (!client) {
    console.log('Contentful not configured, returning null');
    return null;
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'artist',
      'fields.slug': slug,
      limit: 1
    });
    
    if (response.items.length > 0) {
      return response.items[0] as any as Artist;
    }
    return null;
  } catch (error) {
    console.error('Error fetching artist from Contentful:', error);
    return null;
  }
}

export async function getPosts(): Promise<Post[]> {
  if (!client) {
    console.log('Contentful not configured, returning empty array');
    return [];
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'post',
      order: ['-fields.publishDate'] as any,
      limit: 100
    });
    return response.items as any as Post[];
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!client) {
    console.log('Contentful not configured, returning null');
    return null;
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'post',
      'fields.slug': slug,
      limit: 1
    });
    
    if (response.items.length > 0) {
      return response.items[0] as any as Post;
    }
    return null;
  } catch (error) {
    console.error('Error fetching post from Contentful:', error);
    return null;
  }
}

export async function getEvents(): Promise<Event[]> {
  if (!client) {
    console.log('Contentful not configured, returning empty array');
    return [];
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'event',
      order: ['-fields.date'] as any,
      limit: 100
    });
    return response.items as any as Event[];
  } catch (error) {
    console.error('Error fetching events from Contentful:', error);
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  if (!client) {
    console.log('Contentful not configured, returning null');
    return null;
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'event',
      'fields.slug': slug,
      limit: 1
    });
    
    if (response.items.length > 0) {
      return response.items[0] as any as Event;
    }
    return null;
  } catch (error) {
    console.error('Error fetching event from Contentful:', error);
    return null;
  }
}

// Check if Contentful is configured
export function isContentfulConfigured(): boolean {
  return isConfigured;
}
