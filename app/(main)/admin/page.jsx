import AdminButtons from '@/components/admin/AdminButtons'

export const metadata = {
  title: 'Admin',
  description: 'Where the creator of the app can generate his resume.',
}

export default function AdminPage() {
  return (
    <div className='mx-auto my-16 flex w-full max-w-4xl flex-col items-center justify-center'>
      <AdminButtons />
    </div>
  )
}
