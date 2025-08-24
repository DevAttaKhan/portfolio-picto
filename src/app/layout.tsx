import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header, SEOScripts } from "@/components";

const workSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atta Ur Rahman - Senior MERN Stack Developer & Tech Lead | Portfolio",
  description: "Senior MERN Stack Developer with 4+ years of experience building scalable SaaS and e-commerce solutions. Expert in React, Next.js, Node.js, MongoDB, and AWS. View my portfolio of 100+ projects delivered.",
  keywords: [
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer", 
    "Node.js Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "AWS Developer",
    "Portfolio",
    "Web Development",
    "SaaS Development",
    "E-commerce Development"
  ],
  authors: [{ name: "Atta Ur Rahman" }],
  creator: "Atta Ur Rahman",
  publisher: "Atta Ur Rahman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://attakhan.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://attakhan.dev',
    title: 'Atta Ur Rahman - Senior MERN Stack Developer & Tech Lead',
    description: 'Senior MERN Stack Developer with 4+ years of experience building scalable SaaS and e-commerce solutions. Expert in React, Next.js, Node.js, MongoDB, and AWS.',
    siteName: 'Atta Ur Rahman Portfolio',
    images: [
      {
        url: '/images/profile2.png',
        width: 1200,
        height: 630,
        alt: 'Atta Ur Rahman - Senior MERN Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atta Ur Rahman - Senior MERN Stack Developer & Tech Lead',
    description: 'Senior MERN Stack Developer with 4+ years of experience building scalable SaaS and e-commerce solutions.',
    images: ['/images/profile2.png'],
    creator: '@attakhan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'olHIaRwZJxzUKU0IyUMijSVI8f9nnXzyXIASw9DfdUM',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'theme-color': '#8B5CF6',
    'msapplication-TileColor': '#8B5CF6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Atta Ur Rahman Portfolio',
    'application-name': 'Atta Ur Rahman Portfolio',
    'msapplication-config': '/browserconfig.xml',
  },
  icons: {
    icon: [
      
      { url: "/icon?<generated>", sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${workSans.variable} font-work antialiased`}>
        <SEOScripts />
        <Header />
        {children}
      </body>
    </html>
  );
}
