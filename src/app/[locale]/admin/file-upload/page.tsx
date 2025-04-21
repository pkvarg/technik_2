'use client'
import { useState, useRef, ChangeEvent } from 'react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const FileUpload = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const resetUpload = () => {
    setFile(null)
    setFilePreview(null)
    setError(null)
    setSuccessMessage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    // Validate file type
    // Check if the file is either an image or audio file
    if (!selectedFile.type.startsWith('image/') && !selectedFile.type.startsWith('audio/')) {
      setError('Prosím, nahrajte súbor s obrázkom alebo audio súbor')
      return
    }

    setFile(selectedFile)
    setError(null)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setFilePreview(reader.result as string)
    }
    reader.readAsDataURL(selectedFile)
  }

  const uploadFile = async () => {
    if (!file) {
      setError('Žiadny súbor na nahratie')
      return
    }

    setLoading(true)
    setError(null)
    setSuccessMessage(null)

    const formData = new FormData()
    formData.append('file', file)

    // const apiUrl =
    //   process.env.NODE_ENV === 'development'
    //     ? 'http://localhost:3013/api/upload/technik'
    //     : 'https://hono-api.pictusweb.com/api/upload/technik'

    const apiUrl = 'https://hono-api.pictusweb.com/api/upload/technik'

    //console.log('apiUrl file upload', apiUrl)

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      })

      // console.log('response', response)

      if (!response.ok) {
        throw new Error('Nepodarilo sa nahrať súbor')
      }

      const data = await response.json()
      // console.log('data', data)
      setSuccessMessage('Súbor bol úspešne nahraný!')
      setUploadedFileUrl(data.imageUrl)

      // Reset the file input but keep the success message and URL
      setFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (err) {
      console.error('Chyba pri nahrávaní súboru:', err)
      setError(err instanceof Error ? err.message : 'Nastala neznáma chyba')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="footer-gradient py-8 px-6">
      <Link href={'/sk/admin'} className="text-white text-[30px] text-center cursor-pointer">
        Naspäť
      </Link>
      <h1 className="text-2xl text-center font-bold mb-6 title-color">File Upload</h1>
      <div className="p-6 border border-black rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-xl text-white font-bold mb-4">Nahrať súbor</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-400">
              Vyberte súbor
            </label>
            <input
              type="file"
              id="fileUpload"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {filePreview && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">Náhľad:</p>
              <div className="relative h-40 w-40 border">
                <Image
                  src={filePreview}
                  alt="Náhľad súboru"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={uploadFile}
              disabled={loading || !file}
              className="flex-1 button-color text-white py-2 px-4 rounded disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Nahrávam...' : 'Nahrať súbor'}
            </button>

            {file && (
              <button
                onClick={resetUpload}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
              >
                Zrušiť
              </button>
            )}
          </div>
        </div>

        {successMessage && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {uploadedFileUrl && (
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-1">Odkaz na nahraný súbor:</p>
            <div className="p-2 bg-gray-100 text-black border rounded break-all">
              {uploadedFileUrl}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FileUpload
