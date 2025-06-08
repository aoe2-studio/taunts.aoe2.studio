'use client'

import items from '@/taunts.json'
import Fuse from 'fuse.js'
import { useState } from 'react'

const fuse = new Fuse(Object.values(items), {
  keys: ['text'],
  threshold: 0.3,
  distance: 100,
  ignoreLocation: true,
  minMatchCharLength: 2,
  useExtendedSearch: false,
})

export const Taunts = () => {
  const [query, setQuery] = useState('')
  const taunts = !query
    ? items
    : fuse.search(query).map((result) => result.item)

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search taunts..."
        className="w-full max-w-[60ch] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul className="list-disc w-[60ch] flex flex-col gap-1">
        {taunts.map(({ key, text }) => (
          <li key={key}>
            {key}: {text}
          </li>
        ))}
      </ul>
    </>
  )
}
