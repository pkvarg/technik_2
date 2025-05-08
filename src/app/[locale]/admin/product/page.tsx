import React from 'react'
import { Link } from '@/i18n/routing'
import ProductManager from '@/app/components/Product'

const Product = () => {
  return (
    <div className="footer-gradient">
      <div className="p-8">
        <Link href={'/admin'} className="text-white text-[30px] text-center cursor-pointer">
          Naspäť
        </Link>
        <ProductManager />
      </div>
    </div>
  )
}

export default Product
