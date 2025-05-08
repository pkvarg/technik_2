import db from '@/db/db' // Import your singleton db client
import { NextResponse } from 'next/server'

export async function PUT(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check if the email already exists in the database
    const existingSubscriber = await db.subscriber.findFirst({
      where: {
        email: email,
      },
    })

    // If subscriber already exists, return success but with exists flag
    if (existingSubscriber) {
      return NextResponse.json({ exists: true })
    }

    // Create new subscriber if email doesn't exist
    const newSubscriber = await db.subscriber.create({
      data: {
        email,
        createdAt: new Date(),
      },
    })

    return NextResponse.json(newSubscriber)
  } catch (error) {
    console.error('Subscribe API error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  if (req.method === 'GET') {
    try {
      const subcribers = await db.subscriber.findMany()
      return NextResponse.json(subcribers)
    } catch (error) {
      console.log(error)
      return NextResponse.json({ error })
    }
  }
}
