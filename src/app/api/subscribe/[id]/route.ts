import db from '@/db/db'
import { NextResponse } from 'next/server'

// eslint-disable-next-line
export async function DELETE(req: Request, context: any) {
  if (req.method !== 'DELETE') {
    return NextResponse.json({ message: 'Wrong method!' })
  }

  const { params } = context
  const { id } = params

  try {
    await db.subscriber.delete({
      where: {
        id,
      },
    })

    return NextResponse.json('SUBSCRIBER DELETED')
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
