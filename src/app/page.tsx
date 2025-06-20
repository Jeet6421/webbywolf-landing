'use client';

import { useEffect, useState } from 'react';
import PageLoader from '@/components/common/PageLoader';
import NewsletterForm from '@/components/sections/NewsletterForm';
import FadeIn from '@/components/animations/Fadeln';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 sm:py-36 max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Build Stunning Web Experiences
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Join WebbyWolf and create pixel-perfect, responsive, and animated landing pages using modern technologies.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 w-full">
            <NewsletterForm />
          </div>
        </FadeIn>
      </section>

      {/* Placeholder for other sections */}
      <section className="h-[500px] bg-white"></section>
    </main>
  );
}
