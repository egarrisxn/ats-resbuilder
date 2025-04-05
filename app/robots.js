export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ats-resbuilder.vercel.app/sitemap.xml',
  }
}
