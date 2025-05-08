'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Link } from '@/i18n/routing'

interface Subscriber {
  id: string
  email: string
  createdAt: string
}

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  // Fetch subscribers
  const fetchSubscribers = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/subscribe')

      if (response.data) {
        // Sort subscribers by date
        const sortedSubscribers = response.data.sort((a: Subscriber, b: Subscriber) => {
          const dateA = new Date(a.createdAt).getTime()
          const dateB = new Date(b.createdAt).getTime()
          return sortDirection === 'desc' ? dateB - dateA : dateA - dateB
        })

        setSubscribers(sortedSubscribers)
      }
    } catch (error) {
      console.error('Error fetching subscribers:', error)
      toast.error('Nepodarilo sa načítať odberateľov')
    } finally {
      setLoading(false)
    }
  }

  // Delete subscriber
  const deleteSubscriber = async (id: string) => {
    try {
      setDeleting(id)
      await axios.delete(`/api/subscribe/${id}`)
      setSubscribers(subscribers.filter((sub) => sub.id !== id))
      toast.success('Odberateľ bol odstránený')
    } catch (error) {
      console.error('Error deleting subscriber:', error)
      toast.error('Nepodarilo sa odstrániť odberateľa')
    } finally {
      setDeleting(null)
    }
  }

  // Toggle sort direction
  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('sk-SK', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // Filter subscribers based on search term
  const filteredSubscribers = subscribers.filter((subscriber) =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Fetch subscribers on component mount and when sort direction changes
  useEffect(() => {
    fetchSubscribers()
  }, [sortDirection, fetchSubscribers])

  // Copy all emails to clipboard
  const copyEmailsToClipboard = () => {
    try {
      // Get the emails to copy (either filtered or all)
      const emailsToCopy = filteredSubscribers.map((sub) => sub.email).join('; ')

      // Copy to clipboard
      navigator.clipboard
        .writeText(emailsToCopy)
        .then(() => {
          toast.success(`${filteredSubscribers.length} emailov skopírovaných do schránky`)
        })
        .catch((err) => {
          console.error('Failed to copy emails:', err)
          toast.error('Nepodarilo sa skopírovať emaily')
        })
    } catch (error) {
      console.error('Error copying emails:', error)
      toast.error('Nepodarilo sa skopírovať emaily')
    }
  }

  return (
    <main className="footer-gradient">
      <Link href={'/admin'} className="text-white text-[30px] text-center cursor-pointer m-12">
        Naspäť
      </Link>
      <div className="min-h-screen  px-4 py-16 text-white lg:px-[10%]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold title-color mb-4 sm:mb-0">Správa odberateľov</h1>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Hľadať podľa emailu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                onClick={() => fetchSubscribers()}
                className="px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md hover:bg-gray-800 transition-all duration-300"
              >
                Obnoviť
              </button>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-4">
            <button
              onClick={copyEmailsToClipboard}
              disabled={filteredSubscribers.length === 0}
              className={`button-color hover:bg-amber-600 transition-all duration-300 px-4 py-2 rounded-md flex items-center gap-2 ${
                filteredSubscribers.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              Skopírovať všetky emaily
            </button>

            <span className="text-sm text-gray-400 self-center">
              {searchTerm
                ? `Kopírovať sa bude ${filteredSubscribers.length} filtrovaných emailov`
                : `Kopírovať sa bude ${subscribers.length} emailov`}
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
            </div>
          ) : (
            <>
              <div className="bg-[#0a0a0a] rounded-lg border border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-800">
                    <thead className="bg-[#111111]">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer"
                          onClick={toggleSortDirection}
                        >
                          <div className="flex items-center">
                            Dátum registrácie
                            <span className="ml-2">{sortDirection === 'desc' ? '▼' : '▲'}</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Akcie
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#0a0a0a] divide-y divide-gray-800">
                      {filteredSubscribers.length > 0 ? (
                        filteredSubscribers.map((subscriber) => (
                          <tr key={subscriber.id} className="hover:bg-[#111111]">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                              {subscriber.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {formatDate(subscriber.createdAt)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => deleteSubscriber(subscriber.id)}
                                disabled={deleting === subscriber.id}
                                className={`text-red-500 hover:text-red-400 transition-colors ${
                                  deleting === subscriber.id ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                              >
                                {deleting === subscriber.id ? 'Odstraňujem...' : 'Odstrániť'}
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="px-6 py-10 text-center text-sm text-gray-400">
                            {searchTerm
                              ? 'Žiadni odberatelia nezodpovedajú zadanému vyhľadávaniu'
                              : 'Žiadni odberatelia neboli nájdení'}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-400">
                Celkový počet odberateľov: {subscribers.length}
                {searchTerm && ` (zobrazených: ${filteredSubscribers.length})`}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default Subscribers
