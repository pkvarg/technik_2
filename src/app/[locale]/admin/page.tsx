import React from 'react'
import AuthButton from '@/auth/AuthButton.server'
import { auth } from '@/auth'
import SimpleTest from '@/app/components/SimpleTest'
import VisitorCounter from '@/app/components/Visitor'
import PagesNavbarServer from '@/app/components/translationServerComponents/PagesNavbarServer'
import { Link } from '@/i18n/routing'

const Admin = async () => {
  const session = await auth()
  return (
    <main className="footer-gradient text-white px-6">
      <PagesNavbarServer />
      <AuthButton key={session?.user ? 'signed-in' : 'signed-out'} />
      <div className="container py-8 space-y-8">
        <h1 className="text-center text-[30px]">Ahoj Admin!</h1>

        <div className="flex flex-col gap-4">
          <Link href={`/admin/file-upload`}>File Upload</Link>
          <Link href={`/admin/product`}>Produkt</Link>
          <Link href={`/admin/subscribers`}>Subscribers</Link>
        </div>

        <VisitorCounter />
        <SimpleTest />
      </div>
    </main>
  )
}

export default Admin
