import {NextResponse} from 'next/server'

export async function GET() {
  const resumeData = {
    contact: {
      name: 'Ethan Garrison',
      pronouns: '(he/him)',
      title: 'Full-Stack Developer',
      location: 'Orlando, Florida, United States',
      phone: '+15802844513',
      email: 'Egarrisxn@gmail.com',
      website: 'egxworld.net',
      github: 'github.com/egarrisxn',
      linkedin: 'linkedin.com/in/ethan-gx',
    },
    summary:
      'Dynamic Full-Stack Developer with a strong foundation in management, now focused on front-end development and server-side programming. Skilled in creating responsive and accessible user interfaces, managing databases, and integrating APIs. Proficient in Agile methodologies and optimization, delivering scalable web solutions that meet user needs and business goals.',
    experience: [
      {
        position: 'Full-Stack Developer',
        dates: 'June 2023 - Present',
        company: 'Freelance',
        location: 'Orlando, Florida, United States',
        responsibilities: [
          'Develop and deploy applications using modern frameworks like React and Node.js, delivering scalable solutions for client needs.',
          'Implement responsive, accessible design principles for optimal user experience and standards compliance.',
        ],
      },
      {
        position: 'Regional Account Manager',
        dates: 'Aug 2021 - Jan 2023',
        company: 'Roughtail Brewing Company',
        location: 'Edmond, Oklahoma, United States',
        responsibilities: [
          'Boosted regional sales by 20% through targeted marketing campaigns and strategic partnerships with distributors.',
          'Streamlined coordination between sales and production teams, enhancing efficiency and alignment across departments.',
        ],
      },
      {
        position: 'Sales Manager',
        dates: 'Dec 2019 - Aug 2021',
        company: 'Armadillo Ale Works',
        location: 'Denton, Texas, United States',
        responsibilities: [
          'Drove a 25% increase in sales by expanding market reach and establishing strong distributor relationships.',
          'Championed collaborative strategies between sales, marketing, and production teams, aligning efforts to meet growth goals.',
        ],
      },
      {
        position: 'Assistant General Manager',
        dates: 'Nov 2017 - Dec 2019',
        company: 'Northside Drafthouse',
        location: 'Richardson, Texas, United States',
        responsibilities: [
          'Achieved significant reduction in costs through operational improvements, while upholding high service standards.',
          'Led a team of 15+ employees, instilling a culture of continuous improvement and setting new standards for service excellence.',
        ],
      },
      {
        position: 'Account Manager',
        dates: 'Oct 2014 - Nov 2017',
        company: 'FullClip Craft Distributors',
        location: 'Dallas, Texas, United States',
        responsibilities: [
          'Strengthened client relationships and improved satisfaction, leading to increased retention and customer loyalty.',
          'Educated clients on trending products, resulting in higher engagement and repeat business.',
        ],
      },
    ],
    education: [
      {
        degree: 'Certification',
        field_of_study: 'Full-Stack Development Boot Camp',
        dates: 'Mar 2023 - June 2023',
        institution: 'University of Central Florida',
        location: 'Orlando, Florida, United States',
        summary: 'Credentials: https://badgr.com/public/assertions/zGk2wldtSXqeMhEOz2wX5Q',
      },
      {
        degree: 'Studied',
        field_of_study: 'Business Management',
        dates: 'Aug 2008 - Dec 2009',
        institution: 'University of Central Oklahoma',
        location: 'Edmond, Oklahoma, United States',
        summary: '',
      },
    ],
    skills: [
      'Front-End Development: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Astro, Tailwind CSS',
      'Back-End Development: Node.js, Express.js, REST APIs, Hono, MongoDB, MySQL, PostgreSQL',
      'DevOps/Tools: Git, Webpack, Vite, Jest, ESLint, npm, pnpm, Sanity, Vercel, Heroku',
      'Best Practices & Methodologies: Continuous Integration & Deployment, Performance Optimization, SEO',
      'Soft Skills: Project Management, Leadership, Communication, Adaptability, Teamwork',
    ],
    projects: [
      {
        name: 'Sway Bae Official',
        url: 'swaybae.net',
        github: 'github.com/egarrisxn/swaybaeofficial',
        description: [
          'Developed a website for a content creator, focusing on SEO best practices and seamless integration with a headless CMS.',
          'Tech Stack: JavaScript, Node.js, React, Next.js, Sanity, Tailwind CSS, daisyUI.',
        ],
      },
      {
        name: 'Unofficial Merchandise',
        url: 'unofficialmerchandise.vercel.app',
        github: 'github.com/egarrisxn/unofficial-merchandise',
        description: [
          'Built a modern e-commerce storefront with a client-centric design, optimizing user experience and potential sales conversion.',
          'Tech Stack: JavaScript, Node.js, React, Next.js, Sanity, Stripe, Tailwind CSS.',
        ],
      },
      {
        name: 'EGxWorld v1',
        url: 'egxworld.vercel.app',
        github: 'github.com/egarrisxn/egxworld-v1',
        description: [
          'Created a personal website and portfolio, highlighting projects and skills with a clean and responsive design.',
          'Tech Stack: JavaScript, Node.js, React, Next.js, Tailwind CSS, shadcn/ui.',
        ],
      },
      {
        name: 'ATS Resbuilder',
        url: 'ats-resbuilder.vercel.app',
        github: 'github.com/egarrisxn/ats-resbuilder',
        description: [
          'Built an intuitive and professional ATS friendly resume template, showcasing multiple ways to generate/save your resume.',
          'Tech Stack: JavaScript, Node.js, React, Next.js, MDX, Tailwind CSS.',
        ],
      },
      {
        name: 'n00bdev',
        url: 'n00bdev.vercel.app',
        github: 'github.com/egarrisxn/n00bdev',
        description: [
          'Developed a server-side rendered blog, focusing on delivering insightful content with optimal performance.',
          'Tech Stack: TypeScript, Node.js, Astro, Tailwind CSS.',
        ],
      },
    ],
  }

  return NextResponse.json(resumeData)
}
