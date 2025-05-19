'use client'
import { useEffect, useState } from 'react'

export default function VisitorCounter() {
  // eslint-disable-next-line
  const [loading, setLoading] = useState<boolean>(false)
  // eslint-disable-next-line
  const [error, setError] = useState<string | null>(null)

  const [countVisitors, setCountVisitors] = useState(0)
  const [countBots, setCountBots] = useState(0)
  const [countEmails, setCountEmails] = useState(0)
  const [lastVisit, setLastVisit] = useState('')

  const apiUrl = 'https://hono-api.pictusweb.com/api/stats/technik'
  //const apiUrl = 'http://localhost:3013/api/stats/technik'

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json()

        const date = data.lastVisitor_at.split('T')[0]

        setCountBots(data.bots)
        setCountVisitors(data.visitors)
        setCountEmails(data.emails)
        setLastVisit(date)
      } catch (err) {
        console.error('Error fetching bots:', err)
      }
    }

    getStats()
  }, [])

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Visitor Counter Test</h2>

      <div className="mb-4">
        <p className="text-2xl font-bold mt-2">Počet návštev: {countVisitors}</p>
        <p className="text-2xl font-bold mt-2">Roboti: {countBots}</p>
        <p className="text-2xl font-bold mt-2">Emaily : {countEmails}</p>
        <p className="text-2xl font-bold mt-2">Posledná návšteva: {lastVisit}</p>
      </div>

      {/* <div className="flex flex-col gap-2">
        <button
          onClick={createVisitor}
          disabled={loading}
          className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Visitor'}
        </button>
      </div> */}

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
    </div>
  )
}
