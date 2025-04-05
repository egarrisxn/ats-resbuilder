export default function manifest() {
  return {
    name: 'ATS Resbuilder',
    short_name: 'ATS.',
    description: 'ATS Friendly Resume Builder!',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'any',
      },
      {
        src: '/web-app-manifest-512x512.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
  }
}
