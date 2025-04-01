/*
====================================
|         Next.js Interview Prep  |
====================================

This file contains key Next.js concepts with code snippets.
Topics covered:
  - Server-Side Rendering (SSR)
  - Static Site Generation (SSG)
  - API Routes
  - Role-Based Access Control (RBAC)
  - JWT Authentication
  - Performance Optimizations
  - Deployment
*/

// ============================
// 1. Server-Side Rendering (SSR)
// ============================
// - Fetches data on every request
// - Useful for dynamic content (e.g., user dashboard)
// SSR generates the HTML for each request on the server before sending it to the browser. This improves SEO and initial load time.

import { GetServerSideProps } from 'next';

export default function Home({ data }) {
  return <div>{data}</div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return {
    props: { data: JSON.stringify(data) },
  };
};

// ============================
// 2. Static Site Generation (SSG)
// ============================
// - Generates HTML at build time
// - Great for blogs, documentation, or public data
// SSG pre-renders pages at build time, making them super fast and SEO-friendly.

import { GetStaticProps } from 'next';

export default function Home({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 10, // ISR: Updates content every 10 seconds
  };
};

// ============================
// 3. API Routes in Next.js
// ============================
// - Allows backend functionality inside Next.js
// - Used for authentication, form submissions, etc.

// File: pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "Hello from Next.js API!" });
}

// ============================
// 4. Role-Based Access Control (RBAC)
// ============================
// - Restricts access based on user roles

const user = {
  role: 'admin', // Change this to 'user' or 'guest' for testing
};

export default function Dashboard() {
  if (user.role !== 'admin') {
    return <h1>Access Denied</h1>;
  }
  return <h1>Welcome, Admin!</h1>;
}

// ============================
// 5. JWT Authentication in Next.js
// ============================
// - Securely store user authentication details

// Install dependency: npm install jsonwebtoken
import jwt from 'jsonwebtoken';

const secret = 'mysecret';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username } = req.body;
    const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
    res.status(200).json({ token });
  }
}

// ============================
// 6. Performance Optimizations
// ============================
// - Dynamic Imports (Code Splitting)
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), { ssr: false });

export default function Home() {
  return <HeavyComponent />;
}

// - Image Optimization
import Image from 'next/image';

export default function Home() {
  return <Image src="/myimage.jpg" width={500} height={300} alt="Optimized Image" />;
}

// ============================
// 7. Deployment with Vercel
// ============================
// - Quick and easy deployment with Vercel

/*
Steps to deploy:
1. Install Vercel CLI: npm install -g vercel
2. Login: vercel login
3. Deploy: vercel
*/
