export default function manifest() {
  return {
    name: 'ATS Resbuilder',
    short_name: 'ATS.',
    description: 'ATS Friendly Resume Nuilder',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
    ],
  }
}
