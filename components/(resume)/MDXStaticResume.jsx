import {MDXRemote} from 'next-mdx-remote/rsc'

export function MDX2(props) {
  return <MDXRemote {...props} components={{}} />
}

export default function MDX2Resume() {
  return (
    <main>
      <MDX2
        source={`
# Ethan Garrison (he/him)

## Full Stack Developer

Orlando, Florida, United States | [+15802844513](tel:+15802844513) | [Egarrisxn@gmail.com](mailto:egarrisxn@gmail.com)

[https://egxo.dev](https://egxo.dev) | [https://github.com/egarrisxn](https://github.com/egarrisxn) | [https://linkedin.com/in/ethan-gx](https://linkedin.com/in/ethan-gx)

### Summary

Versatile Full Stack Developer with a strong foundation in management, now focused on front-end development and server-side programming. Proficient in creating responsive and accessible user interfaces, managing databases, and integrating APIs. Skilled in Agile methodologies and optimization, delivering scalable web solutions aligned with user needs and client objectives.

### Work Experience

Full Stack Developer

_June 2023 - Present_ | Freelance, Orlando, Florida, United States

- Develop and deploy high-quality applications using modern frameworks like React, Tailwind CSS, and Node.js.
- Implement responsive, accessible design principles for exceptional user experience and standards compliance.

Regional Account Manager

_Aug 2021 - Jan 2023_ | Roughtail Brewing Company, Edmond, Oklahoma, United States

- Resolved escalations and nurtured distributor relationships to strengthen business partnerships.
- Delivered a 20% increase in regional sales by implementing data-driven marketing strategies.

Sales Manager

_Dec 2019 - Aug 2021_ | Armadillo Ale Works, Denton, Texas, United States

- Expanded market reach, achieving a 25% sales growth through strategic partnerships and innovative campaigns.
- Facilitated collaboration across sales, production, and marketing teams to streamline operations.

Assistant General Manager

_Nov 2017 - Dec 2019_ | Northside Drafthouse, Richardson, Texas, United States

- Streamlined operations and reduced costs while maintaining exceptional service standards.
- Supervised a team of 15+ employees, fostering a culture of excellence and continuous improvement.

Account Manager

_Oct 2014 - Nov 2017_ | FullClip Craft Distributors, Dallas, Texas, United States

- Cultivated long-term client relationships by resolving inquiries efficiently and providing tailored solutions.
- Proactively educated clients on new products, leading to a higher satisfaction and retention rate.

### Education & Certifications

**Certification** - Full Stack Development Boot Camp | _Mar 2023 - June 2023_

University of Central Florida, Orlando, Florida, United States

_Credentials: https://badgr.com/public/assertions/zGk2wldtSXqeMhEOz2wX5Q_

**Studied** - Business Management | _Aug 2008 - Dec 2009_

University of Central Oklahoma, Edmond, Oklahoma, United States

### Technical Skills

- Front-End Development: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, UX/UI Design
- Back-End Development: Node.js, Express.js, Hono, REST APIs, SQL(MySQL), NoSQL(MongoDB), PostgreSQL
- DevOps/Tools: Version Control, API Integration, Git, Webpack, Vite, Pnpm, ESlint, Jest, Sanity CMS
- Best Practices & Methodologies: Agile, Continuous Integration & Deployment, Performance and SEO Optimization
- Soft Skills: Project Management, Communication, Adaptability, Time Management, Team Collaboration

### Projects

Sway Bae Official | [https://github.com/egarrisxn/swaybaeofficial](https://github.com/egarrisxn/swaybaeofficial)

- Built a professional website optimized for SEO and integrated with a headless CMS to enhance content management.

Unofficial Merchandise | [https://github.com/egarrisxn/unofficial-merchandise](https://github.com/egarrisxn/unofficial-merchandise)

- Created a modern e-commerce site with a user-centric design, enhancing user experience and driving sales potential.

n00b:dev - Tips & Tricks for Developers | [https://github.com/egarrisxn/n00bdev](https://github.com/egarrisxn/n00bdev)

- Developed a server-side rendered blog, focusing on delivering insightful content with optimal performance.

xprod | [https://github.com/egarrisxn/xprod](https://github.com/egarrisxn/xprod)

- Designed a type-safe productivity web application, leveraging modern frameworks for enhanced functionality.
          `}
      />
    </main>
  )
}
