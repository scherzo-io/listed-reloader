import axios from 'axios';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

// Type definitions
export interface StrapiAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
    };
  };
}

export interface Artist {
  id: number;
  attributes: StrapiAttributes & {
    name: string;
    slug: string;
    bio?: string;
    image?: StrapiImage;
    soundcloud?: string;
    video?: string;
    socialLinks?: {
      soundcloud?: string;
      instagram?: string;
      spotify?: string;
      facebook?: string;
      residentAdvisor?: string;
    };
  };
}

export interface Post {
  id: number;
  attributes: StrapiAttributes & {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image: StrapiImage;
    category: {
      data: {
        id: number;
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    author?: {
      data: {
        id: number;
        attributes: {
          name: string;
          email: string;
        };
      };
    };
  };
}

export interface Event {
  id: number;
  attributes: StrapiAttributes & {
    title: string;
    slug: string;
    description: string;
    date: string;
    venue: string;
    image?: StrapiImage;
    artists?: {
      data: Artist[];
    };
  };
}

// Helper function to get full image URL
export function getStrapiImageUrl(image: StrapiImage | undefined): string {
  if (!image?.data?.attributes?.url) {
    return '/images/logo.png'; // Default image
  }
  
  const url = image.data.attributes.url;
  
  // If it's already a full URL, return it
  if (url.startsWith('http')) {
    return url;
  }
  
  // Otherwise, prepend the Strapi base URL
  const baseUrl = STRAPI_API_URL.replace('/api', '');
  return `${baseUrl}${url}`;
}

// Fetch functions
export async function getArtists(): Promise<Artist[]> {
  try {
    const response = await axios.get(`${STRAPI_API_URL}/artists?populate=*`);
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching artists:', error);
    return [];
  }
}

export async function getArtistBySlug(slug: string): Promise<Artist | null> {
  try {
    const response = await axios.get(
      `${STRAPI_API_URL}/artists?filters[slug][$eq]=${slug}&populate=*`
    );
    const artists = response.data.data;
    return artists.length > 0 ? artists[0] : null;
  } catch (error) {
    console.error('Error fetching artist:', error);
    return null;
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    const response = await axios.get(
      `${STRAPI_API_URL}/posts?populate[image][populate]=*&populate[category][populate]=*&populate[author][populate]=*&sort=createdAt:desc`
    );
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await axios.get(
      `${STRAPI_API_URL}/posts?filters[slug][$eq]=${slug}&populate[image][populate]=*&populate[category][populate]=*&populate[author][populate]=*`
    );
    const posts = response.data.data;
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getEvents(): Promise<Event[]> {
  try {
    const response = await axios.get(
      `${STRAPI_API_URL}/events?populate[image][populate]=*&populate[artists][populate]=*&sort=date:desc`
    );
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  try {
    const response = await axios.get(
      `${STRAPI_API_URL}/events?filters[slug][$eq]=${slug}&populate[image][populate]=*&populate[artists][populate]=*`
    );
    const events = response.data.data;
    return events.length > 0 ? events[0] : null;
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}
