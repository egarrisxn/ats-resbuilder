import ExampleLinks from '@/components/ExampleLinks'

export default function RootLayout({children}) {
  return (
    <div className='mx-auto my-16 flex flex-col gap-4 px-2 sm:px-4'>
      <ExampleLinks />
      {children}
    </div>
  )
}
