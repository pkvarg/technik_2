import React from 'react'
import AuthButton from '@/auth/AuthButton.server'
import { auth } from '@/auth'
import SimpleTest from '@/app/components/SimpleTest'
import VisitorCounter from '@/app/components/Visitor'
import ProductCreator from '@/app/components/Product'
import PagesNavbarServer from '@/app/components/translationServerComponents/PagesNavbarServer'

const Admin = async () => {
  const session = await auth()
  return (
    <>
      <PagesNavbarServer />
      <div className="container mx-auto py-8 space-y-8">
        <h1>Admin</h1>

        <ProductCreator />

        <VisitorCounter />
        <SimpleTest />
        <AuthButton key={session?.user ? 'signed-in' : 'signed-out'} />
      </div>
    </>
  )
}

export default Admin
