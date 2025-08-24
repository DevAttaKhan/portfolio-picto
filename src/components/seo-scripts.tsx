'use client';

export const SEOScripts = () => {
  return (
    <>
      {/* Structured Data for Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Atta Ur Rahman",
            "jobTitle": "Senior MERN Stack Developer & Tech Lead",
            "description": "Senior MERN Stack Developer with 4+ years of experience building scalable SaaS and e-commerce solutions",
            "url": "https://attakhan.dev",
            "image": "https://attakhan.dev/images/hero-profile.png",
            "sameAs": [
              "http://www.linkedin.com/in/atta-ur-rahman-ak",
              "https://github.com/DevAttaKhan"
            ],
            "knowsAbout": [
              "React",
              "Next.js", 
              "Node.js",
              "MongoDB",
              "TypeScript",
              "AWS",
              "Docker",
              "MERN Stack Development",
              "SaaS Development",
              "E-commerce Development"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance/Remote"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Pakistan"
            }
          })
        }}
      />
      
      {/* Structured Data for Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Atta Ur Rahman Portfolio",
            "url": "https://attakhan.dev",
            "description": "Senior MERN Stack Developer Portfolio showcasing React, Next.js, Node.js, and MongoDB expertise",
            "publisher": {
              "@type": "Person",
              "name": "Atta Ur Rahman"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://attakhan.dev/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}; 