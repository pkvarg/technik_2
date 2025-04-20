import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  // Extract the path from the URL
  const url = new URL(request.url)
  const pathFromUrl = url.pathname.replace('/api/uploads/', '')

  // If no specific file requested, return 404
  if (!pathFromUrl) {
    return new NextResponse('File Not Found', { status: 404 })
  }

  const filePath = path.join(process.cwd(), 'public/uploads', pathFromUrl)

  try {
    const file = fs.readFileSync(filePath)

    // Get file extension (lowercase)
    const fileExtension = path.extname(filePath).toLowerCase()

    // Map file extensions to MIME types
    const mimeTypes: Record<string, string> = {
      // Images
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.webp': 'image/webp',
      '.avif': 'image/avif',
      '.bmp': 'image/bmp',
      '.ico': 'image/x-icon',
      '.tif': 'image/tiff',
      '.tiff': 'image/tiff',

      // Default for unknown types
      '': 'application/octet-stream',
    }

    // Get the appropriate MIME type or default to octet-stream
    const contentType = mimeTypes[fileExtension] || 'application/octet-stream'

    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error serving file:', error)
    return new NextResponse('File Not Found', { status: 404 })
  }
}
