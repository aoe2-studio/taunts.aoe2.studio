'use client'

import tauntsJson from '@/taunts.json'
import Fuse from 'fuse.js'
import { useState } from 'react'

const fuse = new Fuse(tauntsJson, {
  keys: ['text'],
  threshold: 0.3,
  distance: 100,
  ignoreLocation: true,
  minMatchCharLength: 2,
  useExtendedSearch: false,
})

const tags = Array.from(new Set(tauntsJson.flatMap((item) => item.tags)))

export const Taunts = () => {
  const [query, setQuery] = useState('')
  const [currentTag, setCurrentTag] = useState('all')
  const taunts = !query
    ? tauntsJson
    : fuse.search(query).map((result) => result.item)
  const filteredTaunts = taunts.filter(
    (taunt) => currentTag === 'all' || taunt.tags.includes(currentTag),
  )

  return (
    <>
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-xl font-semibold tracking-wide">
            Categories
          </h2>
          <ul className="flex flex-wrap gap-2">
            <li>
              <button
                className="cursor-pointer p-2 border border-gray-500 dark:border-gray-600 rounded data-[active=true]:border-2"
                data-active={currentTag === 'all'}
                onClick={() => setCurrentTag('all')}
              >
                all
              </button>
            </li>
            {tags.toSorted().map((tag) => (
              <li key={tag}>
                <button
                  className="cursor-pointer p-2 border border-gray-400 dark:border-gray-600 rounded data-[active=true]:border-2"
                  data-active={currentTag === tag}
                  onClick={() => setCurrentTag(tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search taunts..."
          className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      </header>

      <ul className="list-disc flex flex-col gap-1">
        {filteredTaunts.map(({ key, text }) => (
          <li key={key}>
            {key}: {text}
          </li>
        ))}
      </ul>
    </>
  )
}
