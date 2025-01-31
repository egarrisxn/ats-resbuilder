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
      website: 'https://egxo.dev',
      github: 'https://github.com/egarrisxn',
      linkedin: 'https://linkedin.com/in/ethan-gx',
    },
    summary:
      'Versatile Full-Stack Developer with a strong foundation in management, now focused on front-end development and server-side programming. Proficient in creating responsive and accessible user interfaces, managing databases, and integrating APIs. Skilled in Agile methodologies and optimization, delivering scalable web solutions aligned with user needs and client objectives.',
    experience: [
      {
        position: 'Full-Stack Developer',
        dates: 'June 2023 - Present',
        company: 'Freelance',
        location: 'Orlando, Florida, United States',
        responsibilities: [
          'Develop and deploy high-quality applications using modern frameworks like React, Tailwind CSS, and Node.js.',
          'Implement responsive, accessible design principles for exceptional user experience and standards compliance.',
        ],
      },
      {
        position: 'Regional Account Manager',
        dates: 'Aug 2021 - Jan 2023',
        company: 'Roughtail Brewing Company',
        location: 'Edmond, Oklahoma, United States',
        responsibilities: [
          'Resolved escalations and nurtured distributor relationships to strengthen business partnerships.',
          'Delivered a 20% increase in regional sales by implementing data-driven marketing strategies.',
        ],
      },
      {
        position: 'Sales Manager',
        dates: 'Dec 2019 - Aug 2021',
        company: 'Armadillo Ale Works',
        location: 'Denton, Texas, United States',
        responsibilities: [
          'Expanded market reach, achieving a 25% sales growth through strategic partnerships and innovative campaigns.',
          'Facilitated collaboration across sales, production, and marketing teams to streamline operations.',
        ],
      },
      {
        position: 'Assistant General Manager',
        dates: 'Nov 2017 - Dec 2019',
        company: 'Northside Drafthouse',
        location: 'Richardson, Texas, United States',
        responsibilities: [
          'Streamlined operations and reduced costs while maintaining exceptional service standards.',
          'Supervised a team of 15+ employees, fostering a culture of excellence and continuous improvement.',
        ],
      },
      {
        position: 'Account Manager',
        dates: 'Oct 2014 - Nov 2017',
        company: 'FullClip Craft Distributors',
        location: 'Dallas, Texas, United States',
        responsibilities: [
          'Cultivated long-term client relationships by resolving inquiries efficiently and providing tailored solutions.',
          'Proactively educated clients on new products, leading to a higher satisfaction and retention rate.',
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
      'Front-End Development: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, UX/UI Design',
      'Back-End Development: Node.js, Express.js, Hono, REST APIs, SQL(MySQL), NoSQL(MongoDB), PostgreSQL',
      'DevOps/Tools: Version Control, API Integration, Git, Webpack, Vite, Pnpm, ESlint, Jest, Sanity CMS',
      'Best Practices & Methodologies: Agile, Continuous Integration & Deployment, Performance and SEO Optimization',
      'Soft Skills: Project Management, Communication, Adaptability, Time Management, Team Collaboration',
    ],
    projects: [
      {
        name: 'Sway Bae Official',
        github: 'https://github.com/egarrisxn/swaybaeofficial',
        description: [
          'Built a professional website optimized for SEO and integrated with a headless CMS to enhance content management.',
        ],
      },
      {
        name: 'Unofficial Merchandise',
        github: 'https://github.com/egarrisxn/unofficial-merchandise',
        description: [
          'Created a modern e-commerce site with a user-centric design, enhancing user experience and driving sales potential.',
        ],
      },
      {
        name: 'N00b:Dev - Tips & Tricks for Developers',
        github: 'https://github.com/egarrisxn/n00bdev',
        description: [
          'Developed a server-side rendered blog, focusing on delivering insightful content with optimal performance.',
        ],
      },
      {
        name: 'CC NextFolio',
        github: 'https://github.com/egarrisxn/cc-nextfolio',
        description: [
          'Designed a type-safe portfolio template for developers, leveraging modern frameworks for enhanced functionality.',
        ],
      },
    ],
  }

  return NextResponse.json(resumeData)
}
